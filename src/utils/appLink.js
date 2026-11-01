const APP_ORIGIN = 'https://app.engrant.eu';
const STORAGE_KEY = 'engrant_inbound_params';

const FORBIDDEN_UTM_KEYS = new Set([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
]);

function parseSearch(search) {
  if (!search || typeof search !== 'string') {
    return {};
  }

  const normalized = search.startsWith('?') ? search.slice(1) : search;
  if (!normalized) {
    return {};
  }

  const params = {};
  const searchParams = new URLSearchParams(normalized);
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

function readStoredParams() {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return {};
    }
    return parsed;
  } catch {
    return {};
  }
}

function writeStoredParams(params) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    // sessionStorage may be unavailable; attribution still works for the current URL
  }
}

/**
 * Persist inbound query params on first touch only.
 * An empty search must not clear storage.
 */
export function captureInboundParams(search) {
  const incoming = parseSearch(search);
  if (Object.keys(incoming).length === 0) {
    return;
  }

  const stored = readStoredParams();
  const next = { ...stored };

  Object.entries(incoming).forEach(([key, value]) => {
    if (!(key in next)) {
      next[key] = value;
    }
  });

  writeStoredParams(next);
}

/**
 * Build an app.engrant.eu href that:
 * - forwards first-touch inbound params (utm_*, gclid, etc.)
 * - tags the button with cta
 * - never writes the five UTM fields from our own UI
 */
export function buildAppHref({ cta, path = '/', params = {} } = {}) {
  const currentSearch =
    typeof window !== 'undefined' ? window.location.search : '';

  // Prefer current URL params for this click, then fill gaps from first-touch storage
  const current = parseSearch(currentSearch);
  const stored = readStoredParams();
  const merged = { ...stored, ...current };

  // Also capture current params into storage (first-touch) so later pages keep them
  if (Object.keys(current).length > 0) {
    captureInboundParams(currentSearch);
  }

  const searchParams = new URLSearchParams();

  Object.entries(merged).forEach(([key, value]) => {
    if (value == null || value === '') {
      return;
    }
    // Never let our UI overwrite inbound UTMs; inbound values are already in merged
    searchParams.set(key, String(value));
  });

  // Drop any forbidden UTM keys that a caller might try to set via params
  Object.entries(params || {}).forEach(([key, value]) => {
    if (FORBIDDEN_UTM_KEYS.has(key)) {
      return;
    }
    if (value == null || value === '') {
      return;
    }
    searchParams.set(key, String(value));
  });

  if (cta) {
    searchParams.set('cta', cta);
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const query = searchParams.toString();
  return `${APP_ORIGIN}${normalizedPath}${query ? `?${query}` : ''}`;
}

/**
 * Static href for SSR / before hydration — only cta and non-UTM extras.
 */
export function buildStaticAppHref({ cta, path = '/', params = {} } = {}) {
  const searchParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (FORBIDDEN_UTM_KEYS.has(key)) {
      return;
    }
    if (value == null || value === '') {
      return;
    }
    searchParams.set(key, String(value));
  });

  if (cta) {
    searchParams.set('cta', cta);
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const query = searchParams.toString();
  return `${APP_ORIGIN}${normalizedPath}${query ? `?${query}` : ''}`;
}

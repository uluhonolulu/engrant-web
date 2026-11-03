let cachedSupportedCurrencies = null;

export function formatCurrencyAmount(value, currencyCode, options = {}) {
  const locale = options.locale || 'en-US';
  const normalizedCode = normalizeCurrencyCode(currencyCode);

  if (normalizedCode && isSupportedCurrencyCode(normalizedCode)) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: normalizedCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  const numeric = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

  if (normalizedCode) {
    return `${numeric} ${normalizedCode}`;
  }

  return numeric;
}

function normalizeCurrencyCode(value) {
  if (typeof value !== 'string') {
    return '';
  }
  return value.trim().toUpperCase();
}

function isSupportedCurrencyCode(code) {
  if (!/^[A-Z]{3}$/.test(code)) {
    return false;
  }

  const supportedSet = getSupportedCurrencySet();
  if (supportedSet) {
    return supportedSet.has(code);
  }

  try {
    new Intl.NumberFormat('en-US', { style: 'currency', currency: code }).format(1);
    return true;
  } catch {
    return false;
  }
}

function getSupportedCurrencySet() {
  if (cachedSupportedCurrencies !== null) {
    return cachedSupportedCurrencies;
  }

  if (typeof Intl.supportedValuesOf !== 'function') {
    cachedSupportedCurrencies = null;
    return cachedSupportedCurrencies;
  }

  try {
    const codes = Intl.supportedValuesOf('currency');
    cachedSupportedCurrencies = new Set(codes.map((code) => code.toUpperCase()));
    return cachedSupportedCurrencies;
  } catch {
    cachedSupportedCurrencies = null;
    return cachedSupportedCurrencies;
  }
}

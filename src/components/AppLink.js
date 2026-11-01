import React, { useRef } from 'react';
import { buildAppHref, buildStaticAppHref } from '../utils/appLink';

/**
 * Signup CTA that forwards inbound attribution params and tags the button with cta.
 * Never writes utm_source / utm_medium / utm_campaign / utm_term / utm_content.
 */
const AppLink = ({
  cta,
  path = '/',
  params,
  children,
  onClick,
  onMouseDown,
  onFocus,
  href: _ignoredHref,
  ...rest
}) => {
  const anchorRef = useRef(null);
  const staticHref = buildStaticAppHref({ cta, path, params });

  return (
    <a
      ref={anchorRef}
      href={staticHref}
      onMouseDown={(event) => {
        enrichHref(anchorRef, cta, path, params);
        if (onMouseDown) {
          onMouseDown(event);
        }
      }}
      onFocus={(event) => {
        enrichHref(anchorRef, cta, path, params);
        if (onFocus) {
          onFocus(event);
        }
      }}
      onClick={(event) => {
        enrichHref(anchorRef, cta, path, params);
        if (onClick) {
          onClick(event);
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );

  function enrichHref(ref, ctaValue, pathValue, paramsValue) {
    if (!ref.current) {
      return;
    }
    ref.current.href = buildAppHref({
      cta: ctaValue,
      path: pathValue,
      params: paramsValue,
    });
  }
};

export default AppLink;

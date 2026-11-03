import React from 'react';
import { fillTemplate } from './copy';
import { getDeadlineInfo } from './deadlineUtils';
import { formatCurrencyAmount } from './currencyFormatting';

const RELEVANCE_CONFIG = {
  high: {
    bgColor: 'bg-[#E7F4EF]',
    textColor: 'text-[#075A47]',
  },
  medium: {
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
  },
  low: {
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
};

const EFFORT_CONFIG = {
  low: {
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
  },
  medium: {
    bgColor: 'bg-[#EEF2F7]',
    textColor: 'text-[#4C6280]',
  },
  high: {
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
  'very-high': {
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
  },
};

const COMPETITIVENESS_CONFIG = {
  low: {
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
  },
  medium: {
    bgColor: 'bg-[#FAF1DF]',
    textColor: 'text-[#9A6410]',
  },
  high: {
    bgColor: 'bg-[#FAF1DF]',
    textColor: 'text-[#9A6410]',
  },
  'very-high': {
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
  },
};

const PublicGrantCard = ({ grant, copy }) => {
  const deadlineInfo = getDeadlineInfo(grant.deadline, copy.locale);
  const relevanceConfig = RELEVANCE_CONFIG[grant.relevanceCategory];
  const effortLevelKey =
    grant.effortLevel && EFFORT_CONFIG[grant.effortLevel] ? grant.effortLevel : 'medium';
  const effortConfig = EFFORT_CONFIG[effortLevelKey] || EFFORT_CONFIG.medium;
  const competitivenessLevelKey =
    grant.competitivenessLevel && COMPETITIVENESS_CONFIG[grant.competitivenessLevel]
      ? grant.competitivenessLevel
      : null;
  const competitivenessConfig = competitivenessLevelKey
    ? COMPETITIVENESS_CONFIG[competitivenessLevelKey]
    : null;
  const fitPoints = Array.isArray(grant.fitPoints) ? grant.fitPoints.slice(0, 2) : [];
  const orgFooter = buildOrgFooter(grant.org, copy);
  const foundStamp = buildFoundStamp(grant, copy.locale);
  const amountText = formatGrantAmount(grant.amount, copy);
  const funderTypeLabel = grant.funderType
    ? copy.fundingSource[grant.funderType] || grant.funderType
    : null;
  const showFactRow = Boolean(amountText || deadlineInfo);

  return (
    <article className="recent-grants-card h-full">
      {foundStamp && (
        <span className="recent-grants-card-stamp" aria-label={copy.foundLabel}>
          {foundStamp}
        </span>
      )}

      <div className="recent-grants-card-body">
        <div className="recent-grants-card-title line-clamp-2">{grant.title}</div>

        {grant.funder && (
          <p className="recent-grants-card-funder line-clamp-1">
            {grant.funder}
            {funderTypeLabel && (
              <span className="recent-grants-card-funder-type">
                {' · '}
                {formatBadgeLabel(funderTypeLabel)}
              </span>
            )}
          </p>
        )}

        {showFactRow && (
          <dl className="recent-grants-facts">
            {amountText && (
              <div className="recent-grants-fact-amount">
                <dt>{copy.amountLabel}</dt>
                <dd>{amountText}</dd>
              </div>
            )}
            {deadlineInfo && (
              <div>
                <dt>{copy.deadlineLabel}</dt>
                <dd>{deadlineInfo.displayDate}</dd>
              </div>
            )}
          </dl>
        )}

        <ul className="recent-grants-badges">
          {grant.relevanceScore != null && relevanceConfig && (
            <li className={`recent-grants-badge ${relevanceConfig.bgColor} ${relevanceConfig.textColor}`}>
              {formatBadgeLabel(copy.relevance[grant.relevanceCategory] || grant.relevanceCategory)}
              {' '}
              {grant.relevanceScore}%
            </li>
          )}

          <li className={`recent-grants-badge ${effortConfig.bgColor} ${effortConfig.textColor}`}>
            {formatBadgeLabel(copy.effort[effortLevelKey] || effortLevelKey)}
          </li>

          {competitivenessConfig && (
            <li
              className={`recent-grants-badge ${competitivenessConfig.bgColor} ${competitivenessConfig.textColor}`}
            >
              {formatBadgeLabel(
                copy.competitiveness[competitivenessLevelKey] || competitivenessLevelKey
              )}
            </li>
          )}
        </ul>

        {(grant.fitSummary || fitPoints.length > 0) && (
          <div className="recent-grants-why">
            <div className="recent-grants-why-heading">{copy.goodFitHeading}</div>
            {grant.fitSummary && (
              <p className="recent-grants-why-text line-clamp-3">{grant.fitSummary}</p>
            )}
            {!grant.fitSummary && fitPoints.length > 0 && (
              <ul className="space-y-1">
                {fitPoints.map((point, index) => (
                  <li key={index} className="recent-grants-why-text line-clamp-2">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {orgFooter && (
        <footer className="recent-grants-card-footer">
          <p className="line-clamp-2">
            {orgFooter.mission && (
              <span className="recent-grants-card-footer-mission">{orgFooter.mission}</span>
            )}
            {orgFooter.meta && (
              <span className="recent-grants-card-footer-meta">
                {orgFooter.mission ? ' · ' : ''}
                {orgFooter.meta}
              </span>
            )}
          </p>
        </footer>
      )}
    </article>
  );

  function formatBadgeLabel(label) {
    if (typeof label !== 'string' || !label) {
      return label;
    }

    return label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
  }

  function formatGrantAmount(amount, labels) {
    if (!amount || (amount.min === null && amount.max === null)) {
      return null;
    }

    if (amount.min !== null && amount.max !== null) {
      return `${formatCompactAmount(amount.min, amount.currency, labels.locale)}–${formatCompactAmount(amount.max, amount.currency, labels.locale)}`;
    }

    if (amount.min !== null) {
      return fillTemplate(labels.amountFrom, {
        amount: formatCompactAmount(amount.min, amount.currency, labels.locale),
      });
    }

    if (amount.max !== null) {
      return fillTemplate(labels.amountUpTo, {
        amount: formatCompactAmount(amount.max, amount.currency, labels.locale),
      });
    }

    return null;
  }

  function formatCompactAmount(value, currencyCode, locale) {
    const normalizedCode = typeof currencyCode === 'string' ? currencyCode.trim().toUpperCase() : '';
    const absValue = Math.abs(value);

    if (absValue >= 1000) {
      const thousands = value / 1000;
      const compactNumber = Number.isInteger(thousands)
        ? String(thousands)
        : thousands.toFixed(1).replace(/\.0$/, '');

      if (normalizedCode === 'USD' || !normalizedCode) {
        return `$${compactNumber}k`;
      }

      if (normalizedCode === 'EUR') {
        return `€${compactNumber}k`;
      }

      if (normalizedCode === 'GBP') {
        return `£${compactNumber}k`;
      }

      return `${compactNumber}k ${normalizedCode}`;
    }

    return formatCurrencyAmount(value, currencyCode, { locale });
  }

  function buildOrgFooter(org, labels) {
    if (!org) {
      return null;
    }

    const mission = org.shortMission || null;
    const metaParts = [
      org.region,
      org.budgetBand ? `${org.budgetBand} ${labels.budgetSuffix}` : null,
    ].filter(Boolean);

    if (!mission && metaParts.length === 0) {
      return null;
    }

    return {
      mission,
      meta: metaParts.join(' · '),
    };
  }

  function buildFoundStamp(grantData, locale) {
    if (!grantData.foundAt) {
      return '';
    }

    const foundDate = new Date(grantData.foundAt);
    if (Number.isNaN(foundDate.getTime())) {
      return '';
    }

    const day = foundDate.getDate();
    const month = foundDate
      .toLocaleDateString(locale, { month: 'short' })
      .replace('.', '');

    return `${day} ${month}`;
  }
};

export default PublicGrantCard;

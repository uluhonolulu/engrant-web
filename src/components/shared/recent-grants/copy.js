const COPY = {
  en: {
    locale: 'en',
    badge: 'Recently found',
    heading: 'Grants our users found through Engrant',
    description:
      'A sample of recent matches — embassy programmes, regional foundations, and corporate giving funds, across four continents.',
    foundLabel: 'Found:',
    budgetSuffix: 'budget',
    amountLabel: 'Amount',
    deadlineLabel: 'Deadline',
    goodFitHeading: 'Why this is a good fit',
    amountFrom: 'From {{amount}}',
    amountUpTo: 'Up to {{amount}}',
    carousel: {
      previous: 'Previous grant',
      next: 'Next grant',
      slideLabel: 'Grant {{index}} of {{total}}',
    },
    relevance: {
      high: 'Strong Fit',
      medium: 'Potential Fit',
      low: 'Limited Fit',
      'not-eligible': 'Ineligible',
    },
    effort: {
      low: 'Low Effort',
      medium: 'Medium Effort',
      high: 'High Effort',
      'very-high': 'Very High Effort',
      unknown: 'Effort Unknown',
    },
    competitiveness: {
      low: 'Low Competition',
      medium: 'Moderate Competition',
      high: 'High Competition',
      'very-high': 'Very Competitive',
      unknown: 'Competition Unknown',
    },
    fundingSource: {
      federal: 'U.S. Federal Government',
      state: 'State Government',
      local: 'Local Government',
      foundation: 'Private Foundation',
      corporate: 'Corporate Giving',
      eu: 'European Union',
      national: 'National Government',
      regional: 'Regional Government',
    },
  },
  es: {
    locale: 'es-419',
    badge: 'Encontradas recientemente',
    heading: 'Convocatorias que nuestros usuarios encontraron con Engrant',
    description:
      'Una muestra de coincidencias recientes — programas de embajadas, fundaciones regionales y fondos de responsabilidad social corporativa en América Latina.',
    foundLabel: 'Encontrado:',
    budgetSuffix: 'presupuesto',
    amountLabel: 'Monto',
    deadlineLabel: 'Fecha límite',
    goodFitHeading: 'Por qué encaja bien',
    amountFrom: 'Desde {{amount}}',
    amountUpTo: 'Hasta {{amount}}',
    carousel: {
      previous: 'Subvención anterior',
      next: 'Subvención siguiente',
      slideLabel: 'Subvención {{index}} de {{total}}',
    },
    relevance: {
      high: 'Buen ajuste',
      medium: 'Ajuste potencial',
      low: 'Ajuste limitado',
      'not-eligible': 'No elegible',
    },
    effort: {
      low: 'Esfuerzo bajo',
      medium: 'Esfuerzo medio',
      high: 'Esfuerzo alto',
      'very-high': 'Esfuerzo muy alto',
      unknown: 'Esfuerzo desconocido',
    },
    competitiveness: {
      low: 'Competencia baja',
      medium: 'Competencia moderada',
      high: 'Competencia alta',
      'very-high': 'Muy competitiva',
      unknown: 'Competencia desconocida',
    },
    fundingSource: {
      federal: 'Gobierno federal de EE. UU.',
      state: 'Gobierno estatal',
      local: 'Gobierno local',
      foundation: 'Fundación privada',
      corporate: 'Filantropía corporativa',
      eu: 'Unión Europea',
      national: 'Gobierno nacional',
      regional: 'Gobierno regional',
    },
  },
};

export function getRecentGrantsCopy(lang = 'en') {
  return COPY[lang] || COPY.en;
}

export function fillTemplate(template, values = {}) {
  if (typeof template !== 'string') {
    return template;
  }

  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (values[key] == null) {
      return '';
    }
    return String(values[key]);
  });
}

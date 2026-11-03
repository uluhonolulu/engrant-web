/**
 * Formats a grant deadline date for the public showcase cards.
 * @param {string | null | undefined} iso
 * @param {string} locale
 * @returns {{ displayDate: string } | null}
 */
export function getDeadlineInfo(iso, locale) {
  if (!iso) {
    return null;
  }

  const deadlineDate = new Date(iso);
  if (Number.isNaN(deadlineDate.getTime())) {
    return null;
  }

  return {
    displayDate: deadlineDate.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
  };
}

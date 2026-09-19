import React from 'react';
import {
  LAST_REVIEWED_LABEL,
  REVIEWER_INITIALS,
} from '../../utils/comparePageSchema';

const LastReviewed = () => {
  return (
    <p className="text-center text-sm text-neutral-500 py-4 border-b border-neutral-100 bg-white">
      Last reviewed {LAST_REVIEWED_LABEL} by {REVIEWER_INITIALS}
    </p>
  );
};

export default LastReviewed;

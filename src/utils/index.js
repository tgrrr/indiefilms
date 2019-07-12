import ISO6391 from 'iso-639-1';

export const isNumeric = number => !Number.isNaN(Number(number))
    && Number.isFinite(Number(number));

export const isTitleCase = word => word[0] === word[0].toUpperCase()[0]
    && word.substr(1) === word.substr(1).toLowerCase();

// LATER: convert to use moment.js if it becomes more complex
export const formatYear = date => date && date.slice(0, 4);

export const formatRating = float => float && Math.round(float) * 10;

export const formatLanguage = isoShortcode => (
  isoShortcode
    ? ISO6391.getName(isoShortcode)
    : 'no language provided');

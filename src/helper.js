export function GetYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function GetBrandingDifference(branding) {
  let brandingPrice;
  switch (branding) {
    case 'american':
      brandingPrice = 1.15;
      break;
    case 'asian':
      brandingPrice = 1.05;
      break;
    case 'european':
      brandingPrice = 1.3;
      break;
    default:
      break;
  }
  return brandingPrice;
}

export function getPlanDifference(plan) {
  return plan === 'basic' ? 1.2 : 1.5;
}

export function upperCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

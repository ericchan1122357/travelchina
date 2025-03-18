export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export function getCurrentSeason(): Season {
  const month = new Date().getMonth() + 1; // 0-11 转换为 1-12
  
  if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else if (month >= 9 && month <= 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function getSeasonTranslationKey(season: Season): string {
  return `season.${season}`;
} 
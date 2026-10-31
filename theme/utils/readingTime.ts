/**
 * Estimate reading time in minutes for markdown / HTML content
 */
export function calculateReadingTime(text: string): { text: string; minutes: number; words: number } {
  const clean = text.replace(/<[^>]*>/g, '').replace(/[\r\n\t]+/g, ' ').trim();
  const words = clean.length ? clean.split(/\s+/).length : 0;
  const wordsPerMinute = 200;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return {
    text: `${minutes} min read`,
    minutes,
    words
  };
}

export function readingTime(text: string): string {
  return calculateReadingTime(text).text;
}


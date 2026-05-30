export default function extractImageUrls(obj: unknown): string[] {
  const urls: string[] = [];

  function traverse(current: unknown): void {
    if (typeof current === 'string') {
      if (
        current.startsWith('http') &&
        /\.(png|gif|svg)(\?.*)?$/i.test(current)
      ) {
        urls.push(current);
      }
    } else if (Array.isArray(current)) {
      current.forEach(traverse);
    } else if (current && typeof current === 'object') {
      Object.values(current).forEach(traverse);
    }
  }

  traverse(obj);
  return urls;
}

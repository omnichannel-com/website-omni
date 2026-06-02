export function transformUrl(url: string): string {
    // Extract the last slug from the URL
    const segments = url.split('/').filter(Boolean);
    const lastSegment = segments.length > 0 ? segments[segments.length - 1] : '';

    // Remove the .html extension
    return lastSegment.replace(/\.html$/, '');
  }
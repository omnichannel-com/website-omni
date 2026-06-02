export function transformUrl(url: string): string {
    // Remove the .html extension while preserving the full path
    return url.replace(/\.html$/, '');
  }
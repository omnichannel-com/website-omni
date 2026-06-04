/**
 * Open an external URL in a new tab safely.
 */
export function openExternal(url: string): void {
  window.open(url, "_blank", "noopener,noreferrer");
}

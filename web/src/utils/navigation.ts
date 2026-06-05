/**
 * Open an external URL in a new tab safely.
 */
export function openExternal(url: string): void {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

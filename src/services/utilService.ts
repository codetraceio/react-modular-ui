export function generateKey(): string {
  return `k${Math.random().toString(36).substr(2, 20)}`;
}

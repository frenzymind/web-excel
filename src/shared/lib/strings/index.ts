export function capitalize(s: string, prefix = '') {
  return prefix + s.charAt(0).toUpperCase() + s.slice(1)
}

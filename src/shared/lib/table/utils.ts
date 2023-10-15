export function isResizeable(event: Event) {
  const _target = event.target as HTMLElement

  if (_target.dataset.resize) {
    return true
  }

  return false
}

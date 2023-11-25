export class Emitter {
  listeners: Record<string, Function[]> = {}

  // emit listeners
  emit(event: string, ...args: unknown[]) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(listener => {
        listener(...args)

        return true
      })
    }

    return false
  }

  subscribe(event: string, fn: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(fn)

    // function for unsubscribe
    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

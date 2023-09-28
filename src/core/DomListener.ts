export class DomListener {
  constructor(private $root: HTMLElement) {
    if (!this.$root) {
      throw new Error('No root element provided in DomListener constructor')
    }
  }
}

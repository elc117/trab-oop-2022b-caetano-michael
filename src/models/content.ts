abstract class Content {
  description: string

  constructor() {
    this.description = '';
  }

  getDescription() {
    return this.description
  }

  setDescription(value: string) {
    this.description = value
  }

  read() { }

}
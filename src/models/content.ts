abstract class Content {
  title: string
  description: string

  constructor(title: string) {
    this.title = title
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

export default Content

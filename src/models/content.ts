import IContent from '../Types/IContent';

abstract class Content {
  title: string
  description: string
  type: string

  constructor(title: string) {
    this.title = title
    this.description = '';
    this.type = ''
  }

  getDescription() {
    return this.description
  }

  setDescription(value: string) {
    this.description = value
  }

  getTitle() {
    return this.title
  }

  setTitle(value: string) {
    this.title = value
  }

  read() { return null }
}

export default Content

import Content from './content'

class Module {
  title: string
  description: string
  contents: Content[]

  constructor(title: string) {
    this.title = title
    this.description = ''
    this.contents = []
  }

  addContent(content: Content) {
    this.contents.push(content)
  }

  getDescription() {
    return this.description
  }

  setDescription(value: string) {
    this.description = value
  }

}

export default Module
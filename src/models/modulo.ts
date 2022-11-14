import Content from './content'
import * as readline from 'readline'

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

  run() {
    console.log(this.title)
    console.log(this.description)
  }
}

export default Module
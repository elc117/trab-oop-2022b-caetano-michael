import Content from './content'
import IModule from '../Types/IModule'
import IContent from '../Types/IContent'

class Module {
  title: string
  description: string
  contents: Content[]
  index: number

  constructor(title: string) {
    this.title = title
    this.description = ''
    this.contents = []
    this.index = 0
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

  read(): IModule | null {
    console.log('len', this.contents.length);

    if (this.contents.length === this.index) return null
    let contentData = this.contents[this.index].read()
    console.log("data", contentData);

    if (!contentData) return null
    let data = {
      title: this.title,
      description: this.description,
      content: contentData
    }
    this.index++
    return data
  }

}

export default Module
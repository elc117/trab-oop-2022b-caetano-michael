import Content from './content'

class TextContent extends Content {

  constructor(title: string) {
    super(title)
    this.type = "text"
  }

}

export default TextContent

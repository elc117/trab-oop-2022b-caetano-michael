import Content from './content'

class LinkContent extends Content {
  constructor(title: string) {
    super(title)
    this.type = "link"
  }

}

export default LinkContent

class Module {
  contents: Content[]

  constructor() {
    this.contents = []
    let textContent = new TextContent();
    this.contents.push(textContent);
  }
}

export default Module
import * as readline from 'readline'

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

  run() {
    console.log(this.title);
    console.log(this.description);
    // let rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    // rl.question('Pressione enter para avançar...\n', () => {
    //   rl.close()
    // })
  }
}

export default Content

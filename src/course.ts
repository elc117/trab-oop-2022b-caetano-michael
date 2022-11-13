import Module from './models/modulo'
import TextContent from './models/textContent'
import VideoContent from './models/videoContent'
import * as readline from 'readline'
import IModule from './Types/IModule'
import Content from './models/content'

class Course {
  modules: Module[]
  index: number
  constructor() {
    this.modules = []
    this.index = 0
    this.createModules()
  }

  private createModules() {
    let module, content
    module = new Module("O que é educação financeira")
    content = new TextContent("Aula 1")
    module.addContent(content)

    // criar contents
    this.modules.push(module)
    module = new Module("Modulo 2")
    // criar contents
    this.modules.push(module)
    module = new Module("Modulo 3")
    // criar contents
    this.modules.push(module)
  }

  read(): IModule | null {
    console.log("reading");

    if (this.modules.length === this.index) return null
    const data = this.modules[this.index].read()
    console.log("data course", data);

    this.index++
    console.log(data);

    return data
  }



  start() {
    let data = this.read()
    while (data) {
      let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      console.log(data.title);
      console.log(data.description);
      console.log(data.content?.title);
      rl.question(data.content?.description, () => { })
    }
  }


  public main() {
    this.start()
  }
}

export default new Course()
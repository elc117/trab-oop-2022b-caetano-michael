import Module from './models/modulo'

class Course {
  modules: Module[]
  constructor() {
    this.modules = []
    this.createModules()
  }

  private createModules() {
    let module = new Module("Modulo 1")
    // criar contents
    this.modules.push(module)
    module = new Module("Modulo 2")
    // criar contents
    this.modules.push(module)
    module = new Module("Modulo 3")
    // criar contents
    this.modules.push(module)
  }



  public main() {
    console.log("curso rodando.")
  }
}

export default new Course()
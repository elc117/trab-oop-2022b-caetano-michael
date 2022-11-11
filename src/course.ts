import Module from './models/modulo'

class Course {
  modules: Module[]
  constructor() {
    this.modules = []
  }

  public run() {
    console.log("curso rodando.")
  }
}

export default new Course()
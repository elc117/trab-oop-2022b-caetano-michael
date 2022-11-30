import { v4 as uuid } from "uuid"
import IProgress from "../Types/IProgress"

class User {
  id: string
  name: string
  progress: IProgress

  constructor(name: string) {
    this.name = name
    this.id = uuid()
    this.progress = { content: 1, module: 1 }
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getProgress() {
    return this.progress
  }

  setId(id: string) {
    this.id = id
  }

  setName(name: string) {
    this.name = name
  }

  setProgress(progress: IProgress) {
    this.progress = progress
  }

  save() {
    // implementar 
  }
}

export default User
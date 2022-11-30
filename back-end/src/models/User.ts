import { v4 as uuid } from "uuid"
import UserRepository from "../repository/UserRepository"
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

  setId(id: string) {
    this.id = id
  }

  getName() {
    return this.name
  }

  setName(name: string) {
    this.name = name
  }

  getProgress() {
    return this.progress
  }

  setProgress(progress: IProgress) {
    this.progress = progress
  }

  static async findByName(name: string): Promise<User | null> {
    const repo = await new UserRepository()
    return await repo.findByName(name)
  }

  save() {
    const repo = new UserRepository()
    repo.save(this)
  }
}

export default User
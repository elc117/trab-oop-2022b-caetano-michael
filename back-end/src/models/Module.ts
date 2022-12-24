import { v4 as uuid } from 'uuid'
import ModuleRepository from '../repository/ModuleRepository'
import IIndex from '../Types/IIndex'

class Module {
  id: string
  order: number
  title: string
  description: string

  constructor(title: string) {
    this.title = title
    this.description = ''
    this.order = 0
    this.id = uuid()
  }

  getOrder() {
    return this.order
  }

  setOrder(v: number) {
    this.order = v
  }

  getId() {
    return this.id
  }

  setId(id: string) {
    this.id = id
  }

  getDescription() {
    return this.description
  }

  setDescription(value: string) {
    this.description = value
  }

  static async getIndex() {
    const repo = new ModuleRepository()
    const modules = await repo.readAll()
    const index: IIndex[] = []

    modules.forEach(module => {
      const { id, order, title } = module
      index.push({ id, order, title })
    })

    return index
  }

  static async getById(id: string) {
    const repo = new ModuleRepository()
    const module = await repo.getById(id)

    return module
  }
}

export default Module
import { v4 as uuid } from 'uuid'
import ContentRepository from '../repository/ContentRepository'

class Content {
  id: string
  title: string
  description: string
  type: string
  moduleId: string
  order: number

  constructor(title: string) {
    this.title = title
    this.description = ''
    this.type = ''
    this.id = uuid()
    this.moduleId = ''
    this.order = 0
  }

  getId() {
    return this.id
  }

  setId(id: string) {
    this.id = id
  }

  getOrder() {
    return this.order
  }

  setOrder(v: number) {
    this.order = v
  }

  getType() {
    return this.type
  }

  setType(type: string) {
    this.type = type
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

  getModuleId() {
    return this.moduleId
  }

  setModuleId(value: string) {
    this.moduleId = value
  }

  static async getByModelId(id: string) {
    const repo = await new ContentRepository()
    const contents = await repo.getByModelId(id)

    return contents
  }
}

export default Content

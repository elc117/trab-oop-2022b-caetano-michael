import { ref, set } from 'firebase/database'
import db from '../service/Database'
import { v4 as uuid } from 'uuid'

abstract class Content {
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

  getOrder() {
    return this.order
  }

  setOrder(v: number) {
    this.order = v
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

  save() {
    const { id, ...data } = this
    set(ref(db, 'contents/' + id), { ...data })
  }
}

export default Content

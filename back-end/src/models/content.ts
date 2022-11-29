import { ref, set } from 'firebase/database'
import { db } from '../service/Database'

abstract class Content {
  id: string
  title: string
  description: string
  type: string
  moduleId: string

  constructor(title: string) {
    this.title = title
    this.description = ''
    this.type = ''
    this.id = ''
    this.moduleId = ''
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

  save() {
    const { id, ...data } = this
    set(ref(db, 'contents/' + id), { ...data })
  }
}

export default Content

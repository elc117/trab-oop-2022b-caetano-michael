import { ref, set } from 'firebase/database'
import db from '../service/Database'
import { v4 as uuid } from 'uuid'
import Content from './content'

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

  getDescription() {
    return this.description
  }

  setDescription(value: string) {
    this.description = value
  }

  save() {
    const { id, ...data } = this
    set(ref(db, 'modules/' + id), { ...data })
  }
}

export default Module
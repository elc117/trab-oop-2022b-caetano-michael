import { ref, set } from 'firebase/database'
import { db } from '../service/Database'
import Content from './content'

class Module {
  id: string
  title: string
  description: string
  contents: Content[]

  constructor(title: string) {
    this.title = title
    this.description = ''
    this.contents = []
    this.id = ''
  }

  addContent(content: Content) {
    this.contents.push(content)
  }

  getDescription() {
    return this.description
  }

  setDescription(value: string) {
    this.description = value
  }

  save() {
    const { id, ...data } = this
    set(ref(db, 'contents/' + id), { ...data })
  }
}

export default Module
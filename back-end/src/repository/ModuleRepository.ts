import { ref, set, get  } from 'firebase/database'
import Module from '../models/Module'
import db from '../service/Database'

class ModuleRepository {
  async readAll(): Promise<Module[]> {
    const modules: Module[] = []
    const snapshot = await get(ref(db, 'modules/'))

    snapshot.forEach((element) => {
      const moduleData = element.toJSON() as Module
      const module = new Module(moduleData.title)
      module.setDescription(moduleData.description)
      module.setOrder(moduleData.order)
      const moduleId = element.ref.toString().split('/').at(-1)!
      module.setId(moduleId)
      modules.push(module)
    })

    return modules
  }

  async getById(id: string): Promise<Module | null> {
    const snapshot = await get(ref(db, `modules/${id}`))

    const moduleData = snapshot.exists() ? snapshot.toJSON() as Module : null

    if (moduleData) {
      const module = new Module(moduleData.title)
      module.setDescription(moduleData.description)
      module.setOrder(moduleData.order)
      const moduleId = snapshot.ref.toString().split('/').at(-1)!
      module.setId(moduleId)
  
      return module
    }

    return null
  }
}

export default ModuleRepository
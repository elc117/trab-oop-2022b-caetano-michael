import { ref, set, get  } from 'firebase/database'
import db from '../service/Database'
import User from '../models/User'
import Module from '../models/Module'

class UserRepository {

  save(user: User) {
    const { id, ...data } = user
    set(ref(db, 'users/' + id), { ...data })
  }

  async findByName(name: string): Promise<User|null> {

    const snapshot = await get(ref(db, 'modules/'))
    
    snapshot.forEach((element) => {
      console.log('--------------------')
      console.log(element.toJSON() as Module)

    })
    return null
  }
}

export default UserRepository
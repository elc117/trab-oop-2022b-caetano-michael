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
    const snapshot = await get(ref(db, 'users/'))
    let user: User|null = null
    
    snapshot.forEach((element) => {
      const userData = element.toJSON() as User
      
      if (userData.name === name) {
        let userId = element.ref.toString().split('/').at(-1)!
        user = new User(userData.name)
        user.setId(userId)
        user.setProgress(userData.progress)
      }
    })

    return user
  }

  async findById(id: string): Promise<User|null> {
    const snapshot = await get(ref(db, `users/${id}`))
    const userData = snapshot.exists() ? snapshot.toJSON() as User : null
    
    if (userData) {
      const user = new User(userData.name)
      const userId = snapshot.ref.toString().split('/').at(-1)!
      user.setProgress(userData.progress)
      user.setId(userId)
      return user
    }

    return null
  }

}

export default UserRepository
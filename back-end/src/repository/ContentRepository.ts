import { ref, set, get  } from 'firebase/database'
import Content from '../models/Content'
import db from '../service/Database'

class ContentRepository {
  async getByModelId(id: string): Promise<Content[]|null> {
    const contents: Content[] = []
    const snapshot = await get(ref(db, 'contents/'))

    snapshot.forEach((element) => {
      const contentData = element.toJSON() as Content
      let content: Content

      if (contentData.moduleId === id) {
        let contentId = element.ref.toString().split('/').at(-1)!
        content = new Content(contentData.title)        
        content.setId(contentId)
        content.setType(contentData.type)
        content.setModuleId(contentData.moduleId)
        content.setOrder(contentData.order)
        content.setDescription(contentData.description)
        contents.push(content)
      }      
    })

    return contents
  }
}
export default ContentRepository
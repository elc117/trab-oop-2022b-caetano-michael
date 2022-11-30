import { Router } from 'express'
const routes = Router()
import User from './models/User'
import Module from './models/Module'
import Content from './models/Content'


routes.get('/index', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(await Module.getIndex())
})

routes.get('/module/:id', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  const resulte = {
    module: await Module.getById(req.params.id),
    contents: await Content.getByModelId(req.params.id)
  }
  res.send(resulte)
})

routes.post('/session', async (req, res) => {
  const { name } = req.body
  let user = await User.findByName(name)
  if (!user) {
    user = new User(name)
    user.save()
  }
  res.json(user)
})

routes.get('/teste', async (req, res) => {
  // User.findByName('052fc08f-18e1-4f4d-9b89-0369c8e1dcb8')
  let test = await Content.getByModelId('53ad8009-3b38-473f-92ae-6b0d1368f169')
  res.json(test)
})

export default routes
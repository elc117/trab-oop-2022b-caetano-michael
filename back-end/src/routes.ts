import { Router } from 'express'
const routes = Router()
import course from './models/course'
import User from './models/user'


routes.get('/index', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(course.getIndex())
})

routes.get('/module/:id', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(course.getModule(+req.params.id))
})

routes.post('/session', (req, res) => {
  const { name } = req.body
  const user = new User(name)
  user.save()
  res.json(user)
})

export default routes
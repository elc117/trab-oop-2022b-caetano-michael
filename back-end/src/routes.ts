import { Router } from 'express'
const routes = Router()
import course from './models/course'


routes.get('/index', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(course.getIndex())
})

routes.get('/module/:id', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(course.getModule(+req.params.id))
})

export default routes
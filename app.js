import express from 'express'
import path from 'path'
import routes from './server/routes'

const app = express()

app.use(express.static('public'))
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', ()=>{
  console.log(`server listening on ${PORT} port`)
})

routes(app)
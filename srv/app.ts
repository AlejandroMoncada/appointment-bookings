import express from 'express'
import medicalRouter from './routes/medical'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
  console.log('GET /')
  res.send('Hello World')
})

app.use('/api/medical', medicalRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

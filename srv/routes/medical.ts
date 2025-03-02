import express from 'express'
import * as medicalService from '../services/medicalService'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(medicalService.getEntriesBySpecialty())
})

router.get('/:id', (req: any, res: any) => {
  const medical = medicalService.findById(+req.params.id)

  return (medical != null)
    ? res.send(medical)
    : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  res.send('Saving a new entry')
})

export default router

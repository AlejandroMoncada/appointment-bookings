import { MedicalEntry, SpecialtyMedicalEntry } from '../types'
import medicalData from './medicalData.json'

const medical: MedicalEntry[] = medicalData as MedicalEntry[]

export const getEntries = (): MedicalEntry[] => medical

export const findById = (id: number): MedicalEntry | undefined => {
  const entry = medical.find(d => d.id === id)
  return entry
}

export const getEntriesBySpecialty = (): SpecialtyMedicalEntry[] => {
  return medical.map(({ id, nombre, especialidad, horarios }) => {
    return {
      id,
      nombre,
      especialidad,
      horarios
    }
  })
}

export const addEntry = (): undefined => undefined

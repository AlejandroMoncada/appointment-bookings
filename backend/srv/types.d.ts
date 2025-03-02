export type Especialidad = Neurología | Cardiología | Pediatría | Dermatología | Oftalmología | Ginecología
export type Horario = `${number}:${number} - ${number}:${number}`

export interface Horarios {
  lunes: Horario
  martes: Horario
  miércoles: Horario
  jueves: Horario
  viernes: Horario
  sabado?: Horario
  domingo?: Horario
}

export interface MedicalEntry {
  id: number
  nombre: string
  especialidad: Especialidad
  telefono: string
  correo: string
  direccion: string
  horarios: Horarios
}

export type SpecialtyMedicalEntry = Omit<MedicalEntry, 'telefono' | 'correo' | 'direccion'>

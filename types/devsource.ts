export type DevEntry = {
  name: string
  tasks: string[]
}

export type DevSourceData = {
  about: {
    title: string
    description: string
  }
  webDev: DevEntry[]
  appDev: DevEntry[]
  gameDev: DevEntry[]
}

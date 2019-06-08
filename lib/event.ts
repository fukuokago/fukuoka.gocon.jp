const timetableRaw = require('../data/timetable.json')
const speakersRaw = require('../data/speakers.json')

export interface Session {
  id: string
  start: string
  stop: string
  duration: string
  type: string
  room: string
  sponsor: boolean
}

export interface Speaker {
  id: string
  name: string
  avatar: string
  bio: string
  twitter: string
  url: string
  organization: string
  title: string
  abstract: string
  tags: string[]
}

export function getIds(): string[] {
  let obj: any[] = []
  for (const v of speakersRaw) {
    obj.push(v.id)
  }
  return obj
}

export function getTimetable() {
  let obj = {}
  for (const v of timetableRaw) {
    if (v.start === '') {
      continue
    }
    const row = normalizeSession(v)
    const time = row.start
    let merged = row
    if (v.id !== null) {
      const speaker = findSpeaker(v.id)
      merged = { ...speaker, ...row }
    }
    if (obj[time] === undefined) {
      obj[time] = []
    }
    obj[time].push(merged)
  }
  return obj
}

export function getSpeakers() {
  let obj: any[] = []
  for (const v of speakersRaw) {
    const speaker = findSpeaker(v.id)
    const session = findSession(v.id)
    const merged = { ...speaker, ...session }
    obj.push(merged)
  }

  // Shuffle
  for (var i = obj.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1))
    var tmp = obj[i]
    obj[i] = obj[r]
    obj[r] = tmp
  }

  return obj
}

export function findSession(id: string): Session {
  for (const v of timetableRaw) {
    if (v.id === id) {
      return normalizeSession(v)
    }
  }
  return {
    id: '',
    start: '',
    stop: '',
    duration: '',
    room: '',
    type: '',
    sponsor: false
  }
}

export function findSpeaker(id: string): Speaker {
  for (const v of speakersRaw) {
    if (v.id === id) {
      return normalizeSpeaker(v)
    }
  }
  return {
    id: '',
    name: '',
    avatar: '',
    bio: '',
    twitter: '',
    url: '',
    organization: '',
    title: '',
    abstract: '',
    tags: []
  }
}

function normalizeSession(data): Session {
  if (data.start === '' || data.stop === '') {
    data.start = 'N/A'
    data.stop = 'N/A'
    data.duration = '20 min'
    return data
  }

  return { ...data, ...{
    start: format24To12(data.start),
    stop: format24To12(data.stop),
    duration: timeDuration(data.start, data.stop)
  } }
}

function normalizeSpeaker(data): Speaker {
  if (data.organization === '') {
    data.organization = 'N/A'
  }
  if (data.title === '') {
    data.title = 'N/A'
  }
  if (data.abstract === '') {
    data.abstract = 'N/A'
  }
  if (
      data.avatar.indexOf('50641cb66638448146124fffc3f90ccd') !== -1 ||
      data.avatar.indexOf('f8e7a1a5f90a13a1dd9fb57ce65cab77') !== -1 ||
      data.avatar.indexOf('d299468335580748cb8d533d2650f9a4') !== -1 ||
      data.avatar.indexOf('27985720407b3813061e8a302508f06c') !== -1
    ) {
    data.avatar = require('~/assets/img/gopher-sunglass.png')
  }
  return data
}

function format24To12(t: string): string {
  if (t === undefined || t === '') {
    return ''
  }
  const colonRemoved = t.replace(/:/, '')
  const tt = parseInt(colonRemoved)
  const f12h = `${tt - (tt > 1200 ? 1200 : 0)}`.replace(/^(.*)(\d{2})$/, '$1:$2')
  return `${f12h} ${tt > 1200 ? 'PM' : 'AM'}`
}

function timeNumber(h: string, m: string): number {
  return Math.round((new Date(1970, 0, 1, parseInt(h), parseInt(m))).getTime() / 1000 / 60)
}

function timeDuration(start: string, stop: string): string {
  if (start === undefined || start === '' || stop === undefined || stop === '') {
    return ''
  }

  const s = start.split(':')
  const us = timeNumber(s[0], s[1])

  const ss = stop.split(':')
  const uss = timeNumber(ss[0], ss[1])

  const duMin = uss - us

  if (duMin >= 60) {
    const h = Math.floor(duMin / 60)
    const m = duMin - (h * 60)
    if (m === 0) {
      return `${h} hours`
    }

    return `${h} hours, ${m} min`
  }

  return `${duMin} min`
}

import { http, HttpResponse, delay } from 'msw'
import { config } from '@/config'

const { baseFirstUrl, baseSecondUrl } = config

export function buildUserNameFetch() {
  return http.get(`${baseFirstUrl}/user`, async () => {
    await delay(2000)
    return HttpResponse.json({
      id: 'user-id',
      userName: 'user name',
    })
    // return HttpResponse.json('not found', { status: 404 })
    // return HttpResponse.error()
  })
}

export function buildUserDescriptionFetch() {
  return http.get(`${baseSecondUrl}/user`, async () => {
    await delay(2000)
    return HttpResponse.json({
      id: 'user-id',
      userDescription: 'user description',
    })
    // return HttpResponse.json('not found', { status: 404 })
    // return HttpResponse.error()
  })
}

export const handlers = [buildUserNameFetch(), buildUserDescriptionFetch()]

import { config } from '@/config'

const { baseFirstUrl, baseSecondUrl } = config

export interface UserProfile {
  id: string
  name: string
  description: string
}

export async function fetchUserProfile(): Promise<UserProfile> {
  try {
    const firstUserResponse = await fetch(`${baseFirstUrl}/user`)
    const secondUserResponse = await fetch(`${baseSecondUrl}/user`)

    switch (!firstUserResponse.ok || !secondUserResponse.ok) {
      case true:
        // NOTE: 404などのエラーをthrowする
        throw new Error('error message')
      default:
        const firstData = await firstUserResponse.json()
        const secondData = await secondUserResponse.json()
        return {
          id: firstData.id,
          name: firstData.userName,
          description: secondData.userDescription,
        }
    }
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.warn('fetch page data error', error)
    throw error
  }
}

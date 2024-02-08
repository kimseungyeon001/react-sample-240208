import { useQuery } from '@tanstack/react-query'
import { fetchUserProfile, UserProfile } from '@/apis'

export function useUserProfileQuery() {
  const initialData: UserProfile = {
    id: '',
    name: '',
    description: '',
  }
  const {
    isLoading,
    data = initialData,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async (): Promise<UserProfile> => {
      return fetchUserProfile()
    },
  })

  return { isLoading, error, data }
}

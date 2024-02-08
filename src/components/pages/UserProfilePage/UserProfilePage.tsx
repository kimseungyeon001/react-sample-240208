import { DefaultLayout } from '@/components/common/DefaultLayout'
import { ErrorPage } from '@/components/pages/ErrorPage'
import { LoadingPage } from '@/components/pages/LoadingPage'
import { UserProfile } from '@/apis'
import { useUserProfileQuery } from '@/queries/useUserProfileQuery'

interface UserProfilePagePresenterProps {
  isLoading: boolean
  errorMessage?: string
  data: UserProfile
}

export function UserProfilePagePresenter({
  isLoading,
  errorMessage,
  data,
}: UserProfilePagePresenterProps) {
  if (isLoading) return <LoadingPage message="loading message" />
  if (errorMessage) return <ErrorPage message={errorMessage} />
  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center items-center h-full">
        <span>{data.name}</span>
        <p>{data.description}</p>
      </div>
    </DefaultLayout>
  )
}

export function UserProfilePage() {
  const { isLoading, error, data } = useUserProfileQuery()

  return (
    <UserProfilePagePresenter
      isLoading={isLoading}
      errorMessage={error?.message}
      data={data}
    />
  )
}

import { DefaultLayout } from '@/components/common/DefaultLayout'
import { Spinner } from '@/components/common/Spinner'

interface LoadingPageProps {
  message: string
}

export function LoadingPage({ message }: LoadingPageProps) {
  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center items-center h-full gap-2">
        <Spinner />
        <span>{message}</span>
      </div>
    </DefaultLayout>
  )
}

import type { Meta, StoryObj } from '@storybook/react'

import { ErrorPage } from './ErrorPage'

const meta: Meta<typeof ErrorPage> = {
  component: ErrorPage,
}
export default meta

type Story = StoryObj<typeof ErrorPage>

export const Default: Story = {
  render: (args) => <ErrorPage message={args.message} />,
  args: {
    message: 'error message',
  },
}

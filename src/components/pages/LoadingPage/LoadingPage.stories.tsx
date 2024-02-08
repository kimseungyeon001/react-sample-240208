import type { Meta, StoryObj } from '@storybook/react'

import { LoadingPage } from './LoadingPage'

const meta: Meta<typeof LoadingPage> = {
  component: LoadingPage,
}
export default meta

type Story = StoryObj<typeof LoadingPage>

export const Default: Story = {
  render: (args) => <LoadingPage message={args.message} />,
  args: {
    message: 'loading message',
  },
}

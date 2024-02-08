import type { Meta, StoryObj } from '@storybook/react'

import { UserProfilePagePresenter } from './UserProfilePage'

const meta: Meta<typeof UserProfilePagePresenter> = {
  component: UserProfilePagePresenter,
}
export default meta

type Story = StoryObj<typeof UserProfilePagePresenter>

export const WithData: Story = {
  render: (args) => (
    <UserProfilePagePresenter
      isLoading={args.isLoading}
      errorMessage={args.errorMessage}
      data={args.data}
    />
  ),
  args: {
    isLoading: false,
    errorMessage: undefined,
    data: {
      id: 'user-id',
      name: 'user name',
      description: 'user description',
    },
  },
}

export const Loading: Story = {
  render: (args) => (
    <UserProfilePagePresenter
      isLoading={args.isLoading}
      errorMessage={args.errorMessage}
      data={args.data}
    />
  ),
  args: {
    isLoading: true,
    errorMessage: undefined,
    data: {
      id: '',
      name: '',
      description: '',
    },
  },
}

export const Error: Story = {
  render: (args) => (
    <UserProfilePagePresenter
      isLoading={args.isLoading}
      errorMessage={args.errorMessage}
      data={args.data}
    />
  ),
  args: {
    isLoading: false,
    errorMessage: 'error message',
    data: {
      id: '',
      name: '',
      description: '',
    },
  },
}

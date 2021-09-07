import { classnames } from 'tailwindcss-classnames'

export const button = classnames(
  'block',
  'bg-black',
  'text-white',
  'text-sm',
  'rounded-full',
  'py-2',
  'px-5'
)

export const link = classnames('no-underline hover:text-purple focus:text-purple')

export const menuLink = classnames(link, 'flex')

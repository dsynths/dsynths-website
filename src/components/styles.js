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

export const link = classnames('no-underline hover:text-ds-purple focus:text-ds-purple')

export const menuLink = classnames(link, 'flex')

export const footerLink = classnames('no-underline hover:text-white focus:text-white')

export const productTitle = classnames(
  'title-gradient text-transparent bg-clip-text font-bold text-4xl'
)

export const heroContainer = classnames('h-full flex justify-around items-center hero-gradient')

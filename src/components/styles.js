import { classnames } from 'tailwindcss-classnames'

export const button = classnames(
  'block',
  'bg-black',
  'hover:bg-gray-800',
  'focus:bg-gray-800',
  'text-white',
  'text-sm',
  'rounded-full',
  'py-2',
  'px-5'
)
export const buttonPrimary = classnames(
  'block',
  'bg-black',
  'hover:bg-gray-800',
  'focus:bg-gray-800',
  'text-white',
  'text-sm',
  'font-medium',
  'leading-tight',
  'rounded-lg',
  'py-3',
  'px-6'
)

export const link = classnames('no-underline hover:text-ds-purple focus:text-ds-purple')

export const linkSecondary = classnames(
  'underline text-white hover:text-ds-violet focus:text-ds-violet'
)

export const menuLink = (active) => classnames('flex', { 'text-ds-purple': active })

export const footerLink = classnames('no-underline hover:text-white focus:text-white')

export const productTitle = classnames(
  'title-gradient text-transparent bg-clip-text font-bold text-4xl'
)

export const heroContainer = classnames(
  'flex flex-col md:flex-row justify-around items-center hero-gradient pt-16 md:pt-28 pb-12 md:pb-20 px-6 space-x-2 space-y-9 md:space-y-0'
)

export const productCard = classnames(
  'w-80 px-11 py-6 bg-white shadow-card rounded-3xl ring-1 ring-gray-100 transition-transform hover:-translate-y-1 duration-300 flex flex-col group'
)

export const productCardLink = classnames(
  'underline text-gray-400 text-xs group-hover:text-ds-violet focus:text-ds-violet outline-none'
)

export const howItWorksCard = classnames(
  'mx-auto w-full max-w-5xl rounded-3xl py-16 px-4 relative shadow-md group'
)
export const howItWorksCardLink = classnames(
  'absolute right-9 bottom-6 text-xs opacity-50 group-hover:opacity-80'
)

export const characteristicsCard = classnames(
  'shadow-card rounded-3xl text-left p-10 text-3xl font-bold bg-gradient-to-br'
)

export const statsCard = classnames(
  'homepage-stat-card-gradient w-72 h-72 p-10 shadow-card rounded-3xl text-white text-center mx-auto flex flex-col items-center justify-between text-4xl'
)

export const gradientCard = classnames(
  'hero-gradient pt-12 pb-9 w-96 rounded-3xl flex flex-col h-[450px] md:h-[600px]'
)

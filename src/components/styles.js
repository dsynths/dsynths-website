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

export const menuLink = (active) => classnames('flex', { 'text-ds-purple': active })

export const footerLink = classnames('no-underline hover:text-white focus:text-white')

export const productTitle = classnames(
  'title-gradient text-transparent bg-clip-text font-bold text-4xl'
)

export const heroContainer = classnames(
  'flex flex-col md:flex-row justify-around items-center hero-gradient pt-16 md:pt-28 pb-12 md:pb-20 px-6 space-x-2 space-y-9 md:space-y-0'
)

export const card = classnames(
  'w-80 px-11 py-6 shadow-card rounded-3xl ring-1 ring-gray-100 transition-transform hover:-translate-y-1 duration-300 flex flex-col'
)

export const productCard = classnames(
  'w-80 px-11 py-6 bg-white shadow-card rounded-3xl ring-1 ring-gray-100 transition-transform hover:-translate-y-1 duration-300 flex flex-col'
)

export const characteristicsCard = classnames(
  'w-96 h-72 p-10 shadow-card rounded-3xl text-left'
)

export const statsCard = classnames(
  'homepage-stat-card-gradient w-72 h-72 p-10 shadow-card rounded-3xl text-white text-center mx-auto'
)

export const signUpInstructionsCard = classnames(
  'homepage-signup-inst-card-gradient max-w-3xl p-10 shadow-card rounded-3xl text-center mx-auto'
)

export const gradientCard = classnames(
  'hero-gradient pt-12 pb-9 w-96 rounded-3xl flex flex-col h-[450px] md:h-[600px]'
)

export const homePageHeroContainer = classnames(
  'h-full flex justify-around items-center home-hero-gradient'
)

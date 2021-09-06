import { useRef } from 'react'
import { classnames } from 'tailwindcss-classnames'

import useOutsideClick from '../../hooks/useOutsideClick'

export const Sidebar = ({ toggled, handleToggled, children }) => {
  const wrapperRef = useRef(null)
  useOutsideClick(wrapperRef, () => {
    handleToggled(false)
  })

  return (
    <div
      ref={wrapperRef}
      className={classnames(
        'fixed bg-white top-0 bottom-0 right-0 shadow-md transition-all transform duration-200 block min-w-[200px] max-w-[300px] w-full',
        {
          ['opacity-100']: toggled,
          ['opacity-0 pointer-events-none translate-x-2']: !toggled,
        }
      )}
    >
      {children}
    </div>
  )
}

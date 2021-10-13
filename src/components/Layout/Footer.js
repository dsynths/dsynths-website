import Link from 'next/link'

import Logo from '../Logo'
import * as componentStyles from '../styles'

import { footerMapping } from '../../constants/data/footer'

const Footer = () => {
  return (
    <div className="bg-ds-purple text-purple-100 py-9 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 max-w-screen-xl mx-auto">
        <div className="md:max-w-md">
          <div className="flex items-center space-x-2 mb-2">
            <Logo width={16} height={16} />
            <span>dSynths - &copy; {new Date().getFullYear()} All Rights Reserved</span>
          </div>
          <p className="text-sm text-purple-200">
            dSynths is a non-profit community-led initiative that unifies existing smart contract
            technologies into one interface. dSynths is not responsible for any occured trading
            losses on the platform, trade at your own risk.
          </p>
        </div>

        <div className="flex justify-between md:justify-around flex-wrap flex-shrink-0">
          {footerMapping.length && footerMapping.map(o => (
            <div key={o.category}>
              <h4 className="mb-4 text-white font-bold">{o.category}</h4>
              <ul>
                {o.items.map((item, index) => {
                  const { title, external, href } = item
                  return (external) ? (
                    <li key={index}>
                      <a className={componentStyles.footerLink} href={href} target="_blank" rel="noreferrer noopener">{title}</a>
                    </li>
                  ) : (
                    <li key={index}>
                      <Link href={href}>
                        <a className={componentStyles.footerLink}>{title}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer

import Link from 'next/link'

import Logo from '../Logo'
import * as componentStyles from '../styles'

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
          <div className="">
            <h4 className="mb-4 text-white">Products</h4>
            <ul>
              <li>
                <Link href="#">
                  <a className={componentStyles.footerLink}>Exchange</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className={componentStyles.footerLink}>iFrames</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className={componentStyles.footerLink}>Synth API</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className={componentStyles.footerLink}>Fiat On-Ramp</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="mb-4 text-white">Resources</h4>
            <ul>
              <li>
                <Link href="#">
                  <a
                    className={componentStyles.footerLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Medium
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/dsynths">
                  <a
                    className={componentStyles.footerLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a
                    className={componentStyles.footerLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Learn
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a
                    className={componentStyles.footerLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Developers
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="mb-4 text-white">Socials</h4>
            <ul>
              <li>
                <Link href="https://t.me/dsynths">
                  <a
                    className={componentStyles.footerLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Telegram
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/dsynths">
                  <a
                    className={componentStyles.footerLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Twitter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/bkaNfHRR">
                  <a
                    className={componentStyles.footerLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Discord
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

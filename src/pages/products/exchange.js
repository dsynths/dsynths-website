import { classnames } from 'tailwindcss-classnames'
import Layout from '../../components/Layout'
import * as componentClasses from '../../components/styles'
import { exchangeMapping } from '../../constants/data/exchange'

const ExchangePage = () => {
  return (
    <Layout>
      <div className={classnames(componentClasses.heroContainerStacked, 'md:text-center')}>
        <div>
          <h1 className={classnames(componentClasses.productTitle, 'break-words')}>
            Trade Synthetics, Stocks, Commodities &amp; Crypto
          </h1>
          <p className="text-xl mt-2">Low Fees. No Slippage. No KYC.</p>
        </div>
        <div className="w-full overflow-x-scroll text-center">
          <div className="my-10 sm:mt-16 sm:p-7 px-2 grid grid-cols-3 gap-x-6 max-w-3xl w-full min-w-max mx-auto">
            {exchangeMapping.length && exchangeMapping.map((product, i) => {
              const { href, title, subtitle, img, link } = product
              return (
                <a
                  className={componentClasses.productCard}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={i}
                >
                  <div className="text-3xl font-medium my-8">{title}</div>
                  <p className="flex-1">{subtitle}</p>
                  <img
                    className="my-3 md:my-6 mx-auto"
                    src={img.src}
                    alt={img.alt}
                    width={80}
                    height={80}
                  />
                  <div className={componentClasses.productCardLink}>{link}</div>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <section className="text-center py-16 px-4 section-gradient">
        <h2 className="text-4xl font-medium">Explore our Markets</h2>
        <p className="text-lg mt-2">Running on &amp; interacting with multiple blockchains.</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 mt-11">
          <div className={componentClasses.gradientCard}>
            <div className="text-3xl font-medium mt-8">
              Running on 5 <br className={classnames(componentClasses.smallBreak)}/>different blockchains
            </div>
            <div className="flex-1 flex flex-wrap px-12 gap-x-3 justify-around items-center">
              <div className="bg-white w-16 h-16 shadow-lg rounded-full flex items-center justify-center">
                <img src="/images/binance.png" width={42} height={43} alt="binance" />
              </div>
              <div className="bg-white w-16 h-16 shadow-lg rounded-full flex items-center justify-center transform translate-y-16">
                <img src="/images/ethereum.png" width={44} height={44} alt="ethereum" />
              </div>
              <div className="bg-white w-16 h-16 shadow-lg rounded-full flex items-center justify-center">
                <img src="/images/xdai.png" width={43} height={43} alt="xdai" />
              </div>
              <div className="bg-white w-16 h-16 shadow-lg rounded-full flex items-center justify-center">
                <img src="/images/huobi.png" width={60} height={60} alt="huobi" />
              </div>
              <div className="bg-white w-16 h-16 shadow-lg rounded-full flex items-center justify-center transform -translate-y-8">
                <img src="/images/polygon.png" width={40} height={41} alt="polygon" />
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-3">and continuously adding more</p>

          </div>
          <div className={componentClasses.gradientCard}>
            <div className="text-3xl font-medium my-8">
              1,425 <br />
              Unique Assets
            </div>
            <div className="flex-1 text-4xl flex items-center justify-center text-transparent title-gradient bg-clip-text">
              Crypto
              <br />
              Stocks
              <br />
              Commodities
              <br />
              Indexes
            </div>
            <a className={classnames(componentClasses.buttonPrimary, 'shadow-xl mx-12')} href="https://app.dsynths.com/markets"  target="_blank" rel="noreferrer noopener">
            Visit Markets
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ExchangePage

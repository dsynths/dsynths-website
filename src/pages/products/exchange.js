import * as componentClasses from '../../components/styles'

const ExchangePage = () => {
  return (
    <>
      <div className={componentClasses.heroContainer}>
        <div>
          <h1 className={componentClasses.productTitle}>
            Trade Synthetics
            <br />
            Stocks, Commodities &amp; Crypto
          </h1>
          <p className="text-xl mt-2">Low Fees. No Slippage. No KYC.</p>
        </div>
        <div>
          <img src="/images/products-exchange.png" alt="Exchange" width={581} height={455} />
        </div>
      </div>

      <section className="bg-white text-center py-16">
        <h2 className="text-4xl font-medium">A Trading Interface for All</h2>
        <p className="text-lg mt-2">Running on &amp; interacting with multiple blockchains.</p>
        <div className="overflow-x-auto">
          <div className="mt-16 p-7 grid grid-cols-3 gap-x-6 max-w-5xl w-full min-w-max mx-auto">
            <div className={componentClasses.productCard}>
              <div className="text-3xl font-medium my-8">Simple</div>
              <p className="flex-1">
                Offer derivatives, and the trading thereof, on your website without the burden of
                having to create your own infrastructure.
              </p>
              <img
                className="my-12 mx-auto"
                src="/images/monkey-simple.png"
                alt="monkey eyes closed"
                width={80}
                height={80}
              />
              <a className={componentClasses.productCardLink} href="#">
                Go to simple ↗
              </a>
            </div>
            <div className={componentClasses.productCard}>
              <div className="text-3xl font-medium my-8">Basic</div>
              <p className="flex-1">
                Get the latest market information via our REST API, covering: contracts, images,
                depth &amp; prices. WebSockets are available for direct oracle-price feeds.
              </p>
              <img
                className="my-12 mx-auto"
                src="/images/monkey-basic.png"
                alt="monkey eyes closed"
                width={80}
                height={80}
              />
              <a className={componentClasses.productCardLink} href="#">
                Go to basic ↗
              </a>
            </div>
            <div className={componentClasses.productCard}>
              <div className="text-3xl font-medium my-8">Advanced</div>
              <p className="flex-1">
                Load up your blockchain wallet directly from your IBAN account, without interacting
                with our servers.
              </p>
              <img
                className="my-12 mx-auto"
                src="/images/monkey-advanced.png"
                alt="monkey eyes closed"
                width={80}
                height={80}
              />
              <p className="text-gray-400 text-xs">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-16 section-gradient">
        <h2 className="text-4xl font-medium">Explore our Markets</h2>
        <p className="text-lg mt-2">Running on &amp; interacting with multiple blockchains.</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 mt-11">
          <div className={componentClasses.gradientCard}>
            <div className="text-3xl font-medium my-8">
              Running on <br />5 chains
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
              <div className="bg-white w-16 h-16 shadow-lg rounded-full flex items-center justify-center"></div>
              <div className="bg-white w-16 h-16 shadow-lg rounded-full flex items-center justify-center transform -translate-y-8">
                <img src="/images/polygon.png" width={40} height={41} alt="polygon" />
              </div>
            </div>
            <p className="text-xs text-gray-600">We are constantly adding additional chains</p>
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
            <p className="text-xs text-gray-600">Coming Soon</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExchangePage

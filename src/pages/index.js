import Link from 'next/link'
import * as componentClasses from '../components/styles'

const Home = () => {
  return (
    <div className="m-0 p-0">
      <div className={componentClasses.homePageHeroContainer}>
        <div className="flex content-center">
          <div className="flex flex-col ml-20">
            <h1 className="text-white font-bold text-6xl mb-4">The Decentralised Stock Exchnage</h1>
            <p className="text-white ">No Signup. No KYC. Welcome to Web3.</p>
          </div>
        </div>
        <div className="my-16">
          <img
            src="/images/phone-homepage.png"
            width="956px"
            height="502px"
            alt=""
            className="mix-blend-multiply"
          />
        </div>
      </div>

      <section className="homepage-first-section-gradient text-center py-16">
        <h2 className="text-4xl font-medium">Explore our Products</h2>
        <p className="text-lg mt-2">Running on &amp; interacting with multiple blockchains.</p>
        <div className="overflow-x-auto">
          <div className="mt-16 p-7 grid grid-cols-4 gap-x-6 max-w-5xl w-full min-w-max mx-auto">
            <div className={componentClasses.productCard}>
              <div className="text-3xl font-medium my-8">Exchange</div>
              <p className="flex-1">
                Trade and manage over 50,000 synthetic derivates without having to signup, nor
                experience slippage. Basic &amp; Advanced interfaces.
              </p>
              <img
                className="my-12 mx-auto"
                src="/images/homepage-exchange.png"
                alt="exchange illustration"
                width={185}
                height={115}
              />
              <Link href="/products/exchange">
                <a className="underline text-gray-400 hover:text-ds-violet text-xs">Start Trading</a>
              </Link>
            </div>
            <div className={componentClasses.productCard}>
              <div className="text-3xl font-medium my-8">iFrames</div>
              <p className="flex-1">
                Offer derivatives, and the trading thereof, on your website without the burden of
                having to create your own infrastructure.
              </p>
              <img
                className="my-12 mx-auto"
                src="/images/homepage-iframes.png"
                alt="iframes model"
                width={185}
                height={115}
              />
              <Link href="/products/iframe">
                <a className="underline text-gray-400 hover:text-ds-violet text-xs">Learn More</a>
              </Link>
            </div>
            <div className={componentClasses.productCard}>
              <div className="text-3xl font-medium my-8">API</div>
              <p className="flex-1">
                Get the latest market information via our REST API, covering: contracts, images,
                depth &amp; prices. WebSockets are available for direct orale-price feeds.
              </p>
              <img
                className="my-12 mx-auto"
                src="/images/homepage-api.png"
                alt="api model"
                width={115}
                height={115}
              />
              <Link href="/products/api">
                <a className="underline text-gray-400 hover:text-ds-violet text-xs">Learn More</a>
              </Link>
            </div>
            <div className={componentClasses.productCard}>
              <div className="text-3xl font-medium my-8">Fiat Gateway</div>
              <p className="flex-1">
                Load up your blockchain wallet directly from your IBAN account, without interacting
                with our servers.
              </p>
              <img
                className="my-12 mx-auto"
                src="/images/homepage-fiat-gateway.png"
                alt="fiat gateway illustration"
                width={185}
                height={115}
              />
              <Link href="/products/fiat">
                <a className="underline text-gray-400 hover:text-ds-violet text-xs">Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="homepage-mid-section-gradient text-center pt-16 pb-8">
        <h2 className="text-4xl font-medium">How does dSYNTHS works?</h2>
        <p className="text-lg mt-2 mb-10 ">Leveraging ground breaking technologies.</p>
        <div className="flex flex-col gap-0 flex-wrap w-full min-w-max mx-auto text-center">
          <div
            style={{ background: 'linear-gradient(148.07deg, #585757 1.45%, #000000 100%)' }}
            className="relative text-white mx-auto content-center homepage-stack-card p-12"
          >
            <h2 className="text-4xl font-medium">DEUS AMM</h2>
            <p className="text-lg mt-2">
              The DEUS protocol is the underlying engine, providing liquidity and the markets.
            </p>
            <a className="relative top-20 left-96" href="https://deus.finance">Visit deus.finance ↗</a>
          </div>
          <div
            style={{
              background:
                'linear-gradient(148.07deg, rgba(249, 249, 249, 0.01) 1.45%, #CBCAFF 100%)',
            }}
            className="relative mx-auto content-center homepage-stack-card p-12"
          >
            <h2 className="text-4xl font-medium">MUON Oracle</h2>
            <p className="text-lg mt-2">
              Muon Pythia module provides us trustless and instant pricefeeds, secured by Threshold
              Signature technology.
            </p>
            <a className="relative top-20 left-96" href="https://muon.net">Visit muon.net ↗</a>
          </div>
          <div
            style={{
              background: 'linear-gradient(148.07deg, #4AA8EC 1.45%, rgba(67, 0, 209, 0.35) 100%)',
            }}
            className="text-white mx-auto content-center homepage-stack-card relative p-12"
          >
            <h2 className="text-4xl font-medium">dSYNTHS UI</h2>
            <p className="text-lg mt-2">
              dSynths is the interface built on top of, and leveraging, the DEUS and Muon Protocols.
              we don&apos;t hold customer records nor have a trading engine. Your entire trading
              experience is done through Web3.
            </p>
            <a className="relative top-12 left-96" href="#">Go to Exchange ↗</a>
          </div>
        </div>
      </section>

      <section className="text-center py-16">
        <h2 className="text-4xl font-medium">Unique Characteristics</h2>
        <p className="text-lg mt-2">Beyond anything you&apos;ve ever experienced.</p>
        <div className="mt-16 grid grid-cols-2 gap-4 max-w-5xl w-max min-w-max mx-auto">
          <div
            className={componentClasses.characteristicsCard}
            style={{
              background:
                'linear-gradient(147.77deg, rgba(254, 215, 67, 0.83) -0.49%, rgba(151, 18, 82, 0.37) 100%)',
            }}
          >
            <p className="flex-1">
              No slippage! <br />
              Groundbreaking vault technology provided by the DEUS Protocol makes this possible.
            </p>
          </div>
          <div
            className={componentClasses.characteristicsCard}
            style={{
              background: 'linear-gradient(148.07deg, #9BEC4A 1.45%, #4DC0B9 100%)',
            }}
          >
            <p className="flex-1">
              No KYC &amp; Sign-Ups. <br />
              Connect your blockchain wallet and start trading.
            </p>
          </div>
          <div
            className={componentClasses.characteristicsCard}
            style={{
              background: 'linear-gradient(148.07deg, #B1D8F3 1.45%, rgba(67, 0, 209, 0.35) 100%)',
            }}
          >
            <p className="flex-1">
              Orcale verified, real-time prices. Quotes are pegged to the underlying market prices.
            </p>
          </div>
          <div
            className={componentClasses.characteristicsCard}
            style={{
              background:
                'linear-gradient(148.07deg, rgba(74, 168, 236, 0.35), rgba(67, 0, 209, 0.122) 100%)',
            }}
          >
            <p className="flex-1">
              Multi-chain asset availability. Trade your favourite stocks on Ethereum, xDAI, Binance
              Smart Chain and Polygon.
            </p>
          </div>
        </div>
      </section>

      <section className="homepage-last-section-gradient text-center py-16">
        <div className="mb-16">
          <h2 className="text-4xl font-medium">Astonishing growth of our Exchange</h2>
          <p className="text-lg mt-2">Numbers speak louder than words.</p>
          <div className="mt-16 grid grid-cols-3 justify-center gap-1 max-w-4xl w-full min-w-max mx-auto">
            <div className={componentClasses.statsCard}>
              <img
                className="my-12 mx-auto"
                src="/images/homepage-transactions.png"
                alt="transactions count"
                width={80}
                height={80}
              />
              <p className="flex-1 text-4xl">43,000+ Transactions</p>
            </div>
            <div className={componentClasses.statsCard}>
              <img
                className="my-8 mx-auto"
                src="/images/homepage-supported-chains.png"
                alt="supported chains"
                width={70}
                height={70}
              />
              <p className="flex-1 text-4xl">5 Supported Chains </p>
            </div>
            <div className={componentClasses.statsCard}>
              <img
                className="my-8 mx-auto"
                src="/images/homepage-tvl.png"
                alt="total value locked"
                width={70}
                height={70}
              />
              <p className="flex-1 text-4xl">90M TVL</p>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-4xl mt-0 font-medium">How do I Sign-Up?</h2>
          <p className="text-lg mt-2 mb-10">You don&apos;t have to. Seriously.</p>

          <div className={componentClasses.signUpInstructionsCard}>
            <p className="text-left">
              Web3 is the latest technological advancement where smart contract technology powers
              the way you intereact with applications. Web3 apps are decentralized, permissionless
              and completely trustless.
            </p>
            <br />
            <p className="text-left">
              At dSynths , no user records are stored, no matchmaking takes place and most
              importantly, we don&apos;t tell you what you can and can not do. Wihtin market hours,
              you can buy and sell stocks from wherever and whenever.
            </p>
            <br />
            <p className="text-left mb-14">
              We merely provide an interface to interact with these smart contracts. Your identity
              and activity is shielded by the blockchain, so you don&apos;t have to worry about KYC,
              hacks or illicit hedge funds.
            </p>
            <button className="my-6 rounded-xl bg-black py-2 px-6 text-white">
              Learn how to setup a wallet
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

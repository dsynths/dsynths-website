import Link from 'next/link'
import { useRef } from 'react'
import { classnames } from 'tailwindcss-classnames'

import { PlusIcon } from '../components/Icons'
import { productsMapping } from '../constants/data/home'
import * as componentClasses from '../components/styles'

const Home = () => {
  const productsRef = useRef(null)

  return (
    <>
      <div className="home-hero-gradient overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center max-w-6xl px-8 w-full mx-auto">
          <div className="lg:my-48 mt-16 mb-8 relative md:z-10">
            <h1 className="text-white font-bold text-4xl mb-4 sm:text-6xl">
              The Dentralized Stock Exchange
            </h1>
            <p className="text-white text-xl mb-4">No Signup. No KYC. Welcome to Web3.</p>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
              <Link href="/products/exchange">
                <a className={classnames(componentClasses.buttonPrimary, 'shadow-xl')}>
                  Start Trading Now
                </a>
              </Link>
              <button
                className={classnames(componentClasses.linkSecondary)}
                onClick={() => {
                  productsRef.current.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                or discover our other products
              </button>
            </div>
          </div>
          <div className="relative w-full h-full lg:py-16 pb-8" >
            <img
              src="/images/phone-homepage.png"
              width={956}
              height={502}
              className="lg:absolute mix-blend-color-dodge w-full lg:w-[956px] lg:max-w-[200%] lg:top-8 lg:-left-44"
              alt="dsynths app screenshot"
            />
          </div>
        </div>
      </div>

      <section className="homepage-first-section-gradient text-center pt-8 sm:pt-16 px-4" ref={productsRef}>
        <h2 id="explore-our-products" className="text-4xl font-medium">
          Explore our Products
        </h2>
        <p className="text-lg mt-2 px-2">Running on &amp; interacting with multiple blockchains.</p>
        <div className="overflow-x-auto">
          <div className="my-2 sm:my-10 p-7 px-2 grid grid-cols-4 gap-x-6 max-w-3xl w-full min-w-max mx-auto">
            {productsMapping.length && productsMapping.map((product, i) => {
              const { href, title, subtitle, img, link } = product
              return (
                <Link href={href} key={i}>
                  <a className={componentClasses.productCard} >
                    <div className="text-3xl font-medium my-8">{title}</div>
                    <p className="flex-1">{subtitle}</p>
                    <img
                    className="my-3 md:my-6 mx-auto"
                      src={img.src}
                      alt={img.alt}
                      style={{
                        height: '120px',
                        width: 'auto'
                      }}
                    />
                    <div className={componentClasses.productCardLink}>{link}</div>
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="homepage-mid-section-gradient text-center pt-8 sm:pt-16 px-4">
        <h2 className="text-4xl font-medium">How does <br className={classnames(componentClasses.smallBreak)}/>dSYNTHS work?</h2>
        <p className="text-lg mt-2 mb-10 ">Leveraging ground breaking technologies.</p>

        <div className="flex flex-col gap-0 flex-wrap w-full mx-auto text-center relative">
          <div
            className={classnames(
              componentClasses.howItWorksCard,
              'text-white bg-gradient-to-br from-[#585757] to-black'
            )}
          >
            <h3 className="text-3xl font-medium">DEUS AMM</h3>
            <p className="text-lg mt-2 max-w-xl mx-auto">
              The DEUS protocol is the underlying engine, providing liquidity and the markets.
            </p>
            <a className={componentClasses.howItWorksCardLink} href="https://deus.finance">
              Visit deus.finance ↗
            </a>
          </div>
          <div className="bg-white rounded-full -my-5 relative z-10 w-10 h-10 flex items-center justify-center mx-auto">
            <PlusIcon className="w-3 h-3" />
          </div>
          <div
            className={classnames(
              componentClasses.howItWorksCard,
              'text-black bg-gradient-to-br from-[#F9F9F9] to-[#CBCAFF]'
            )}
          >
            <h3 className="text-3xl font-medium">MUON Oracle</h3>
            <p className="text-lg mt-2 max-w-xl mx-auto">
              Muon Pythia module provides us trustless and instant pricefeeds, secured by Threshold
              Signature technology.
            </p>
            <a className={componentClasses.howItWorksCardLink} href="https://muon.net">
              Visit muon.net ↗
            </a>
          </div>
          <div className="bg-white rounded-full -my-5 relative z-10 w-10 h-10 flex items-center justify-center mx-auto">
            <PlusIcon className="w-3 h-3" />
          </div>
          <div
            className={classnames(
              componentClasses.howItWorksCard,
              'text-white bg-gradient-to-br from-[#4AA8EC] to-[rgba(67,0,209,0.35)]'
            )}
          >
            <h3 className="text-3xl font-medium">dSYNTHS UI</h3>
            <p className="text-lg mt-2 max-w-xl mx-auto">
              dSynths is the interface built on top of, and leveraging, the DEUS and Muon Protocols.
              we don&apos;t hold customer records nor have a trading engine. Your entire trading
              experience is done through Web3.
            </p>
            <Link href="/products/exchange">
              <a className={componentClasses.howItWorksCardLink}>
                Go to Exchange ↗
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center pt-12 sm:pt-16 px-4">
        <h2 className="text-4xl font-medium">Unique Characteristics</h2>
        <p className="text-lg mt-2">Beyond anything you&apos;ve ever experienced.</p>
        <div className="mt-4 sm:mt-16 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 max-w-5xl w-full mx-auto">
          <div
            className={classnames(
              componentClasses.characteristicsCard,
              'from-[rgba(254,215,67,0.83)] to-[rgba(151,18,82,0.37)]'
            )}
          >
            <p className="flex-1 max-w-xs">
              No slippage! Groundbreaking vault technology provided by the DEUS Protocol makes this possible.
            </p>
          </div>
          <div
            className={classnames(
              componentClasses.characteristicsCard,
              'from-[rgba(155,236,74,1)] to-[rgba(77,192,185,1)]'
            )}
          >
            <p className="flex-1 max-w-xs">
              No KYC &amp; Sign-Ups. Connect your blockchain wallet and start trading.
            </p>
          </div>
          <div
            className={classnames(
              componentClasses.characteristicsCard,
              'from-[rgba(177,216,243,1)] to-[rgba(67,0,209,0.35)]'
            )}
          >
            <p className="flex-1 max-w-xs">
              Orcale verified, real-time prices. Quotes are pegged to the underlying market prices.
            </p>
          </div>
          <div
            className={classnames(
              componentClasses.characteristicsCard,
              'from-[rgba(74,168,236,0.35)] to-[rgba(67,0,209,0.12)]'
            )}
          >
            <p className="flex-1 max-w-xs">
              Multi-chain asset availability. Trade your favourite stocks on Ethereum, xDAI, Binance
              Smart Chain and Polygon.
            </p>
          </div>
        </div>
      </section>

      <section className="homepage-last-section-gradient text-center py-12 sm:py-16 px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-medium">Astonishing growth of our Exchange</h2>
          <p className="text-lg mt-2">Numbers speak louder than words.</p>
          <div className="mt-4 sm:mt-16 grid grid-cols-1 md:grid-cols-3 justify-center gap-5 max-w-4xl w-full min-w-max mx-auto">
            <div className={componentClasses.statsCard}>
              <div className="flex h-20 w-20 items-center justify-center">
                <img
                  src="/images/homepage-transactions.png"
                  alt="transactions count"
                  width={75}
                  height={37}
                />
              </div>
              <p>43,000+ Transactions</p>
            </div>
            <div className={componentClasses.statsCard}>
              <div className="flex h-20 w-20 items-center justify-center">
                <img
                  src="/images/homepage-supported-chains.png"
                  alt="supported chains"
                  width={54}
                  height={54}
                />
              </div>
              <p>5 Supported Chains </p>
            </div>
            <div className={componentClasses.statsCard}>
              <div className="flex h-20 w-20 items-center justify-center">
                <img
                  src="/images/homepage-tvl.png"
                  alt="total value locked"
                  width={52}
                  height={63}
                />
              </div>
              <p>
                90M
                <br />
                TVL
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-32 px-4">
          <h2 className="text-4xl mt-0 font-medium">How do I Sign-Up?</h2>
          <p className="text-lg mt-2 mb-4 sm:mb-10">You don&apos;t have to. Seriously.</p>

          <div className="homepage-signup-inst-card-gradient max-w-3xl p-4 sm:p-10 shadow-sm rounded-3xl text-left text-lg mx-auto">
            <p className="mt-0 sm:mt-4">
              Web3 is the latest technological advancement where smart contract technology powers
              the way you intereact with applications. Web3 apps are decentralized, permissionless
              and completely trustless.
            </p>
            <p className="mt-4">
              At dSynths , no user records are stored, no matchmaking takes place and most
              importantly, we don&apos;t tell you what you can and can not do. Wihtin market hours,
              you can buy and sell stocks from wherever and whenever.
            </p>
            <p className="mt-4">
              We merely provide an interface to interact with these smart contracts. Your identity
              and activity is shielded by the blockchain, so you don&apos;t have to worry about KYC,
              hacks or illicit hedge funds.
            </p>
            <button className={classnames(componentClasses.buttonPrimary, 'mx-auto mt-12 mb-8')}>
              Learn how to setup a wallet
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

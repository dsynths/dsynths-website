import { classnames } from 'tailwindcss-classnames'
import * as componentClasses from '../components/styles'

const LearnPage = () => {
  return (
    <div className={classnames(componentClasses.heroContainer, 'h-full')}>
      <div
        style={{
          width: '544px',
          height: '390px',
          boxShadow: '0px 0px 10px 5px rgba(0,0,0, 0.05)',
          background:
            'linear-gradient(148.07deg, rgba(74,168,236,0.35) 1.45%, rgba(67,0,209,0.1225) 100%), #FFFFFF',
          backdropFilter: 'blur(4px)',
          borderRadius: '25px',
        }}
      >
        <div className="h-full flex flex-col text-center mx-20">
          <h1 className={classnames(componentClasses.productTitle, 'mt-auto')}>For Traders</h1>
          <p className="text-xl mt-2 mb-auto">
            Learn how dSynths works, why we exist, and how traders of equity and crypto markets can
            benefit from it.
          </p>
          <p className="text-ds-grey mb-2 text-xl">Coming Soon</p>
        </div>
      </div>
      <div
        style={{
          width: '544px',
          height: '390px',
          boxShadow: '0px 0px 10px 5px rgba(0,0,0, 0.05)',
          background:
            'linear-gradient(148.07deg, rgba(74,168,236,0.35) 1.45%, rgba(67,0,209,0.1225) 100%), #FFFFFF',
          backdropFilter: 'blur(4px)',
          borderRadius: '25px',
        }}
      >
        <div className="h-full flex flex-col text-center mx-20">
          <h1 className={classnames(componentClasses.productTitle, 'mt-auto')}>For Developers</h1>
          <p className="text-xl mt-2 mb-auto">
            dSynths is developed with widespread adoption of the DEUS and Muon protocols as its core
            philosophy. To accomplish such a feat, our products are well equipped to serve any
            developer&apos;s needs.
          </p>
          <p className="text-ds-grey mb-2 text-xl">Coming Soon</p>
        </div>
      </div>
    </div>
  )
}

export default LearnPage

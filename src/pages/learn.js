import { classnames } from 'tailwindcss-classnames'
import * as componentClasses from '../components/styles'

const textMapping = [
  {
    title: 'For Traders',
    text: 'Learn how dSynths works, why we exist, and how traders of equity and crypto markets can benefit from it.',
    subtext: 'More information soon',
  },
  {
    title: 'For Developers',
    text: 'dSynths is developed with widespread adoption of the DEUS and Muon protocols as its core philosophy. To accomplish such a feat, our products are designed for builders.',
    subtext: 'More information soon',
  },
]

const LearnPage = () => {
  return (
    <div className={classnames(componentClasses.learnContainer, 'h-full')}>
      {textMapping.map((o, index) => {
        const { title, text, subtext } = o
        return (
          <div
            className="my-0 sm:my-auto flex max-w-full first:mr-8"
            key={index}
            style={{
              width: '544px',
              height: '390px',
              boxShadow: '0px 0px 10px 5px rgba(0,0,0, 0.05)',
              background: 'linear-gradient(148.07deg, rgba(74,168,236,0.35) 1.45%, rgba(67,0,209,0.1225) 100%), #FFFFFF',
              borderRadius: '25px',
            }}
          >
            <div className="h-full flex flex-col text-center mx-4 md:mx-20">
              <h1 className={classnames(componentClasses.productTitle, 'mt-16')}>{title}</h1>
              <p className="text-xl mt-2 mb-auto flex-1">{text}</p>
              <p className="text-ds-grey mb-2 text-sm">{subtext}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LearnPage

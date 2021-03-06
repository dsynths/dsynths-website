import { classnames } from 'tailwindcss-classnames'

import Layout from '../../components/Layout'
import * as componentClasses from '../../components/styles'

const APIPage = () => {
  return (
    <Layout>
      <div className={classnames(componentClasses.heroContainer, 'h-full')}>
        <div>
          <h1 className={componentClasses.productTitle}>Synthetics API</h1>
          <p className="text-xl mt-2">We&apos;ve got all the info you need.</p>
        </div>
        <div
          className="my-auto flex max-w-full"
          style={{
            width: '544px',
            height: '390px',
            boxShadow: '0px 0px 10px 5px rgba(0,0,0, 0.05)',
            background:
              'linear-gradient(148.07deg, rgba(74,168,236,0.35) 1.45%, rgba(67,0,209,0.1225) 100%), #FFFFFF',
            borderRadius: '25px',
          }}
        >
          <p className="text-white m-auto">Coming soon.</p>
        </div>
      </div>
    </Layout>
  )
}

export default APIPage

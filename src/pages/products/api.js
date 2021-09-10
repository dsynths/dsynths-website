import * as componentClasses from '../../components/styles'

const APIPage = () => {
  return (
    <div className={componentClasses.heroContainer}>
      <div>
        <h1 className={componentClasses.productTitle}>Synthetics API</h1>
        <p
          className="text-xl mt-2"
        >
          We&apos;ve got all the info you need.
        </p>
      </div>
      <div
        className="my-auto flex"
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
        <p className="text-white m-auto">Coming soon.</p>
      </div>
    </div>
  )
}

export default APIPage

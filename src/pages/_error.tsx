import { ErrorStateBanner } from '@/components/stateBanners'
{
  /* {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'} */
}
const Error = ({ statusCode }) => {
  const message = () => {
    switch (statusCode) {
      case 404:
        return `It feels like page you are looking for does'nt exist!`

      default:
        return `It feels like something went wrong!`
    }
  }

  return (
    <div className="flex flex-center h-100">
      <ErrorStateBanner summary={message()} />
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error

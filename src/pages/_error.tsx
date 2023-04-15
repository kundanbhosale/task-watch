import { ErrorStateBanner } from '@/components/stateBanners'
import * as Sentry from '@sentry/nextjs'

{
  /* {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'} */
}
const Error = ({ statusCode }: any) => {
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

Error.getInitialProps = async (ctx: any) => {
  const statusCode = ctx.res
    ? ctx.res.statusCode
    : ctx.err
    ? ctx.err.statusCode
    : 404
  await Sentry.captureUnderscoreErrorException(ctx)
  return { statusCode }
}

export default Error

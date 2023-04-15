import Head from 'next/head'
import React, { Fragment } from 'react'
import SingleBoardScreen from 'src/screens/single'

const SingleBoard = () => {
  return (
    <Fragment>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <SingleBoardScreen />
    </Fragment>
  )
}

export default SingleBoard

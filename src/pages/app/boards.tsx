import Head from 'next/head'
import React, { Fragment } from 'react'
import Boardlist from 'src/screens/boards/list'

const BoardsPage = () => {
  return (
    <Fragment>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Boardlist />
    </Fragment>
  )
}

export default BoardsPage

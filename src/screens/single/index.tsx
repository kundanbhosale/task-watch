import { TaskboardProvider, useTaskBoard } from '@/contexts/board'
import React from 'react'
import { useRouter } from 'next/router'
import BoardColumns from '@/components/taskboard/columns'
import BoardTable from '@/components/taskboard/table'

const SingleBoardScreen = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <TaskboardProvider id={id as string}>
      <GetViews />
    </TaskboardProvider>
  )
}

const GetViews = () => {
  const { view } = useTaskBoard()

  return view === 'table' ? <BoardTable /> : <BoardColumns />
}

export default SingleBoardScreen

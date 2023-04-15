import { useTaskBoard } from '@/contexts/board'
import { localDb } from '@/db/index'
import { Page, addPage, getPage, updatePage } from '@/db/pages'
import { TaskItem } from '@/db/taskitems'
import { handleUpdateTask } from '@/utils/taskboard'
import { OutputData } from '@editorjs/editorjs'
import dynamic from 'next/dynamic'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

const EditTaskPage = ({ taskData }: { taskData: TaskItem | undefined }) => {
  const [initial, setInitial] = useState<OutputData | undefined>(undefined)
  const { items, editTaskId, setItems } = useTaskBoard()
  const [ready, setReady] = useState(false)
  const [output, setOutput] = useState<OutputData | null>(null)
  const [isNew, setIsNew] = useState(false)

  const handleSave = async () => {
    if (!items || !output || !editTaskId || editTaskId === 'new' || !taskData)
      return

    if (!taskData.page_id) {
      const page = await addPage(localDb, { content: output })
      if (!page) return
      handleUpdateTask(
        taskData,
        { ...taskData, page_id: page.id } as any,
        items,
        setItems
      )
    } else {
      updatePage(localDb, taskData.page_id, { content: output })
    }
  }

  const getInitial = async (id: Page['id']) => {
    const result = await getPage(localDb, id)
    setInitial(result?.content)
    setReady(true)
  }

  useEffect(() => {
    handleSave()
  }, [output])

  useEffect(() => {
    setReady(false)
    if (editTaskId === 'new') {
      setIsNew(true)
    }
    if (
      !isNew &&
      editTaskId &&
      editTaskId !== 'new' &&
      taskData &&
      taskData.page_id
    ) {
      getInitial(taskData.page_id)
    } else {
      setReady(true)
    }
    return () => {
      setInitial(undefined)
    }
  }, [editTaskId, taskData])

  // console.log(initial)

  const BlockEditor = dynamic(() => import('../forms/blockEditor'), {
    ssr: false,
  })

  const mem = useMemo(
    () => (
      <Wrapper>
        <BlockEditor
          onSave={(output) => setOutput(output)}
          initialData={initial}
        />
      </Wrapper>
    ),
    [ready]
  )

  if (ready) return mem
  else return null
}

export default EditTaskPage

const Wrapper = styled.div`
  padding: 1em 0.5em;
`

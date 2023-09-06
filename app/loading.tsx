'use client'
import React, { useEffect } from 'react'
import { CenteredLayout } from '../common/Container.styled'
import { MaruSpinner } from '../common/Spinner'
import { GitHubClient } from '../data/github.client.ts'

interface LoadingProps {
  callback: () => void
  onerror: () => void
  buffer?: number
}
const Loading: React.FC<LoadingProps> = (props) => {
  useEffect(() => {
    Promise.all([
      GitHubClient.getAll(),
      props.buffer !== undefined
        ? new Promise(function (resolve, reject) {
          setTimeout(resolve, props.buffer)
        })
        : null
    ]).then(props.callback)
      .catch(props.onerror)
  }, [])
  return <CenteredLayout>
        <MaruSpinner/>
    </CenteredLayout>
}

export default Loading

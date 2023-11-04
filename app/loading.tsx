'use client'
import React, { useEffect } from 'react'
import { CenteredLayout } from '../common/styled/Container.styled'
import { MaruSpinner } from '../common/styled/Spinner'

interface LoadingProps {
  callback: () => void
  onerror: () => void
  /** Buffer just to show off the cool spinner if there is no data to load. */
  buffer?: number
}

const Loading: React.FC<LoadingProps> = (props) => {
  useEffect(() => {
    props.buffer !== undefined &&
        new Promise(function (resolve, reject) {
          setTimeout(resolve, props.buffer)
        }).then(props.callback)
          .catch(props.onerror)
  }, [props.buffer, props.onerror, props.callback])
  return <CenteredLayout>
        <MaruSpinner/>
    </CenteredLayout>
}

export default Loading

import {
  ActionIcon, ActiveTabBar, CloneInput, CloneTabBar, CloneTabButton, CloneUrl, CloneWindow,
  CloneWindowTitle
} from 'common/Github.styled'
import { type Repository } from 'data/model/Repository'
import React, { useEffect, useRef, useState } from 'react'
import { copyText } from 'util/copy'

enum CloneMethod {
  SSH,
  HTTP
}

const CloneWindowWrapper: React.FC<{ repo: Repository, onExit: () => void }> = ({ repo, onExit }) => {
  const [cloneMethod, setCloneMethod] = useState<CloneMethod>(CloneMethod.HTTP)
  const activeCloneWindow = useRef<HTMLDivElement>(null)
  let firstClick = true
  useEffect(() => {
    const clickEL = (e: Event): void => {
      if (!firstClick && !activeCloneWindow.current.contains(e.target as Node)) {
        onExit()
      }
      firstClick = false
    }
    window.addEventListener('click', clickEL)

    return () => {
      window.removeEventListener('click', clickEL)
    }
  }, [])
  return <CloneWindow ref={activeCloneWindow}>
        <CloneWindowTitle>Clone</CloneWindowTitle>
        <hr/>
        <CloneTabBar>
            {
                Object.keys(CloneMethod).filter(method => isNaN(parseInt(method))).map(method => <CloneTabButton key={method} onClick={() => { setCloneMethod(CloneMethod[method]) }}>
                    {method}
                    {
                        cloneMethod === CloneMethod[method] ? <ActiveTabBar/> : ''
                    }
                </CloneTabButton>)
            }
        </CloneTabBar>
        <CloneInput>
            <CloneUrl value={cloneMethod === CloneMethod.HTTP ? repo.cloneUrl.http : repo.cloneUrl.ssh} readOnly={true}/>
            <ActionIcon src="/images/toclipboard.png" onClick={() => { copyText(cloneMethod === CloneMethod.HTTP ? repo.cloneUrl.http : repo.cloneUrl.ssh) }}/>
        </CloneInput>
    </CloneWindow>
}

export default CloneWindowWrapper

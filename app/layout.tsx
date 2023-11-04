import { App, Body } from 'common/styled/Container.styled'
import { Quicksand } from 'next/font/google'
import React, { type ReactNode } from 'react'
import StyledComponentsRegistry from './registry'

const quicksand = Quicksand({
  weight: '300',
  display: 'swap',
  subsets: ['latin']
})

export default function RootLayout ({
  children
}: {
  children: ReactNode
}): React.ReactNode {
  return (
    <StyledComponentsRegistry>
      <App lang="en" className={quicksand.className}>
        <Body>
            {children}
        </Body>
      </App>
    </StyledComponentsRegistry>

  )
}

import { Quicksand } from 'next/font/google'
import React, { type ReactNode } from 'react'
import { App, Body } from '../common/Container.styled'

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
        <App lang="en" className={quicksand.className}>
            <Body>
                {children}
            </Body>
        </App>
  )
}

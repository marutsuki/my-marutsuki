'use client'
import Home from 'app/home'
import Loading from 'app/loading'
import React, { useState } from 'react'

enum LoadingStatus {
  PENDING = 0,
  SUCCESS = 1,
  ERROR = 2
};

export default function Page (): React.ReactNode {
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>(LoadingStatus.PENDING)
  if (loadingStatus === LoadingStatus.PENDING) {
    return <Loading
            callback={() => { setLoadingStatus(LoadingStatus.SUCCESS) }}
            onerror={() => { setLoadingStatus(LoadingStatus.ERROR) }}
            buffer={5000}/>
  }
  return <Home/>
}

"use client"
import { useState } from "react";
import Loading from "./loading";

enum LoadingStatus {
    PENDING = 0,
    SUCCESS = 1,
    ERROR = 2
};

export default function Page() {
    const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>(LoadingStatus.PENDING);
    if (loadingStatus === LoadingStatus.PENDING) {
        return <Loading 
            callback={() => setLoadingStatus(LoadingStatus.SUCCESS)} 
            onerror={() => setLoadingStatus(LoadingStatus.ERROR)}
            buffer={5000}/>
    }
    return <h1>Hello, Next.js!</h1>;
}
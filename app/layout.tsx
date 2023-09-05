import { ReactNode } from "react";
import { App, Body,  } from "../common/Container.styled";

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <App lang="en">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
            <Body>
                {children}
            </Body>
        </App>
    )
}
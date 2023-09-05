import { ReactNode } from "react";
import { DarkBackground } from "../common/Container.styled";

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
            <DarkBackground>{children}</DarkBackground>
        </html>
    )
}
import { ReactNode } from "react";
import { DarkBackground } from "../common/Container.styled";

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
            <DarkBackground>{children}</DarkBackground>
        </html>
    )
}
'use client'

import { Theme } from "@carbon/react"
import { ReactNode } from "react"

export default function ThemeWrapper({children}: {children: ReactNode}){
    return (
        <Theme theme="g100" style={{padding:'2rem'}}>
            {children}
        </Theme>
    )
}
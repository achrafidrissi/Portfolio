'use client'

import {ThemeProvider as NextThemesProvider } from
        "next-themes";

export function ThewmeProvider({ children, ...props }) {
    return (
        <NextThemesProvider {...props} >
            {children}
        </NextThemesProvider>
    )
}
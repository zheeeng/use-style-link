import { useEffect } from 'react'

const links = typeof window === 'undefined' ? null : document.getElementsByTagName('link')

export const useStyleLink = (
    url: string,
    autoClear: boolean = false,
    isSameLink: (link1: string, link2: string) => boolean = (link1, link2) => link1 === link2
) => {
    useEffect(
        () => {
            // SSR
            if (!links) return

            const link = document.createElement('link')
            link.href = url

            const fullHref = link.href

            // prevent insertion duplication
            const maybeExistedLink = Array.from(links).find(l => isSameLink(l.href, fullHref))
            if (maybeExistedLink) {
                return () => {
                    if (!autoClear) return
                    document.head.removeChild(maybeExistedLink)
                }
            }

            link.type = 'text/css'
            link.rel = 'stylesheet'
            document.head.appendChild(link)

            return () => {
                if (!autoClear) return
                document.head.removeChild(link)
            }
        },
        [url, autoClear]
    )
}
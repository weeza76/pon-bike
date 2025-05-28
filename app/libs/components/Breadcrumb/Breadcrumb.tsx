'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

const toTitleCase = (str: string) =>
    str
        .replace(/[-_]/g, ' ')
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ')

export const Breadcrumb = () => {
    const pathname = usePathname() || '/'
    const segments = pathname.split('/').filter(Boolean)

    const items = segments.map((segment, idx) => {
        const route = '/' + segments.slice(0, idx + 1).join('/')
        const label = toTitleCase(decodeURIComponent(segment))
        return {label, route}
    })

    return (
        <nav className="flex items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            {items.map(({label, route}, i) => (
                <span key={route} className="flex items-center gap-2">
          <span>{'>'}</span>
                    {i === items.length - 1 ? (
                        <span>{label}</span>
                    ) : (
                        <Link href={route}>{label}</Link>
                    )}
        </span>
            ))}
        </nav>
    )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {

  const pathname = usePathname()

  const segments =
    pathname
      .split('/')
      .filter(Boolean)

  return (

    <div
  style={{
    maxWidth: '1180px',

    margin: '0 auto',

    padding:
      '148px 32px 32px',

    width: '100%',
  }}
>

      <Link
        href="/"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        Home
      </Link>

      {segments.map(
        (segment, index) => {

          const href =
            '/' +
            segments
              .slice(0, index + 1)
              .join('/')

          const label =
            segment
              .replace(/-/g, ' ')

          return (

            <span key={href}>

              {' / '}

              <Link
                href={href}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {label}
              </Link>

            </span>
          )
        }
      )}

    </div>
  )
}
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Navbar({
  light = false,
}: {
  light?: boolean
}) {
  return (

    <motion.nav

  initial={{
    opacity: 0,
    y: -12,
  }}

  animate={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    duration: 1.4,
    delay: 0.4,
    ease: [0.22, 1, 0.36, 1],
  }}
      style={{
  width: '100%',

  position: 'fixed',

  top: 0,
  left: 0,

  zIndex: 100,

  padding: '28px 0',
}}
    >
<div
  style={{
    maxWidth: '1180px',

    margin: '0 auto',

    padding: '0 32px',

    width: '100%',

    display: 'grid',

    gridTemplateColumns:
      '1fr auto 1fr',

    alignItems: 'center',
  }}
>
      {/* LEFT */}

    <Link
  href="/"
  style={{
    color:
      light
  ? '#2A2E34'
  : 'rgba(255,255,255,0.72)',

    textDecoration: 'none',

    fontWeight: 500,

    fontSize: '15px',

    letterSpacing: '-0.02em',
  }}
>
        Melvin Raj
      </Link>

      {/* CENTER */}

      <div
        style={{
  display: 'flex',

  gap: '42px',

  justifySelf: 'center',

  alignItems: 'center',
}}
      >

        <Link href="/archive" style={linkStyle(light)}>
          Archive
        </Link>

        {/* <Link href="/projects" style={linkStyle(light)}>
          Projects
        </Link> */}

        <Link href="/about" style={linkStyle(light)}>
          About
        </Link>

      </div>

      {/* RIGHT */}

     <div
  style={{
    display: 'flex',

    gap: '28px',

    justifySelf: 'end',

    alignItems: 'center',
  }}
>

        <a
          href="https://instagram.com/melvinraj003"
          target="_blank"
          style={linkStyle(light)}
        >
          Instagram
        </a>

        <a
          href="mailto:hey@melvinraj.com"
          style={linkStyle(light)}
        >
          Email
        </a>
        <a
          href="https://melvinraj.com"
          target="_blank"
          style={linkStyle(light)}
        >
          Substack
        </a>

      </div>
</div>
   </motion.nav>
  )
}

const linkStyle = (
  light: boolean,
) => ({

  color: light
    ? '#5F6772'
    : 'rgba(255,255,255,0.68)',

  textDecoration: 'none',

  fontSize: '14px',

  fontWeight: 400,

  letterSpacing: '-0.01em',

  transition:
    'opacity 0.3s ease, color 0.3s ease',
})
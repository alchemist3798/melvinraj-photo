'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Navbar({
  light = false,
}: {
  light?: boolean
}) {
  const [isMobile, setIsMobile] =
    useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 768,
      )
    }

    handleResize()

    window.addEventListener(
      'resize',
      handleResize,
    )

    return () =>
      window.removeEventListener(
        'resize',
        handleResize,
      )
  }, [])

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
        padding: isMobile
          ? '20px 0'
          : '28px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: isMobile
            ? '0 20px'
            : '0 32px',
          width: '100%',

          display: 'flex',
          justifyContent:
            'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}

        <Link
          href="/"
          style={{
            color: light
              ? '#2A2E34'
              : 'rgba(255,255,255,0.72)',

            textDecoration: 'none',
            fontWeight: 500,

            fontSize: isMobile
              ? '14px'
              : '15px',

            letterSpacing: '-0.02em',
          }}
        >
          Melvin Raj
        </Link>

        {/* Mobile */}

        {isMobile ? (
          <div
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            <Link
              href="/archive"
              style={linkStyle(light)}
            >
              Archive
            </Link>

            <Link
              href="/about"
              style={linkStyle(light)}
            >
              About
            </Link>
          </div>
        ) : (
          <>
            {/* Center */}

            <div
              style={{
                display: 'flex',
                gap: '42px',
                alignItems: 'center',
              }}
            >
              <Link
                href="/archive"
                style={linkStyle(light)}
              >
                Archive
              </Link>

              <Link
                href="/about"
                style={linkStyle(light)}
              >
                About
              </Link>
            </div>

            {/* Right */}

            <div
              style={{
                display: 'flex',
                gap: '28px',
                alignItems: 'center',
              }}
            >
              <a
                href="https://instagram.com/melvinraj003"
                target="_blank"
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
                style={linkStyle(light)}
              >
                Substack
              </a>
            </div>
          </>
        )}
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
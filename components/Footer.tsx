'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Footer() {

  return (

    <motion.footer
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.4,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}

      style={{
        background: 'transparent',
        padding: '40px 24px',
        borderTop: '1px solid #E5DED3',
      }}
    >

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
         gap: '12px',
        }}
      >

        {/* <p
          style={{
            fontSize: '14px',
            color: '#0F1720',
          }}
        >
          Melvin Raj
        </p> */}

        <div
          style={{
            display: 'flex',
            gap: '28px',
            letterSpacing: '0.12em',
            fontSize: '11px',
            color: '#5C6773',
          }}
        >

          <Link href="/archive">
            Archive
          </Link>

          <Link href="/about">
            About
          </Link>

          <a
            href="https://instagram.com"
            target="_blank"
          >
            Instagram
          </a>

        </div>

        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: '#8A94A3',
          }}
        >
          Hyderabad / India
        </p>
        

        
      </div>

      <div>
        <p
  style={{
    marginTop: '40px',
    textAlign: 'center',

    fontSize: '11px',
    letterSpacing: '0.08em',
    color: '#8A94A3',
  }}
>
  © 2026 Melvin Raj · Film Archive
</p>
      </div>

    </motion.footer>
  )
  
}
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { instrument }
from '@/app/fonts'

export default function Hero() {

  return (

    <section
  style={{
    position: 'relative',
    height: '100vh',
    maxHeight: '100vh',
    width: '100%',
    overflow: 'hidden',

    background: '#111111',
  }}
>

      {/* BACKGROUND IMAGE */}

<motion.div
  initial={{
    opacity: 0,
    scale: 1.04,
  }}

  animate={{
    opacity: 1,
    scale: 1,
  }}

  transition={{
    duration: 2.8,
    ease: 'easeOut',
  }}

  style={{
    position: 'absolute',
    inset: 0,
  }}
>

  <Image
    src="/hero.jpg"
    alt="Hero"

    fill

    priority

    style={{
      objectFit: 'cover',

      filter:
        'brightness(0.72) contrast(1.05)',
    }}
  />

</motion.div>

      {/* DARK OVERLAY */}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.42))',
        }}
      />


      {/* CONTENT */}

<motion.div
  initial={{
    opacity: 0,
    y: 18,
  }}

  animate={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    duration: 2.8,
    delay: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}

  style={{
    position: 'relative',
    zIndex: 10,

    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    textAlign: 'center',

    padding: '0 24px',
  }}
>

        {/* SMALL LABEL */}
           
        <p
          style={{
            color: 'rgba(210,206,198,0.62)',
            textTransform: 'uppercase',
            letterSpacing: '0.34em',
            fontSize: '11px',
            marginBottom: '36px',
          }}
        >
            Melvin&apos;s Film Photography Archive
        </p>

        {/* MAIN TITLE */}

        <h1
          style={{
  color:
    'rgba(228,224,216,0.92)',

  fontFamily:
    instrument.style.fontFamily,

  fontWeight: 400,

  fontSize:
    'clamp(3rem, 5vw, 5.1rem)',

  lineHeight: 0.94,

  letterSpacing: '-0.02em',

  maxWidth: '760px',

  marginBottom: '32px',

  textShadow:
    '0 8px 30px rgba(0,0,0,0.24)',
}}
        >
          Fragments of light,
silence,
and places
remembered.
        </h1>

        {/* PHILOSOPHY */}

        <p
          style={{
            color: 'rgba(222,218,210,0.82)',

            maxWidth: '620px',

            fontSize: '16px',

            lineHeight: 1.8,

            marginBottom: '56px',

            textShadow:
              '0 4px 20px rgba(0,0,0,0.25)',
          }}
        >
         I photograph everyday life in film.
A growing archive of ordinary places,
passing moments, and quiet observations.
        </p>

        {/* BUTTONS */}

<motion.div
  initial={{
    opacity: 0,
    y: 10,
  }}

  animate={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    duration: 1.2,
    delay: 1.2,
    ease: 'easeOut',
  }}

  style={{
    display: 'flex',
    gap: '18px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>

  <Link
    href="/archive"
    style={{
  padding: '16px 34px',

  border:
    '1px solid rgba(255,255,255,0.28)',

  color: 'rgba(236,232,224,0.92)',

  textDecoration: 'none',

  textTransform: 'uppercase',

  letterSpacing: '0.18em',

  fontSize: '12px',

  backdropFilter: 'blur(8px)',

  background:
    'rgba(255,255,255,0.04)',

  transition: '0.35s ease',

  WebkitBackdropFilter: 'blur(8px)',
}}
  >
    Explore Archive
  </Link>

  {/* <Link
    href="/projects"
    style={{
      padding: '16px 34px',

      border:
        '1px solid rgba(255,255,255,0.4)',

      color: 'rgba(236,232,224,0.92)',

      textDecoration: 'none',

      textTransform: 'uppercase',

      letterSpacing: '0.18em',

      fontSize: '12px',

      backdropFilter: 'blur(4px)',

      transition: '0.3s ease',
    }}
  >
    Explore Projects
  </Link> */}

</motion.div>

    </motion.div>

      {/* FOOTER PHILOSOPHY */}

      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',

          color: 'rgba(255,255,255,0.58)',

          fontSize: '11px',

          letterSpacing: '0.18em',

          textTransform: 'uppercase',

          zIndex: 10,
        }}
      >
        
      </div>

    </section>
  )
}
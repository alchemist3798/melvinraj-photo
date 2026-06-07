import Image from 'next/image'

export default function AboutPage() {

  return (

    <main
  style={{
    background: '#F5F1EB',
    padding: '180px 24px',
  }}
>

      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >

        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            fontSize: '12px',
            color: '#6E7A86',
            marginBottom: '40px',
          }}
        >
          About
        </p>

          <div
  style={{
    width: '220px',
    height: '220px',
    borderRadius: '999px',
    overflow: 'hidden',
    marginBottom: '24px',
  }}
>
  <Image
    src="/profile.jpeg"
    alt="Melvin Raj"
    width={320}
    height={320}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',

      transform: 'scale(1.2)',

      objectPosition: '90% 15%',
    }}
  />
</div>
        <h1
          style={{
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            lineHeight: 1,
            color: '#123448',
            marginBottom: '72px',
          }}
        >
         I photograph everyday life on film.
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            fontSize: '22px',
            lineHeight: 2,
            color: '#4B5B68',
          }}
        >

          <p>
            I&apos;m Melvin Raj. By profession, I work as an IT Analyst. Outside of work, I spend much of my time writing, walking, observing, and photographing everyday life on film.
          </p>

          <p>
           I&apos;m based in Hyderabad, India, and I carry a camera with me wherever I go. Most of the photographs in this archive begin without a plan. They emerge from ordinary encounters: a passing gesture, fading light on a wall, a railway window, an empty street, or a moment that feels quietly suspended in time.
          </p>

          <p>
         I was drawn to film photography because of its uncertainty. Unlike digital photography, film asks for patience. It slows observation and encourages trust. The photograph isn&apos;t immediate; it remains unseen for days or weeks, existing only as a memory until the roll is developed.
          </p>

          <p>
          That delay changed the way I look at the world. It taught me to pay closer attention to small details, imperfections, and fleeting atmospheres that might otherwise pass unnoticed.
          </p>

 <p>
          This archive is an ongoing body of work. A long-term observation of places, people, and moments that continue to linger long after they have passed. My aim is not to document events, but to preserve feelings: the quiet emotional residue that everyday life leaves behind.</p>
        
         <p>
          Alongside photography, I write stories, essays, and reflections about memory, observation, creativity, and the ordinary moments that shape our lives. Both practices come from the same place: a desire to notice, preserve, and share what might otherwise be forgotten.</p>
        <p>Thank you for spending time here. </p>

        </div>
        {/* <div
        style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    marginBottom: '80px',
  }}
>
    <Image
    src="/signature.png"
    alt="Signature"

    width={200}
    height={140}

    style={{
      objectFit: 'cover',
      opacity: 0.85,
      paddingTop: '36px',
    }}
  />
</div> */}
      </section>

    </main>
  )
}
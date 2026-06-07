export default function About() {

  return (

    <section
      id="about"
      style={{
        padding: '220px 24px',
        background: '#EFEAE2',
      }}
    >

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >

        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            fontSize: '12px',
            color: '#6E7A86',
            marginBottom: '32px',
          }}
        >
          About
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.8rem, 5vw, 5rem)',
            lineHeight: 1.15,
            color: '#123448',
            marginBottom: '48px',
            fontWeight: 500,
          }}
        >
          I use film photography to preserve ordinary moments and fleeting atmospheres.
        </h1>

        <p
          style={{
            fontSize: '22px',
            lineHeight: 2,
            color: '#4B5B68',
          }}
        >
          My work revolves around stillness,
          passing light, unnoticed gestures,
          and fragments of places that continue
          existing quietly within memory.

          <br />
          <br />

          Film photography slows observation.
          It allows imperfection,
          anticipation,
          and emotional residue.

          <br />
          <br />

          This archive is an attempt
          to preserve those fleeting atmospheres.
        </p>

      </div>

    </section>
  )
}
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function ProjectsPage() {

  const projects = [
    {
      title: 'Night Stations',
      year: '2026',
      description:
        'Studies of waiting, distance, and artificial light.',
      image:
        '/hero.jpg',
      slug:
        'night-stations',
    },

    {
      title: 'Monsoon Frames',
      year: '2025',
      description:
        'Rain-soaked fragments across Hyderabad and Vizag.',
      image:
        '/hero.jpg',
      slug:
        'monsoon-frames',
    },
  ]

  return (

    <main
      style={{
      background: '#F5F4F0',
        minHeight: '100vh',
        paddingTop: '160px',
      }}
    >

      <section
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 24px 160px',
        }}
      >

        <h1
          style={{
            fontSize:
              'clamp(4rem, 8vw, 7rem)',
            marginBottom: '120px',
          }}
        >
          Projects
        </h1>

        <div
          style={{
            display: 'grid',
gridTemplateColumns:
  'repeat(2, minmax(0, 1fr))',

gap: '64px',
alignItems: 'start',
          }}
        >

          {projects.map((project) => (

            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >

              <div>

               <div
  style={{
    overflow: 'hidden',
    marginBottom: '24px',
  }}
>

<Image
  src={project.image}
  alt={project.title}

  width={1400}
  height={900}

  style={{
    width: '100%',
    height: '340px',

    objectFit: 'cover',

    transform: 'scale(1.06)',

    transition: '0.4s ease',
  }}
/>

</div>

                <p
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#777',
                    marginBottom: '12px',
                  }}
                >
                  {project.year}
                </p>

                <h2
                  style={{
                    fontSize: '2rem',
lineHeight: 1,
letterSpacing: '-0.03em',
                    marginBottom: '16px',
                  }}
                >
                  {project.title}
                </h2>

                <p
                  style={{
                    maxWidth: '640px',
                    lineHeight: 1.6,
fontSize: '15px',
                    color: '#555',
                  }}
                >
                  {project.description}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

      <Footer />

    </main>
  )
}
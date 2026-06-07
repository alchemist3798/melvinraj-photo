const films = [

  {
    name: 'Kodak Vision3 250D',
    description: 'Soft cinematic daylight and quiet tones.',
  },

  {
    name: 'Portra 400',
    description: 'Warm portraits and preserved memory.',
  },

  {
    name: 'Cinestill 800T',
    description: 'Night light, reflections, and urban silence.',
  },

  {
    name: 'Kodak Gold 200',
    description: 'Everyday moments and passing time.',
  },

]

export default function FilmRolls() {

  return (

    <section className="py-32 px-6 md:px-20 bg-[#F7F5F2]">

      <div className="mb-20">

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-[#6E7A86]
            mb-4
          "
        >
          Explore
        </p>

        <h2 className="text-5xl md:text-7xl text-[#123448]">
          By Film Roll
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {films.map((film) => (

          <div
            key={film.name}
            className="
              border
              border-[#D7D2CB]
              p-10
              hover:bg-[#EAE7E1]
              transition-all
              duration-500
            "
          >

            <h3 className="text-3xl mb-4 text-[#123448]">
              {film.name}
            </h3>

            <p className="text-[#6E7A86] leading-relaxed">
              {film.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}
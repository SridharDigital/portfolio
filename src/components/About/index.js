import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black py-20 text-white"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
            About
          </p>
        </div>

        <p className="mt-20 text-xl">
          My name is Sreedharan Namboodiri, and I take great pleasure in
          developing visually appealing and user-friendly websites. My expertise
          lies in both frontend and backend development, with a specialization
          in the MERN stack. My journey into front-end development has ignited a
          strong passion within me, driving me to constantly enhance my skills
          and knowledge in order to excel as a software engineer.
        </p>

        <br />

        <p className="text-xl">
          I am eagerly seeking job opportunities that allow me to contribute my
          skills, while also providing me with the chance to learn and grow both
          personally and professionally.
        </p>
      </div>
    </div>
  )
}

export default About

import React from "react"
import HeroImage from "../../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"

const Header = () => {
  return (
    <div
      name="home"
      className="flex w-full items-center bg-gradient-to-b from-black via-black to-gray-800 py-20 pb-5"
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex h-full flex-col justify-center">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I'm a Frontend Developer
          </h2>
          <p className="max-w-md py-4 text-gray-500">
            I am a Front End developer with industry experience building
            websites and web applications. I specialize in JavaScript and have
            professional experience working with React. My core strength
            includes Python, SQL & Java
          </p>
          <div className="row flex items-center justify-center pb-5 md:justify-start">
            <div className="mr-3">
              <Link
                to="projects"
                smooth
                duration={500}
                className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white"
              >
                Projects
                <span className="duration-300 group-hover:rotate-90">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
            <div>
              <Link
                to="resume"
                smooth
                duration={500}
                className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white"
              >
                Resume
                <span className="duration-300 group-hover:rotate-90">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="mx-auto w-2/3 rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header

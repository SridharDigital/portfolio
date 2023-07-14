import React from "react"

import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import reactImage from "../../assets/react.png"
import nextjs from "../../assets/nextjs.png"
// import graphql from "../../assets/graphql.png"
// import github from "../../assets/github.png"
import tailwind from "../../assets/tailwind.png"
import python from "../../assets/python.png"
import redux from "../../assets/redux.png"
import bootstrap from "../../assets/bootstrap.png"
import sqlite from "../../assets/sqlite.png"
import node from "../../assets/node.png"
import express from "../../assets/express.png"
import sass from "../../assets/sass.png"
import mongoDB from "../../assets/mongoDB.png"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    // {
    //   id: 3,
    //   src: node,
    //   title: "Node.js",
    //   style: "shadow-yellow-500",
    // },
    // {
    //   id: 5,
    //   src: redux,
    //   title: "Redux",
    //   style: "shadow-yellow-400",
    // },
    {
      id: 5,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    // {
    //   id: 2,
    //   src: mongoDB,
    //   title: "MongoDB",
    //   style: "shadow-blue-500",
    // },

    {
      id: 6,
      src: sqlite,
      title: "SQLite",
      style: "shadow-cyan-400",
    },
    // {
    //   id: 1,
    //   src: nextjs,
    //   title: "Next.js",
    //   style: "shadow-orange-500",
    // },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 9,
      src: sass,
      title: "Sass",
      style: "shadow-pink-500",
    },
  ]

  return (
    <div
      name="skills"
      className="w-full bg-gradient-to-b from-gray-800 to-black py-20"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 text-white">
        <div>
          <p className="inline border-b-4 border-gray-500 p-2 text-4xl font-bold">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
            >
              <img src={src} alt="" className="mx-auto w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

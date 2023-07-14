import { Component } from "react"
import { v4 as uuidv4 } from "uuid"

import TabItem from "./TabItem"
import ProjectItem from "./ProjectItem"

import "./index.css"

const tabsList = [
  { tabId: "STATIC", displayText: "Static" },
  { tabId: "RESPONSIVE", displayText: "Responsive" },
  { tabId: "DYNAMIC", displayText: "Dynamic" },
]

const projectsList = [
  {
    projectId: uuidv4(),
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s3-img.png",
    title: "Music Page",
    demoUrl: "https://www.cricbuzz.com/",
    gitHubUrl: "https://www.linkedin.com/in/sridhardigital/",
  },
  {
    projectId: uuidv4(),
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    title: "Tourism Website",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
  },
  {
    projectId: uuidv4(),
    category: "STATIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-s1-img.png",
    title: "Advanced Technologies",
    description:
      "A website that gives you a basic understanding of Advanced Technologies.",
  },
  {
    projectId: uuidv4(),
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r4-img.png",
    title: "VR Website",
    description:
      "VR Website enables users to explore AR and VR Products and Industry happenings.",
  },
  {
    projectId: uuidv4(),
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    title: "Food Munch",
    description: "Food Much Website is a user-centric food tech website.",
  },
  {
    projectId: uuidv4(),
    category: "RESPONSIVE",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-r3-img.png",
    title: "Portfolio",
    description:
      "A portfolio is the best alternative for a resume to showcase your skills to the digital world.",
  },

  {
    projectId: uuidv4(),
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d3-img.png",
    title: "Speed Typing Test",
    description:
      "Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.",
  },
  {
    projectId: uuidv4(),
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d1-img.png",
    title: "Random Joke Page",
    description:
      "Random Joke Page is an API-based dynamic Web Application that generates a new joke.",
  },
  {
    projectId: uuidv4(),
    category: "DYNAMIC",
    imageURL: "https://assets.ccbp.in/frontend/react-js/projects-d2-img.png",
    title: "Sizing An Image",
    description:
      "This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.",
  },
]

class Projects extends Component {
  state = { currentTabId: tabsList[0].tabId }

  getFilteredProjects = () => {
    const { currentTabId } = this.state
    const filteredProjects = projectsList.filter(
      (eachProject) => eachProject.category === currentTabId
    )
    return filteredProjects
  }

  updateCurrentTabId = (tabId) => this.setState({ currentTabId: tabId })

  render() {
    const { currentTabId } = this.state
    const filteredProjects = this.getFilteredProjects()

    return (
      <div className="app-container flex w-full items-center justify-center bg-gradient-to-b from-black via-black to-gray-800 py-20 pb-1">
        <div className="max-w-screen-lg">
          <h1 className="mb-5 text-center text-4xl font-bold text-white">
            Projects
          </h1>
          <p className="description">Check out some of my work right here</p>

          <ul className="tabs-container">
            {tabsList.map((tabDetails) => (
              <TabItem
                key={tabDetails.tabId}
                tabDetails={tabDetails}
                updateCurrentTabId={this.updateCurrentTabId}
                isActive={currentTabId === tabDetails.tabId}
              />
            ))}
          </ul>

          <ul className="grid w-full grid-cols-1 gap-8 px-12 py-8 text-center sm:grid-cols-2 sm:px-10 md:grid-cols-3 lg:px-0 ">
            {filteredProjects.map((projectDetails) => (
              <ProjectItem
                key={projectDetails.projectId}
                projectDetails={projectDetails}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Projects

import "./index.css"

const ProjectItem = (props) => {
  const { projectDetails } = props
  const { projectId, imageURL, title, demoUrl, gitHubUrl } = projectDetails
  return (
    <>
      <li className="rounded-lg py-2 text-white shadow-md duration-500 hover:scale-105">
        {/* <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
        </div> */}
        <div key={projectId} className="rounded-lg shadow-md shadow-gray-600">
          <img
            src={imageURL}
            alt=""
            className="rounded-md duration-200 hover:scale-105"
          />
          <h2 className="project-title">{title}</h2>
          <div className="flex items-center justify-center">
            <button className="m-4 w-1/2 px-6 py-3 duration-200 hover:scale-105">
              <a href={demoUrl}>Demo</a>
            </button>
            <button className="m-4 w-1/2 px-6 py-3 duration-200 hover:scale-105">
              <a href={gitHubUrl}>Code</a>
            </button>
          </div>
        </div>
      </li>
    </>
  )
}

export default ProjectItem

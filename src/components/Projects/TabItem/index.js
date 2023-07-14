import "./index.css"

const TabItem = (props) => {
  const { tabDetails, updateCurrentTabId, isActive } = props
  const { tabId, displayText } = tabDetails

  const onClickTabId = () => {
    updateCurrentTabId(tabId)
  }

  const activeTabClassName = isActive ? "active-tab-btn" : ""

  return (
    <li className="tab-item-container text-center sm:mx-3">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

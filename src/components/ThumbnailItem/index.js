// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickedItem, isActive} = props
  const {
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = thumbnailDetails

  const activeBtn = isActive ? 'active-btn' : ''

  const onClickImage = () => {
    clickedItem(imageUrl, imageAltText)
  }
  return (
    <li className="li-container">
      <button
        type="button"
        className={`btn-style ${activeBtn}`}
        onClick={onClickImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem

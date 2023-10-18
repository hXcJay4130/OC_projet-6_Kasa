import ActiveStar from '../assets/star-active.png'
import InactiveStar from '../assets/star-inactive.png'

function RatingScale({ scaleValue, careType }) {
	const range = [1, 2, 3, 4, 5]
	const scaleType =
		careType === 'activeStar' ? (
			<img src={ActiveStar} alt='activeStar-icon' />
		) : (
			<img src={InactiveStar} alt='inactiveStar-icon' />
		)

	return (
		<ul className = "rating__list">
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<li key={rangeElem.toString()} className = "rating__item">{scaleType}</li>
				) : null
			)}
		</ul>
	)
}

export default RatingScale

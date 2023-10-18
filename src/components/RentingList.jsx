import { flatList } from '../datas/logements'
import FlatCard from './FlatCard'
import '../styles/rentingList.scss'

function RentingList() {
	return (
		<section className="rentinglist">
			<ul className="rentinglist__list">
				{flatList.map(({ id, cover, title }) => (
					<FlatCard
						id= {id}
						key={id}
						cover={cover}
						// name={name}
                        title={title}
					/>
				))}
			</ul>
		</section>
	)
}
export default RentingList
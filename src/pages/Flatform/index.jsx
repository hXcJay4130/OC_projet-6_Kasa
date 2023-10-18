import { useParams } from 'react-router-dom'
import { flatList } from '../../datas/logements'
import '../../styles/flatForm.scss'
import Error from '../Error/Error'
import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'
import RatingScale from '../../components/RatingScale'
import '../../styles/slideShow.scss'


function FlatForm() {
    const {flatNumber} = useParams()
    const filteredData = flatList.filter(flat => flat.id === flatNumber)
    const flatObject = filteredData.length === 0 ? "" : filteredData[0]
    
    if (filteredData.length === 0) {
        return (
            <Error />
        )
    } 

    let tagsArray = flatObject.tags
    let nameArray = flatObject.host.name
    nameArray = nameArray.split(' ')
    let equipmentArray = flatObject.equipments
    let equipmentString = equipmentArray.toString()
    let imagesPathArray = flatObject.pictures.toString().split(',')

    return (
        <main className="flatform">
            <Slideshow pixPath={imagesPathArray} />
            <section className="flatFormSection">
                <div>
                    <h1>{flatObject.title}</h1>
                    <p>{flatObject.location}</p>
                    <ul className="tagsList">
                        {tagsArray.map((tag) => (
                            <li key={tag} className="tag">{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='profil'>
                    <div className="profil__name-pix">
                        <div className='profil__name'>
                            <p>{nameArray[0]}</p>
                            <p>{nameArray[1]}</p>
                        </div>
                        <img src={flatObject.host.picture} alt="" className='profil__photo'/>
                    </div>
                    <div className="profil__rating">
                        <RatingScale careType='activeStar' scaleValue={flatObject.rating} />
                        <RatingScale careType='inactiveStar' scaleValue={5-(flatObject.rating)} />
                    </div>
                </div>
            </section>
            <section className="flatFormSection">
                <div className="flatFormSection__left">
                   <Collapse
                        title="Description"
                        content={flatObject.description}
                        collapseClass=""
                        collapseType="text"
                    />
                </div>
                <div className="flatFormSection__right">
                    <Collapse
                        title="Equipements"
                        content={equipmentString}
                        collapseClass=""
                        collapseType="list"
                    />
                </div>
            </section>
            
        </main>
    )
}

export default FlatForm
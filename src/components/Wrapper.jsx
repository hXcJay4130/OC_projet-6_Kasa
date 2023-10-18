import '../styles/wrapper.scss'

function Wrapper({pixURL, text}) {

    return (
        <section className='wrapper'>
            <img src={pixURL} alt='' className='wrapper__image'/>
            <p className="wrapper__text">{text}</p>
        </section>
    )
}

export default Wrapper
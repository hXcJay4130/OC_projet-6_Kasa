import Wrapper from '../../components/Wrapper'
import backgroundhome from '../../assets/background-home.png'
import RentingList from '../../components/RentingList'

function Home() {
    return (
      <main>
        <Wrapper
          pixURL={backgroundhome}
          text="Chez vous, partout et ailleurs"
        />
        <RentingList />
      </main>
    )
  }
  
  export default Home
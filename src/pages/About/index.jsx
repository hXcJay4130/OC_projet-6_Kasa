import Wrapper from '../../components/Wrapper'
import Collapse from '../../components/Collapse'
import { aboutSection } from '../../datas/about'
import backgroundabout from '../../assets/background-about.png'

function About() {
    return (
      <main>
        <Wrapper
          pixURL={backgroundabout}
          text=""
        />
       {aboutSection.map(({ title, content }) => (
					<Collapse
            title={title}
						content={content}
            collapseClass="about__"
            collapseType="text"
					/>
				))}  
      </main>
    )
  }
  
  export default About
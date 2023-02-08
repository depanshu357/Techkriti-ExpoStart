import './About.css'
import {motion} from 'framer-motion'

const About = () => {

    return (
        <>
            <div className="about w-full h-screen">

            <div className="  border border-1 bg-transparent aboutbox" 
                 
                >

                    <div className="abouthead align-center" >
                        <span style={{ "fontFamily": "Nasalization", "fontSize": "36.22px" }} className="text-white mx-auto" >About</span>


                    </div>
                    <div className="w-auto text-white aboutboxcontent  flex">
                        <p style={{"line-height":"44px"}}>
                        Entrepreneurship Cell, IIT Kanpur is an enthusiastic bunch of students who are working to induce an entrepreneurial mindset into the community and to air an innovative streak in them. In a world where entrepreneurship is growing as one of the biggest buzzwords, we are here to water the ideas in buds and help them bloom into impactful endeavors. E-Cell effectively networks student enterprises from campus to incubators, angel investors and venture capitalists to transform the newly proposed ideas into successful startups. We are working towards building an inspired Gen-Next who has the inbuilt urge to innovate, take risks, shoulder social responsibility and indulge in the creative execution of their vibrant ideas.

                        </p>

                    </div>

                </div>

            </div>

        </>
    )

}

export default About
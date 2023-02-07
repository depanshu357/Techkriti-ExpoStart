import './About.css'
import {motion} from 'framer-motion'

const About = () => {

    return (
        <>
            <div className="about w-full h-screen">

            <motion.div className=" absolute border border-1 bg-transparent" style={{ "width": "1113px", "height": "682px", "borderRadius": "42px", "marginTop": "183px", "marginLeft": "118px","backgroundColor":"rgba(38, 121, 133, 0.3)" }}
                  initial={{x:300, opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  viewport={{once:false, amount: 0.4}}
                  transition={{duration: 0.8}}
                >

                    <div className=" " style={{ "width": "344px", "height": "80px", "marginTop": "80px", "marginLeft": "87px" }}>
                        <span style={{ "fontFamily": "Nasalization", "fontSize": "36.22px" }} className="text-white mx-auto" >About</span>


                    </div>
                    <div className="w-auto text-white flex"style={{"marginTop":"5px ","padding":"10px","marginLeft":"80px","fontSize":"1.6vw","marginRight":"99px",}}>
                        <p style={{"line-height":"44px"}}>
                        Entrepreneurship Cell, IIT Kanpur is an enthusiastic bunch of students who are working to induce an entrepreneurial mindset into the community and to air an innovative streak in them. In a world where entrepreneurship is growing as one of the biggest buzzwords, we are here to water the ideas in buds and help them bloom into impactful endeavors. E-Cell effectively networks student enterprises from campus to incubators, angel investors and venture capitalists to transform the newly proposed ideas into successful startups. We are working towards building an inspired Gen-Next who has the inbuilt urge to innovate, take risks, shoulder social responsibility and indulge in the creative execution of their vibrant ideas.

                        </p>

                    </div>

                </motion.div>

            </div>

        </>
    )

}

export default About
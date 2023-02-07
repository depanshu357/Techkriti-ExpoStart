import './Home.css'
import {motion} from 'framer-motion'

const Home = () =>{

    return (
        
        <div className="home w-full h-screen" style={{"align-items":"center", "justify-content":"center"}}>
            <motion.div
            initial={{x:-400, opacity: 0}}
            whileInView={{x:0, opacity:1}}
            viewport={{once: false}}
            transition={{duration:1.0}}
            >
        <div className="grid bg-transparent items-center justify-center " style={{"width":"406px","height":"93px","marginTop":"20vh","marginLeft":"260px"}}>
            <span style={{"fontFamily":"Nasalization","fontSize":"36.22px"}} className="text-white mx-auto" > TECHKRITI'23</span>
            <span style={{"fontFamily":"Nasalization","fontSize":"20.22px","color":"#007296"}} className="text-white mx-auto" > presents</span>

        </div>
        <div className="grid bg-transparent items-center justify-center " style={{"width":"1406px","height":"319px","marginTop":"10px","marginLeft":"-230px"}}>
            <span style={{"fontFamily":"Nasalization","fontSize":"114.222px"}} className="text-white mx-auto" > STARTUP</span>
            <span style={{"fontFamily":"Nasalization","fontSize":"114.222px","color":"#007296"}} className="text-white flex items-center justify-center " > EXPO</span>

        </div>
        </motion.div>

        </div>
    )
}

export default Home
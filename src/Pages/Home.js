import './All.css'
import './Home.css'
import {motion} from 'framer-motion'

const Home = () =>{

    return (
        
        <div className="homeback home w-full h-screen">
            <motion.div
            initial={{x:-300, opacity: 0}}
            whileInView={{x:0, opacity:1}}
            viewport={{once: false}}
            transition={{duration:1.0}}
            >
        <div className="grid bg-transparent items-center justify-center homehead" >
            <span style={{"fontFamily":"Nasalization","fontSize":"36.22px"}} className="text-white mx-auto" > TECHKRITI'23</span>
            <span style={{"fontFamily":"Nasalization","fontSize":"20.22px","color":"#007296"}} className="text-white mx-auto" > presents</span>

        </div>
        <div className=" grid bg-transparent items-center justify-center homehead2 " >
            <span style={{"fontFamily":"Nasalization"}} className="text-white mx-auto" > STARTUP</span>
            <span style={{"fontFamily":"Nasalization","color":"#007296"}} className="text-white flex items-center justify-center " > EXPO</span>

        </div>
        </motion.div>

        </div>
    )
}

export default Home
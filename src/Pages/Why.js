import './Why.css'
import {motion} from 'framer-motion'



const data = [1,2,3,4,5,6]
const Why = () => {
    return (
        <div className="why w-full h-screen">

            <div style={{"marginTop":"40px","marginLeft":"5vw", "height":"100%"}} class="grid grid-cols-3 gap-0">

                {data.map((item)=>{
                    return(
                        <motion.div className="border" style={{ "width": "18vw", "height": "40vh","backgroundColor":"rgba(0, 57, 98, 0.3)","borderRadius":"24px" }} 
                        initial={{y:300, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        viewport={{once:false, amount:0.2}}
                        transition={{duration: 0.6}}
                        >
                        <div className=" grid " style={{"marginTop":"10px"}}>
                            <span style={{ "fontFamily": "Nasalization", "fontSize": "28.22px" }} className="text-white mx-auto" >Silver</span>
    
    
                        </div>
                        <div className="w-auto text-white flex" style={{"marginTop":"15px","marginLeft":"30px","marginRight":"30px"}}>
                    <p style={{"fontSize":"1.0vw"}}>
                    Entrepreneurship Cell, IIT Kanpur is an enthusiastic bunch of students who are working to induce an entrepreneurial mindset into the community and to air an innovative streak in them. In a world where 
                    </p>
    
                   </div>
                   </motion.div>

                    )
                })}
              
               
            </div>
        </div>
    )
}

export default Why

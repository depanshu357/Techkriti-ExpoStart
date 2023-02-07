import logo from './logo.png'
import {motion} from 'framer-motion'

const Header = () =>{
    return(
        <>
        <div className=" w-full bg-transparent h-20 fixed flex" style={{"top":"0"}}>
  <div class="absolute left-0 top-0 "  style={{"width":"71px","height":"80px"}}>
  <motion.img  alt='logo' src={logo} style={{"width":"71px","height":"92px","marginTop":"36px","marginLeft":"49px"}}  
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    whileHover={{
      scale:1.1,
      duration: 0.3,
    }}
  />
  </div>

  <div class="absolute  right-0 " style={{"marginRight":"200px","marginTop":"42px"}}>
    <button className="bg-white p-2 " style={{"borderRadius":"9px"}}><span>Register Now</span></button>
    </div>

  </div>
        
        
        </>
    )
}

export default Header
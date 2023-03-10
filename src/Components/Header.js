import logo from './logo.png'
import './Header.css'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <>
      <div className=" w-full bg-transparent h-20 fixed flex" style={{ "top": "0" }}>
        <div class="absolute left-0 top-0 logo"  >
          <motion.img alt='logo' src={logo} style={{ "width": "50px", "height": "70px", "marginTop": "30px", "marginLeft": "40px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.1,
              duration: 0.3,
            }}
          />
        </div>

        <div class="absolute  right-0 register " style={{zIndex:"890"}}>
          <button className="bg-white p-2 " style={{ "borderRadius": "9px","fontFamily": "Nasalization","cursor":"pointer" }}><span>Register Now</span></button>
        </div>

      </div>


    </>
  )
}

export default Header
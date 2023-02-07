import logo from './logo.png'
import './Header.css'
const Header = () =>{
    return(
        <>
        <div className=" w-full bg-transparent h-20 fixed flex" style={{"top":"0"}}>
  <div class="absolute left-0 top-0 logo "  >
  <img  alt='logo' src={logo} style={{"width":"71px","height":"92px","marginTop":"36px","marginLeft":"49px"}}  />
  </div>

  <div class="absolute  right-0 register " >
    <button className="bg-white p-2 " style={{"borderRadius":"9px"}}><span>Register Now</span></button>
    </div>

  </div>
        
        
        </>
    )
}

export default Header
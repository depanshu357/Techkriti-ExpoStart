import {Link} from 'react-scroll'


const Sidebar = () => {
    {/* <Link to="intro_n" spy={true} smooth={true} offset={-30} className="nav__link">
                            INTRODUCTION
                        </Link> */}
    return (

            <div className="top-0 grid h-screen place-items-center right-0 w-[25vw] bg-transparent   pl-20 text-white fixed h-full ">
                <div className="grid my-auto w-full  justify-items-end">

                <div className="mt-10 text-xl w-auto font-semibold text-white right-0   flex"><span className="pr-2 hover:cursor-pointer" style={{"color":"#007296","fontFamily":"Nasalization","fontSize":"24px"}}>
                   <Link to="home" spy={true} smooth={true} offset={0} >
                    Home
                    </Link>
                    </span> <div style={{"backgroundColor":"#007296"}}className="w-10 h-1 bg-white mt-3"></div> </div>

                <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex"><span className="pr-2 hover:cursor-pointer" style={{"fontFamily":"Nasalization","fontSize":"24px"}}>
                <Link to="about" spy={true} smooth={true} offset={0} >
                    About
                    </Link>
                    </span> <div className="w-6 h-1 bg-white mt-3"></div> </div>

                <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex"><span className="pr-2 hover:cursor-pointer" style={{"fontFamily":"Nasalization","fontSize":"24px"}}>
                <Link to="terms" spy={true} smooth={true} offset={0} >
                    Terms
                    </Link>
                    </span> <div className="w-6 h-1 bg-white mt-3"></div> </div>

                <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex"><span className="pr-2 hover:cursor-pointer" style={{"fontFamily":"Nasalization","fontSize":"24px"}}>
                <Link to="home" spy={true} smooth={true} offset={0} >
                    map
                </Link>
                    </span> <div className="w-6 h-1 bg-white mt-3"></div> </div>

                <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex"><span className="pr-2 hover:cursor-pointer" style={{"fontFamily":"Nasalization","fontSize":"24px"}} >
                <Link to="why" spy={true} smooth={true} offset={0} >
                     why
                 </Link>
                     </span> <div className="w-6 h-1 bg-white mt-3"></div></div>

                </div>
            </div>

        
    )
}

export default Sidebar
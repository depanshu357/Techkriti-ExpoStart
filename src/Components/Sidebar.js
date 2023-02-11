import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';



const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0)



    return (

        <>

            {isVisible ?
                <>
                    <div className="sidebar top-0 grid h-screen place-items-center right-0 w-[25vw] bg-transparent   pl-20 text-white fixed h-full ">
                        <div className="grid my-auto w-full  justify-items-end">

                            <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex">
                                <span className="pr-2 hover:cursor-pointer" style={{ "fontFamily": "Nasalization", "fontSize": "24px" }}>
                                    <Link activeClass='hlink' to="homeback" spy={true} smooth={true} offset={0} >
                                        Home
                                    </Link>
                                </span>
                                <div className="w-10 h-1 bg-white mt-3"></div>
                            </div>

                            <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex">
                                <span className="pr-2 hover:cursor-pointer" style={{ "fontFamily": "Nasalization", "fontSize": "24px" }}>
                                    <Link activeClass='alink' to="aboutback" spy={true} smooth={true} offset={0} >
                                        About
                                    </Link>
                                </span>
                                <div className="w-6 h-1 bg-white mt-3"></div>
                            </div>
                            <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex">
                                <span className="pr-2 hover:cursor-pointer" style={{ "fontFamily": "Nasalization", "fontSize": "24px" }}>
                                    <Link activeClass='alink' to="aboutback" spy={true} smooth={true} offset={0} >
                                        Contact
                                    </Link>
                                </span>
                                <div className="w-6 h-1 bg-white mt-3"></div>
                            </div>

                            <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex">
                                <span className="pr-2 hover:cursor-pointer" style={{ "fontFamily": "Nasalization", "fontSize": "24px" }}>
                                    <Link activeClass='tlink' to="termsback" spy={true} smooth={true} offset={0} >
                                        Terms
                                    </Link>
                                </span>
                                <div className="w-6 h-1 bg-white mt-3"></div>
                            </div>

                            <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex">
                                <span className="pr-2 hover:cursor-pointer" style={{ "fontFamily": "Nasalization", "fontSize": "24px" }}>
                                    <Link activeClass='mlink' to="homeback" spy={true} smooth={true} offset={0} >
                                        map
                                    </Link>
                                </span>
                                <div className="w-6 h-1 bg-white mt-3"></div>
                            </div>

                            <div className="mt-10 text-xl w-auto font-semibold text-white right-0 flex">
                                <span className="pr-2 hover:cursor-pointer" style={{ "fontFamily": "Nasalization", "fontSize": "24px" }} >
                                    <Link activeClass='wlink' to="whyback" spy={true} smooth={true} offset={0} >
                                        why
                                    </Link>
                                </span>
                                <div className="w-6 h-1 bg-white mt-3"></div>
                            </div>

                        </div>
                    </div>


                </>
                :
                <>
                </>
            }


        </>


    )
}

export default Sidebar
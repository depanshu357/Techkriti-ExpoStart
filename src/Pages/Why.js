

const data = [1,2,3,4,5,6]
const Why = () => {
    return (
        <div className="w-full grid h-auto">

            <div  class="grid sm:grid-cols-2 md:grid-cols-3  why">

                {data.map((item)=>{
                    return(
                        <div className="border whybox "  >
                        <div className=" grid " style={{"marginTop":"10px"}}>
                            <span style={{ "fontFamily": "Nasalization", "fontSize": "28.22px" }} className="text-white mx-auto" >Silver</span>
    
    
                        </div>
                        <div className="w-auto text-white flex whyboxcontent" >
                    <p style={{"fontSize":"18px"}}>
                    Entrepreneurship Cell, IIT Kanpur is an enthusiastic bunch of students who are working to induce an entrepreneurial mindset into the community and to air an innovative streak in them. In a world where 
                    </p>
    
                </div>
                </div>

                    )
                })}
              
               
            </div>
        </div>
    )
}

export default Why



const data = [1,2,3,4,5,6]
const Why = () => {
    return (
        <div className="w-full h-screen">

            <div style={{"marginTop":"119px","marginLeft":"130px"}} class="grid grid-cols-3 gap-20">

                {data.map((item)=>{
                    return(
                        <div className="border" style={{ "width": "300px", "height": "400px","backgroundColor":"rgba(0, 57, 98, 0.3)","borderRadius":"24px" }} >
                        <div className=" grid " style={{"marginTop":"10px"}}>
                            <span style={{ "fontFamily": "Nasalization", "fontSize": "28.22px" }} className="text-white mx-auto" >Silver</span>
    
    
                        </div>
                        <div className="w-auto text-white flex" style={{"marginTop":"15px","marginLeft":"30px","marginRight":"30px"}}>
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

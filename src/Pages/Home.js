import './All.css'

const Home = () =>{

    return (
        
        <div className="w-full  h-screen  ">
        <div className=" grid bg-transparent items-center justify-center homehead" >
            <span style={{"fontFamily":"Nasalization","fontSize":"36.22px"}} className="text-white mx-auto" > TECHKRITI'23</span>
            <span style={{"fontFamily":"Nasalization","fontSize":"20.22px","color":"#007296"}} className="text-white mx-auto" > presents</span>

        </div>
        <div className=" grid bg-transparent items-center justify-center homehead2 " >
            <span style={{"fontFamily":"Nasalization"}} className="text-white mx-auto" > STARTUP</span>
            <span style={{"fontFamily":"Nasalization","color":"#007296"}} className="text-white flex items-center justify-center " > EXPO</span>

        </div>

        </div>
    )
}

export default Home
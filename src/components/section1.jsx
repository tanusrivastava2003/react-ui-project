import Navbar from "./Navbar"
import MainContiner from "./mainContiner"

const section1 = (props) => {
  return (
    <div className='h-screen w-full'>
       <Navbar />
       <MainContiner users={props.users}/>     
    </div>
  )
}

export default section1

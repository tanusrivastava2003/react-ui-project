import Leftcontainer from "./Leftcontainer"
import Rightcontainer from "./Rightcontainer"


const mainContiner = (props) => {
  return (
    <div className=" h-[90vh] w-full flex items-center px-10  py-4 ">
      <Leftcontainer />
      <Rightcontainer users={props.users}/>
    </div>
  )
}

export default mainContiner

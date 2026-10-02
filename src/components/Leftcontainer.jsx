import Content from "./content"
import Arrow from "./arrow"

const Leftcontainer = () => {
  return (
    <div className=' h-full w-1/3 flex flex-col justify-between px-5 pt-10'>
        <Content />
        <Arrow />   
      
    </div>
  )
}

export default Leftcontainer


import Card from "./card"

const Rightcontainer = (props) => {
  return (
    <div id="right" className=' h-full w-2/3 overflow-x-auto p-4 flex flex-nowrap gap-10 rounded-4xl'>
        {props.users.map(function(elem,idx){

          return <Card key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
        })}  

    </div>
  )
}

export default Rightcontainer

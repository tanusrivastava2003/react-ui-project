import Cardcontent from "./Cardcontent"

const card = (props) => {
  return (
    <div className='bg-yellow-200 shrink-0 h-full w-60 rounded-3xl overflow-hidden relative'>
        <img className='h-full w-full object-cover '  src={props.img} alt="" />
        <Cardcontent id={props.id} tag={props.tag} color={props.color} intro={props.intro}/>
    </div>
  )
}

export default card

import  Section1 from './components/section1'


const App = () => {
  const users =[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      intro: "Building a better future through dedication, hard work, and determination.",
      color: "blue",
      tag:"Satisfied"
    },
    {
      img:" https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Embracing challenges, learning continuously, and growing beyond limits.",
      color: "yellow",
      tag:"UnderServed"
    },
    {
      img:"https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      intro: "Transforming creative ideas into reality through passion and perseverance.",
      color: "brown",
      tag:"UnderBanked"
    },
    {
      img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Turning challenges into opportunities and striving for excellence every day.",
      color: "pink",
      tag:"Empowered"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661729968988-ca585d9da659?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Leading with purpose, inspiring others, and creating meaningful impact.",
      color: "lightseagreen",
      tag: "Independent"
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App

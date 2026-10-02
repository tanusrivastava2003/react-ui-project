import { RiArrowRightLine } from "@remixicon/react";

const Cardcontent = (props) => {
  return (
    <div className="absolute h-full w-full top-0 bottom-0 p-5 flex flex-col justify-between">
      <h2 className="bg-white text-black rounded-full h-10 w-10 flex items-center justify-center font-bold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-black text-lg leading-normal font-bold  mb-10 drop-shadow-lg">
          {props.intro}
        </p>
        <div className="flex justify-between ">
          <button style={{backgroundColor:props.color}} className=" rounded-full text-white px-8 py-2 font-medium">
            {props.tag}
          </button>
          <button style={{backgroundColor:props.color}} className=" rounded-full text-white px-3 py-2 font-medium">
            <RiArrowRightLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardcontent;

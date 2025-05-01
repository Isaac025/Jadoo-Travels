import React from "react";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";

const Card = ({ img, mx, content, exp }) => {
  return (
    <div>
      <div className="text-center w-[250px] h-[250px] hover:shadow-2xl hover:rounded-4xl px-3">
        <img src={img} alt={img} className={`${mx}`} />
        <h2 className="font-[600] my-[15px] text-2xl text-[#08355c]">
          {content}
        </h2>
        <p className="my-2.5  text-gray-500 font-[600] text-lg">{exp}</p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div id="serv" className="container  mt-[80px]">
      <h5 className="text-center text-gray-700 font-[700] tracking-widest text-lg">
        CATEGORY
      </h5>
      <h1 className="text-center text-[#08355c] text-[30px] md:text-[50px] font-[800]">
        We Offer Best Services
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-10 mt-[50px] ">
        <Card
          img={Icon1}
          mx={"mx-auto"}
          content={"Calculated Weather"}
          exp={"Built Wicket longer admire do barton vanity itself do in it."}
        />
        <Card
          img={Icon2}
          mx={"mx-auto"}
          content={"Best Flights"}
          exp={"Engrossed listening. Park gate sell they west hard for the."}
        />
        <Card
          img={Icon3}
          mx={"mx-auto"}
          content={"Local Events"}
          exp={
            "Barton vanity itself do in it. Preferd to men it engrossed listening."
          }
        />

        <Card
          img={Icon4}
          mx={"mx-auto"}
          content={"Customization"}
          exp={"We deliver outsourced aviation services for military customers"}
        />
      </div>
    </div>
  );
};

export default Service;


"use client"

import React, { useState } from "react";
import './hoverCard.css'

const HoverCard = ({topic} : any) => {
  const [pointerX, setPointerX] = useState("50%");
  const [pointerY, setPointerY] = useState("50%");

  const cardUpdate = (e : any) => {
    e.preventDefault();
    const pos = [
      e.clientX || e.touches[0].clientX,
      e.clientY || e.touches[0].clientY,
    ];
    const dimensions = e.currentTarget.getBoundingClientRect();
    const l = pos[0] - dimensions.left;
    const t = pos[1] - dimensions.top;
    const h = dimensions.height;
    const w = dimensions.width;
    const px = `${Math.abs((100 / w) * l)}%`;
    const py = `${Math.abs((100 / h) * t)}%`;
    setPointerX(px);
    setPointerY(py);
  };

  return (
    <main id="app">
      <section
        className="card w-full h-[250px]"
        onMouseMove={cardUpdate}
        onTouchMove={cardUpdate}
      >
        <div className="inside flex-col-reverse">
          <img src={topic.img} width={200} alt="" />
          <h2 className="text-[18px]">{topic.title}</h2>
        </div>
      </section>
    </main>
  );
};

export default HoverCard;

import React from "react";

export const Image = (props: { src: string; alt?: string;componentClass?:string }) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} className={props.componentClass} />
    </div>
  );
};
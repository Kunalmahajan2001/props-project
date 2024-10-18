import React from "react";

const Image = ({src,height,width,title} ) => {
    return(
     <div>

     <img src={src} height={height} width={width}  style={{borderRadius : '50%'}}></img> 
     <h1>{title}</h1>
  


     </div>
    )
}
 


export default Image
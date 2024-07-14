import React, { useState } from 'react'

const ItemCount = () => {
    const[count,setCount]=useState(1)
const stock = 5;
    const incrementar=()=>{
            setCount(count+1);
    }

    const decrementar=()=>{
        setCount(count-1);
}

    console.log(count);
  return (
    <div>
      <button b={2}    onClick={decrementar}>-</button>
      {count}
      <button   onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount

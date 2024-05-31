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
      <button colorScheme='blue' onClick={decrementar}>-</button>
      {count}
      <button colorScheme='blue' onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount

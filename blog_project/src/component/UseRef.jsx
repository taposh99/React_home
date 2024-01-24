


import React, { useRef } from 'react';

const UseRefComponent = () => {
    let myRef = useRef();

    const change = () => {
        myRef.current.innerHTML = "hello";
    }

    return (
        <div>
            <h1 ref={myRef}></h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRefComponent;

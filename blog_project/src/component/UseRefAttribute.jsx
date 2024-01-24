

import React, { useRef } from 'react';

const UseRefAttribute = () => {
    let myRef = useRef();

    const change = () => {
        myRef.current.src = "https://placehold.co/600x400";
    }

    return (
        <div>
            <img ref={myRef} src='https://placehold.co/400' alt='Placeholder Image' />
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRefAttribute;

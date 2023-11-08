import React, { useRef, useState } from 'react';

const useBoolean = () =>  {
    const [value, setValue] = useState();
    const config = useRef({
        toggle: (value) => !value,
        on: () => setValue(true),
        off: () => setValue(false)
    })

    return [value, config.current]
}
const UseBoolean = () => {
    return (
        <div>
            
        </div>
    );
}

export default UseBoolean;

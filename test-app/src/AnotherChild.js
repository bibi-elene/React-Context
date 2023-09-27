import React, { useContext } from 'react';
import MyContext from './MyContext';

export default function AnotherChild() {
    const count = useContext(MyContext);
    return(
        <div>
            {count} + from AnotherChild + {count}
        </div>
    )
}
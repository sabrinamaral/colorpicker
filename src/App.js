import './App.css';
import { useState } from 'react';

const colorOptions = [{name: 'Verdi Gris', hex:'#05A8AA'}, {name: 'Turquoise Green', hex: '#B8D5B8'}, {name: 'Desert Sand', hex:'#D7B49E'}, { name: 'Violet Blue Crayola', hex: '#6369D1'}, {name: 'Golden Gate Bridge', hex:'#BC412B'}];

export default function App() {
    
    const [ color, setColor ] = useState(colorOptions[4]);
    return (
    
        <div className='app' style={{backgroundColor: color.hex}}>
            <p> Selected Color: {color.hex}</p>

            {   colorOptions.map(function(item) {

                return <button onClick={()=>{
                    setColor(item)
                }} key={item.hex}>{item.name}</button>
            })
            }    

        </div>
    )}

    



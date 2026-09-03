import { useState, useEffect } from 'react';

export default function ContadorAuto() {
    const [contador, setContador] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setContador(c => c + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return <h1>{contador}</h1>;
}

import React, {useEffect, useState} from "react";

function IntervalHookCounter() {
    const [ count, setCount] = useState(0)
    const [someProp, setSomeProp] = useState('prop')

    useEffect(() => {
        function doSomething() {
            console.log(someProp)
        }
        doSomething()
        let interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count, someProp])

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

   

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
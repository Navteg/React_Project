import React, {useState, useEffect} from 'react'

function Ustate() {
    const [count, setCount] = useState(0);
    const[txt, setText] = useState('');

    // type-1
    // It'll work like componentDidMount + componentDidUpdate
    // as we didn't give any dependensies
    // useEffect(() => {
    //     console.log("useEffect");
    //     document.title = `current count ${count} times`;
    // })

    // type-2
    // It'll work like componentDidMoun only
    // as we give a dependensies
    // useEffect(() => {
    //     console.log("useEffect");
    //     document.title = `current count ${count} times`;
    // }, [])

    // Here it will not go into infinite renders
    // as value is same
    // useEffect(() => {
    //     console.log("useEffect");
    //     setCount(100);
    //     document.title = `current count ${count} times`;
    // }, [])


    // Here we have given dependensies as Count
    // It mean that when ever count value then
    // only run useEffect or we can say it is like
    // shouldComponentUpdate
    useEffect(() => {
        console.log("useEffect");
        document.title = `current count ${count} times`;
    }, [count])

    console.log("render")
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick = {() => setCount(count + 1)}>+1</button>
            <input type = "text" value = {txt} onChange = {(e) => setText(e.target.value)}/>
        </div>
    )
}

export default Ustate

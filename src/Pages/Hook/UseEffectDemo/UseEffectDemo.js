import React, { useState, useEffect } from 'react'

export default function UseEffectDemo(props) {

    const [number, setNumber] = useState(1);

    // Hook này thay thế cho lifecycleComponentDidMount
    useEffect(() => {
        // Chạy 1 lần duy nhất ở lần render đầu tiên
        // CallAPI
        // Sử dụng carousel, thư viện khác, ...
        console.log('componentDidMount');
        return () => {
            // Hàm này sẽ thực thi trước khi component mất khỏi giao diện
            console.log('componentWillUnmount');
        }
    }, []);

    useEffect(() => {
        // Gọi sau mỗi lần render kể cả lần đầu tiên
        console.log('Thay thế 2 lifecycle componentDidMount và componentDidUpdate');
        // Hạn chế setState
    })

    useEffect(() => {
        console.log('componentDidUpdate bởi 1 state nào đó');
    }, [number]);

    return (
        <div>
            useEffect
            <h1>{number}</h1>
            <button className='btn btn-success' onClick={() => {
                setNumber(number + 1);
            }}>+</button>
        </div>
    )
}

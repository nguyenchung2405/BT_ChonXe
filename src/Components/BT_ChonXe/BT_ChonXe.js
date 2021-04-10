import React, { useState } from 'react'

export default function BT_ChonXe(props) {

    const [car, setCar] = useState({ srcImg: './car/products/black-car.jpg' });

    return (
        <>
            <div className="container">
                <h1 className="display-4 text-center">Bài tập chọn xe</h1>
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={car.srcImg} />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button style={{ backgroundColor: 'black', cursor: 'pointer', color: 'white' }} onClick={() => {
                                    setCar({ srcImg: './car/products/black-car.jpg' })
                                }}>black car</button>
                            </div>
                            <div className="col-3">
                                <button style={{ backgroundColor: 'red', cursor: 'pointer' }} onClick={() => { setCar({ srcImg: './car/products/red-car.jpg' }) }}>red car</button>
                            </div>
                            <div className="col-3">
                                <button style={{ backgroundColor: 'silver', cursor: 'pointer' }} onClick={() => { setCar({ srcImg: './car/products/silver-car.jpg' }) }}>silver car</button>
                            </div>
                            <div className="col-3">
                                <button style={{ backgroundColor: 'gray', cursor: 'pointer' }} onClick={() => { setCar({ srcImg: './car/products/steel-car.jpg' }) }}>gray car</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

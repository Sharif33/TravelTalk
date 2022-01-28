import React, { useEffect, useState } from 'react';

const ManageCompare = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://travel-talk.herokuapp.com/userCompare`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // DELETE order
    const handleDeleteOrders = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://travel-talk.herokuapp.com/MyCompared/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Canceled successfully');
                        // console.log(data);
                        const remainingOrders = orders.filter(order => order._id !== id);
                        // console.log(remainingOrders);
                        setOrders(remainingOrders);
                    }
                })
        }
    };
    return (
        <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
        {
            orders?.map(order => <div key={order._id}>
                <div className="col">
                    <div className="card h-100 mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-sm-12 col-md-4">
                                <img src={order?.blogs?.image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <div className="card-body">
                                    <p className="card-text">By : <span>{order?.blogs?.name}</span></p>
                                    <p>{order?.email}</p>
                                    <p>Date: {order?.blogs?.date}, {order?.blogs?.time}</p>
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <button onClick={() => handleDeleteOrders(order?._id)} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    </div>
    );
};

export default ManageCompare;
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageBlogs = (props) => {
    const { image } = props;
    const { _id,id, name, email, isApproved } = props.image;
    const { allImages, setAllImages } = props;

    const handleApproval = (id) => {
        fetch(`https://travel-talk.herokuapp.com/blogs`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(image)
        })
        .then(res => res.json())
        .then(data => {
            image.isApproved = data.isApproved;
            const updated = allImages.map(single => {
                if (single._id === id) {
                    single.isApproved = image.isApproved;
                    return single;
                }
                else {
                    return single;
                }
            })
            setAllImages(updated);
        })
        .catch(error => { 
            // if(error) {
            //     window.location.reload();
            // }
         });
    };

    // DELETE products
    const handleDelete = (id) => {
        if(!window.confirm('Are you sure to cancel?')) {
            return;
        }
        fetch(`https://api-picshore.herokuapp.com/images/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplplication/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount === 1) {
                const remaining = allImages.filter(single => single._id !== id);
                setAllImages(remaining);
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }
    return (
        <>
                <TableBody>
                    {
                        <TableRow
                            
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {name}
                            </TableCell>
                            <TableCell >{id}</TableCell>
                            <TableCell >{email}</TableCell>
                            <TableCell >{
                    !isApproved &&
                    <button style={{background: 'none', border: 'none'}} onClick={() => handleApproval(_id)}><span className="text-danger">Pending</span></button>
                }
                {
                    isApproved &&
                    <button style={{background: 'none', border: 'none'}}><span className="text-success" onClick={() => handleApproval(_id)}>Approved</span></button>
                }</TableCell>
                            <TableCell ><button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button></TableCell>
                        </TableRow>
                    }
                </TableBody>
                </>
    );
};

export default ManageBlogs;
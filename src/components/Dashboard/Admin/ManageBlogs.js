import { TableBody, TableCell,  TableRow } from '@mui/material';
import React from 'react';

const ManageBlogs = (props) => {
    const { blog } = props;
    const { _id,id, name, email, isApproved } = props.blog;
    const { allBlogs, setAllBlogs } = props;

    const handleApproval = (id) => {
        fetch(`https://travel-talk.herokuapp.com/blogs`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(data => {
            blog.isApproved = data.isApproved;
            const updated = allBlogs.map(single => {
                if (single._id === id) {
                    single.isApproved = blog.isApproved;
                    return single;
                }
                else {
                    return single;
                }
            })
            setAllBlogs(updated);
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
        fetch(`https://travel-talk.herokuapp.com/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplplication/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount === 1) {
                const remaining = allBlogs.filter(single => single._id !== id);
                setAllBlogs(remaining);
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
                            <TableCell >
                {
                    !isApproved &&
                    <button style={{background: 'none', border: 'none'}} onClick={() => handleApproval(_id)}><span className="text-danger">Pending</span></button>
                }
                {
                    isApproved &&
                    <button style={{background: 'none', border: 'none'}}><span className="text-success" onClick={() => handleApproval(_id)}>Approved</span></button>
                }</TableCell>
                            <TableCell ><button onClick={() => handleDelete(_id)} className="btn btn-danger">X</button></TableCell>
                        </TableRow>
                    }
                </TableBody>
                </>
    );
};

export default ManageBlogs;
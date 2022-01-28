import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageBlogs from './ManageBlogs';

const ManageAllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    useEffect(() => {
        fetch('https://travel-talk.herokuapp.com/allBlogs')
        .then(res => res.json())
        .then(data => setAllBlogs(data))
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }, []);
    return (
        <div>
        <div className='container'>
            <h4 className="text-center m-4">Blogs Management</h4><hr />
        </div>
        {
            allBlogs[0]?._id &&
            <div>
            <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Manage blogs table">
            <TableHead>
                    <TableRow>
                        <TableCell style={{color:"blue",fontSize:"1.2em", fontWeight:"bold"}}>Name</TableCell>
                        <TableCell style={{color:"blue",fontSize:"1.2em", fontWeight:"bold"}}>Id</TableCell>
                        <TableCell style={{color:"blue",fontSize:"1.2em", fontWeight:"bold"}}>email</TableCell>
                        <TableCell style={{color:"blue",fontSize:"1.2em", fontWeight:"bold"}}>Status</TableCell>
                        <TableCell style={{color:"blue",fontSize:"1.2em", fontWeight:"bold"}}>Action</TableCell>
                    </TableRow>
                </TableHead>
            {
                allBlogs.map(blog => {
                    return <ManageBlogs key={blog._id} blog={blog} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />
                })
            }
                        </Table>
        </TableContainer>
        </div>
        }
    </div>
    );
};

export default ManageAllBlogs;
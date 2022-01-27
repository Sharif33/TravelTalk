import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageBlogs from './ManageBlogs';

const ManageAllBlogs = () => {
    const [allImages, setAllImages] = useState([]);
    useEffect(() => {
        fetch('https://travel-talk.herokuapp.com/allBlogs')
        .then(res => res.json())
        .then(data => setAllImages(data))
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }, []);
    return (
        <div>
        <div className='container'>
            <h4 className="text-center m-4">Manage All Images</h4><hr />
        </div>
        {
            allImages[0]?._id &&
            <div>
            <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Manage blogs table">
            <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell >email</TableCell>
                        <TableCell >Status</TableCell>
                        <TableCell >Action</TableCell>
                    </TableRow>
                </TableHead>
            {
                allImages.map(image => {
                    return <ManageBlogs key={image._id} image={image} allImages={allImages} setAllImages={setAllImages} />
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
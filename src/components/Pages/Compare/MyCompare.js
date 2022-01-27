import { Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';

const MyCompare = () => {
    let deleteCount = 0;
    const { user } = useAuth();
    const [compares, setCompares] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`https://travel-talk.herokuapp.com/MyCompared/${email}`)
            .then((res) => res.json())
            .then((data) => setCompares(data));
    }, [email, deleteCount]);
    // console.log(orders);

    //Delete Part
    const [myCompres, setMyCompares] = useState([]);
    useEffect(() => {
        fetch(`https://travel-talk.herokuapp.com/userCompare`)
            .then(res => res.json())
            .then(data => {
                setMyCompares(data);
            })
    }, []);

   
    //DELETE AN Products
    const handleDeleteCompares = id => {
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
                        const remainingCompares = compares.filter(compare => compare._id !== id);
                        console.log(remainingCompares);
                        // console.log(myOrders);
                        setCompares(remainingCompares);
                    }
                })
        }
    }
    return (
        <div>
            <div className="container py-4">
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Manage Products table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red"}}>Image</TableCell>
                        <TableCell style={{color:"red"}}>Name</TableCell>
                        <TableCell style={{color:"red"}}>Author</TableCell>
                        <TableCell style={{color:"red"}}>Location</TableCell>
                        <TableCell style={{color:"red"}}>Category</TableCell>
                        <TableCell style={{color:"red"}}>Rating</TableCell>
                        <TableCell style={{color:"red"}}>Reviews</TableCell>
                        <TableCell style={{color:"red"}}>Expense</TableCell>
                        <TableCell style={{color:"red"}}>Transportation</TableCell>
                        <TableCell style={{color:"red"}}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {compares.map((compare) => (
                        <TableRow
                            key={compare._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell style={{textAlign:"center"}}>
                                <img className='img-fluid' src={compare.blogs.image} alt="" />
                               
                            </TableCell>
                            <TableCell >{compare.blogs.name}</TableCell>
                            <TableCell >{compare.blogs.author}</TableCell>
                            <TableCell >{compare.blogs.location}</TableCell>
                            <TableCell >{compare.blogs.category}</TableCell>
                            <TableCell >
                            <Box sx={{
                                '& > legend': { mt: 2 },
                            }}>
                                <Typography><Rating name="half-rating-read" precision={0.5} size="small" value={Number(compare.blogs?.star)} readOnly /></Typography>

                            </Box>
                            </TableCell>
                            <TableCell >{compare.blogs?.rating}</TableCell>
                            <TableCell >{compare.blogs.cost} &#x9F3;</TableCell>
                            <TableCell >{compare.blogs?.transport}</TableCell>
                            <TableCell ><button onClick={() => handleDeleteCompares(compare._id)} className="btn btn-danger">X</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
        </div>
    );
};

export default MyCompare;
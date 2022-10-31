import * as React from 'react';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useState, useEffect } from 'react';
import Item from "./Item";

function Cart(props) {
    const [totalQuantity, setTotalQuantity] = useState();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        let totalQuantitySum = 0;
        props.data.map(product => totalQuantitySum += (product.min ?? 0));
        setTotalQuantity(totalQuantitySum);

        let totalPriceSum = 0;
        props.data.map(product => totalPriceSum += product.price * (product.min ?? 0));
        setTotalPrice(totalPriceSum);
    }, [props.data]);

    return (
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{background: 'darkSeaGreen'}}>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((product) =>
                        <Item
                            name={product.name}
                            price={product.price}
                            min={product.min}
                            totalQuantity={totalQuantity}
                            setTotalQuantity={setTotalQuantity}
                            totalPrice={totalPrice}
                            setTotalPrice={setTotalPrice} />
                    )}
                    <TableRow sx={{background: 'darkSeaGreen' }}>
                        <TableCell component="th" scope="row" colSpan={2}>
                            Totals
                        </TableCell>
                        <TableCell align="right">{totalQuantity}</TableCell>
                        <TableCell align="right">{totalPrice}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
    );
}

export default Cart;

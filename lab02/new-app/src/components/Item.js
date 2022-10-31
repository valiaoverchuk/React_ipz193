import {TableRow, TableCell} from "@mui/material";
import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";

function Item(props) {
    const {name, price, min = 0, totalQuantity, setTotalQuantity, totalPrice, setTotalPrice} = props;
    const [quantity, setQuantity] = useState(min);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        setTotalQuantity(totalQuantity + 1)
        setTotalPrice(totalPrice + price)
    };

    const handleDecrement = () => {
        if (quantity > min) {
            setQuantity(quantity - 1);
            setTotalQuantity(totalQuantity - 1)
            setTotalPrice(totalPrice - price)
        }
    };

    return (
        <TableRow>
            <TableCell component="th" scope="row">{name}</TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right">
                <IconButton
                    sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 0,
                        border: "1px solid",
                        borderColor: "primary.main"
                    }}
                    variant="outlined" onClick={handleIncrement}
                >
                    +
                </IconButton>
                {quantity}
                <IconButton
                    sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 0,
                        border: "1px solid",
                        borderColor: "primary.main"
                    }}
                    variant="outlined" onClick={handleDecrement}
                >
                    -
                </IconButton>
            </TableCell>
            <TableCell align="right">{quantity * price}</TableCell>
        </TableRow>
    );
}

export default Item;
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell} from "@mui/material";
// import { useStoreContext } from "../../context/StoreContext";
import { useAppSelector } from "../../store/configureStore";
import { currencyFormat } from "../../util/util";

export default function BasketSummary(){
    const {basket} = useAppSelector(state => state.basket);
    const subtotal = basket?.items.reduce((sum,item)=>sum + (item.quantity * item.price), 0) ?? 0;
    const deliveryFee = subtotal > 10000 ? 0 : 500; 


return (
    <>
    <TableContainer component={Paper} variant={'outlined'}>
        <Table>
            <TableBody>
               <TableRow>
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2}>Delivery fee*</TableCell>
                    <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="right">{currencyFormat(subtotal + deliveryFee)}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell colSpan={2}>
                    <span style={{fontStyle:'italic'}}>*Oreder over $100 qualify for free delivery</span>
                </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    </>
 )
}
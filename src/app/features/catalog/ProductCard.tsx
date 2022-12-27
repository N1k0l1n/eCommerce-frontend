import {  Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { Link } from "react-router-dom";
import { Product } from "../../models/product";


interface Props {
    product:Product;
}

export default function ProductCard({product}:Props){
    return(
        <Card>
          <CardHeader avatar={
                <Avatar sx={{bgcolor:"secondary.main"}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
          }

          title={product.name}
          titleTypographyProps={{
              sx : {fontWeight:"bold", color:'primary.main'}
          }}

          />
          <CardMedia
          sx = {{height:140, backgroundSize:"contain", bgcolor:"primary.light"}}
          image= 'http://picsum.photos/200'
          title={product.name}
           />


            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                     ${(product.price/100).toFixed(2)}
                 </Typography>
              <Typography variant="body2" color="text.secondary">
                    {product.brand}/{product.type}
                </Typography>
            </CardContent>
          <CardActions>
              <Button size="small">Add to cart</Button>
              <Link 
              to={`/catalog/${product.id}`}
              >
              <Button size="small" >View</Button>
              </Link>
        </CardActions>
      </Card>
    )
}
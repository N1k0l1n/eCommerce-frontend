import { useEffect } from "react";
import LoadingComponent from "../../layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";




export default function Catalog() {
      

  const products = useAppSelector(productSelectors.selectAll);
  const {productsLoaded, status} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();


  useEffect(()=>{
   if(!productsLoaded) dispatch(fetchProductsAsync());
  },[productsLoaded, dispatch])

  if(status.includes('pending')) return <LoadingComponent message="Loading products..."/> 
  
    return (
        <>
              <ProductList products={products}/>          
        </>
    )
}
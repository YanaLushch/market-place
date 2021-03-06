import React, { useState, useEffect } from 'react';
import Products from './Components/Products/Products';
import NavBar from './Components/NavBar/NavBar';
import { commerce } from './lib/commerce';


const App = () => {
    const [products, setProducts ] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div>
            <NavBar/>
            <Products products={products}/>
        </div>
    )
}


export default App;
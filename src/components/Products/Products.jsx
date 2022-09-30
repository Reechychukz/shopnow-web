import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/Q/2685_1610988379.jpg' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://media.stockinthechannel.com/pic/095rTteIuUaY-7A0iE2zIA.c-r.jpg' }
]
const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products;

import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "$10",
    image:
      "https://i.citrus.ua/imgcache/size_800/uploads/shop/2/e/2e743d01bd7fe298572e88d119e536e4.jpg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

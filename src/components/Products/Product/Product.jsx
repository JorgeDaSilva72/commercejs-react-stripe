import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import classes from "./classes";

const Product = ({ product }) => {
  return (
    <Card sx={classes.root}>
      <CardMedia
        sx={classes.media} //  must specify height otherwise the image will not be visible.
        image={product.image}
      />
      <CardContent>
        <div sx={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>

          <Typography
            gutterBottom
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
          <Typography variant="h5" component="h2">
            {product.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing sx={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

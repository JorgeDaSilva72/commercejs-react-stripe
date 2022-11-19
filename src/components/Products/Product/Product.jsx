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

const Product = ({ product }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 0, paddingTop: "56.25%" }} //  must specify height otherwise the image will not be visible.
        image={product.image}
      />
      <CardContent>
        <div>
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
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const HouseCard = ({ house }) => {
  const [name, setName] = useState(house.name);
  const [price, setPrice] = useState(house.price);
  const [area, setArea] = useState(house.area);
  const [composition, setComposition] = useState(house.composition);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">Price: ${price}</Typography>
          <Typography variant="body2">Area: {area}</Typography>
          <Typography variant="body2">Composition: {composition}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          more info
        </Button>
      </CardActions>
    </Card>
  );
};


export default HouseCard;


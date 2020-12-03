import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import '../../style/productlisting.css'


const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


function ProductList({category, subCat, products, addItemToCart}) {
  // const currentUserId = useSelector(state => state.auth.id);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    
    if(e.target){
      console.log(e.target)
      setExpanded(!expanded);
    }
  };
  

  return (
    <>
      {products.map((product, i) => ( (product.category === category) &&
      <Card key={i} value={product.id} className="product-card">
        <CardHeader
          title={product.title}
          subheader={`$${product.price}`}
        />
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.title}
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            Date Posted: {product.createdAt.split("T")[0]}
          </Typography>
        </CardContent>
        <CardActions disableSpacing >
          <IconButton
            onClick={(e) => addItemToCart(e, product)}
            aria-label="Add to cart?"
            value={product.id}
            id="add-to-cart"
            >
            <AddIcon 
              id="icon"
              value={product.id}
            />
          </IconButton>
          <IconButton
            id={product.id}
            onClick={(e) => handleExpandClick(e, product.id)}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse 
          in={expanded}
          timeout="auto" unmountOnExit>
          <CardContent>
          <Typography paragraph>{product.description}</Typography>
          </CardContent>
        </Collapse>   
      </Card>))}
    </>
  );
}

export default ProductList;
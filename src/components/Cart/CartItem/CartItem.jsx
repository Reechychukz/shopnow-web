import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import UseStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = UseStyles();
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, --item.quantity)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, ++item.quantity)}>+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary'>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
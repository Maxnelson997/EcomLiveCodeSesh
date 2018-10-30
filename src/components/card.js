import React, { Component } from 'react';

class Card extends Component {
    render() { 
        const sticker = this.props;
        return (
            <div className='sticker'>
                <div className='sticker__image-container'>
                    <img src={sticker.imageUrl}/>
                </div>
                <div>Category: {sticker.category}</div>
            </div>
        )
    }
}

export default Card;
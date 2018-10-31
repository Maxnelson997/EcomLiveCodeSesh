import React, { Component } from 'react';

class Card extends Component {
    render() { 
        const sticker = this.props;
        return (
            <div className='sticker'>
                <div className='sticker__front'>
                    <div className='sticker__front__image-container'>
                        <img src={sticker.imageUrl}/>
                    </div>
                    <div>Category: {sticker.category}</div>
                </div>
                <div className='sticker__back'>
                    <div className='sticker__back__title'>
                        {sticker.title}
                    </div>
                    <div className='sticker__back__description'>
                        {sticker.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
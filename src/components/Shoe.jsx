import React, { Component } from 'react'

export default class Shoe extends Component {
    render() {
        let {name, image, price} = this.props.shoe
        let {handleAddToCart} = this.props
        return (
            <div className='col-3'>
                <div className="card m-2">
                    <img className="card-img-top " src={image} style={{width:'100%'}} alt="image" />
                    <div className="card-body">
                        <h4 className="card-title">{name.length > 14 ? name.substr(0,14) : name.length}</h4>
                        <p className="card-text">{price}</p>
                        <div className='text-center'><button onClick={() => handleAddToCart(this.props.shoe)} className='btn btn-dark'>Add to Card</button></div>
                    </div>
                </div>
            </div>

            )
    }
}

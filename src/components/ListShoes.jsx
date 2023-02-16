import React, { Component } from 'react'
import Shoe from './Shoe';

export default class ListShoes extends Component {

    renderShoes = () => {
        let {dataShoe, handleAddToCart} = this.props;
        return dataShoe.map((shoe, index) => {
            return <Shoe handleAddToCart={handleAddToCart} shoe={shoe} key={index} /> 
        })
    }

  render() {
    return (
      <div className='row'>
        {this.renderShoes()}
      </div>
    )
  }
}

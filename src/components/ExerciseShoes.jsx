import React, { Component } from 'react'
import dataShoe from '../data/dataShoe.json'
import ListShoes from './ListShoes';
import Modal from './Modal';
export default class ExerciseShoes extends Component {
    state = {
        dataShoe: dataShoe,
        cart: [],
    };

    handleAddToCart = (shoe) => {
        this.setState({
            cart: [...this.state.cart, shoe]
        })
    };

    handleRemove = (id) => {
        let newCart =  this.state.cart.filter(item => item.id !== id)
        this.setState({
            cart: [...newCart]
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: '#23272b' }}>
                <div className='container'>
                    <h2 className='text-white py-4'>SHOP SHOE TIÊN MÈO</h2>
                    <Modal handleRemove={this.handleRemove} cart={this.state.cart} />
                    <ListShoes  handleAddToCart={this.handleAddToCart} dataShoe={dataShoe} />
                </div>
            </div>
        )
    }
}

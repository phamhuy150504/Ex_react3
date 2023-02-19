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
        let newCart = [...this.state.cart];
        let index = newCart.findIndex(item => item.id === shoe.id  )
        if(index === -1) { 
            newCart.push({...shoe, soLuong: 1})
        } else { 
            newCart[index].soLuong += 1
        } 
        this.setState({
            cart: newCart,
        })
        
    };

    handleChangeQuantity = (id, check) => {
        let cloneCart = [...this.state.cart]
        let index = cloneCart.findIndex(item => item.id === id)
        if(check) {
            cloneCart[index].soLuong += 1
        } else {
            cloneCart[index].soLuong > 1 ? cloneCart[index].soLuong -= 1 : cloneCart[index].soLuong = 1;  
        }
        this.setState({
            cart: cloneCart
        })
    }

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
                    {this.state.cart.length >= 1 && <Modal handleChangeQuantity={this.handleChangeQuantity} handleRemove={this.handleRemove} cart={this.state.cart} />}
                    <ListShoes  handleAddToCart={this.handleAddToCart} dataShoe={dataShoe} />
                </div>
            </div>
        )
    }
}

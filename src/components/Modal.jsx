import React, { Component } from 'react'

export default class Modal extends Component {

    renderCart = () => {
        return this.props.cart.map((item, index) => {
            let {id, name, price, image} = item
            
            return (
            <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td><img src={image} style={{width: 75, height: 100}} alt="image_moadal" /></td>
                <td><button onClick={() => this.props.handleRemove(id)} className="btn btn-danger">Remove</button></td>
            </tr>
            )
        })
    };

  render() {
    return (
        <div className='container'>
          <table className='table text-white'>
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>IMG</th>
                      <th>Remove</th>
                  </tr>
              </thead>
              <tbody>
                  {this.renderCart()}
              </tbody>
          </table>
        </div>
      )
  }
}

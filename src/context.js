import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'


const ProductContext = React.createContext()
// Provider
// Consumer

class ProductProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products: [],
            detailProduct: detailProduct
        }
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    }
    
    handleDetail = () => {
        console.log('Hello from detail')
    }

    addToCart = (id) => {
        console.log(`Hello from addToCart. id is ${id}`)
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
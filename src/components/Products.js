import React,{useState, useEffect} from 'react'
import stars from '../images/stars.png'
import {useDispatch} from 'react-redux'
import {IN_NUM} from '../action/Action.js'

function Products() {

    const [products, setProducts] = useState([])
    const productsArr = []
    const [stopInfinite, setStopInfinite] = useState(false)

    if(!stopInfinite) {
        fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
        .then(res => res.json())
        .then(data => {
                for(const prod in data) {
                    productsArr.push({
                        img: data[prod].productImage,
                        name: data[prod].productName,
                        oldPrice: data[prod].oldPrice,
                        newPrice: data[prod].newPrice
                    })
                }
                setProducts(productsArr)
                console.log(productsArr)
            }
        )
        setStopInfinite(true)
    }
      
    const dispatch = useDispatch()
  return (
    <div className='products-container'>
        {
            products && (
                products.map(item => {
                    return (
                        <div className='card-container'>
                            <div className='card'>
                                <img src={item.img} className='product-image' />
                                <div className='card-body'>
                                    <p className='produt-name'>
                                        {item.name}
                                    </p>
                                    <div className='card-body-price'>
                                        <img src={stars} className='stars-image' />

                                        <div className='prices'>
                                            <span className='old-price'>
                                                {item.oldPrice}/-
                                            </span>
                                            
                                            <span className='new-price'>
                                                {item.newPrice}/-
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => dispatch(IN_NUM())}><h3>ADD TO CART</h3></button>
                            </div>
                        </div>
                    )
                })
            )
        }
    </div>
  )
}

export default Products
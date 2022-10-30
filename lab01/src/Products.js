import {Product} from "./Product";
import React from "react";
import {v4 as uuid} from 'uuid';

const products = [
    {
        id: uuid(),
        imageUrl: 'https://content1.rozetka.com.ua/goods/images/big_tile/21331601.jpg',
        altText: 'termo',
        title: "Product 1",
        price: 100
    },
    {
        id: uuid(),
        imageUrl: 'https://content1.rozetka.com.ua/goods/images/big_tile/21331601.jpg',
        altText: 'termo',
        title: "Product 2",
        price: 200
    },
    {
        id: uuid(),
        imageUrl: 'https://content1.rozetka.com.ua/goods/images/big_tile/21331601.jpg',
        altText: 'termo',
        title: "Product 3",
        price: 300
    },
    {
        id: uuid(),
        imageUrl: 'https://content1.rozetka.com.ua/goods/images/big_tile/21331601.jpg',
        altText: 'termo',
        title: "Product 4",
        price: 400
    },
    {
        id: uuid(),
        imageUrl: 'https://content1.rozetka.com.ua/goods/images/big_tile/21331601.jpg',
        altText: 'termo',
        title: "Product 5",
        price: 500
    },
]

export function Products() {
    return (
        <>
            <h1>Products:</h1>
            {products.map(product => <Product key={product.id} id={product.id} title={product.title} imageUrl={product.imageUrl}
                                              altText={product.altText}
                                              price={product.price}/>)}
        </>
    );
}

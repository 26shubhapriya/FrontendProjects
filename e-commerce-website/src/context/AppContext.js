import React, { createContext, useState } from 'react';

const MyContext = createContext();

const AppContext = (props) => {
    const productList = [
        {
            id: "album1",
            title: "Colors",
            price: 100,
            imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
            id: "album2",
            title: "Black and white Colors",
            price: 50,
            imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
            id: "album3",
            title: "Yellow and Black Colors",
            price: 70,
            imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
            id: "album4",
            title: "Blue Color",
            price: 100,
            imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
    ];

    const [cart, setCart] = useState([]);

    const addItem = (id) => {
        const addedProduct = productList.find((product) => product.id === id);
        const addedProductIndex = cart.find((product) => product.id === id);
        if (addedProductIndex) {
            alert("The item is already in the cart!!")
        }
        if (addedProduct && !addedProductIndex) {
            setCart((prevCart) => [...prevCart, addedProduct])
        }
    }
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    }

    return (
        <MyContext.Provider value={{ productList, cart, addItem, removeItem }}>{props.children}</MyContext.Provider>
    )
}

export { AppContext, MyContext }
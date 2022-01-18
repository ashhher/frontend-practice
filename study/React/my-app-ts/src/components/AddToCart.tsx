import React, { useContext } from "react";
import { appSetContext } from "../AppState";
import { RobotProps } from './Robot'

// HOC
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
    return (props) => {
        const setGlobalState = useContext(appSetContext); // 【2】使用useContext声明context
        const addToCart = (id, name) => {
            if (setGlobalState) { // 【3】使用context
                setGlobalState(state => {
                    return {
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, { id, name }]
                        },
                    };
                });
            }
        }
        return <ChildComponent {...props} addToCart={addToCart} />
    }
}

// Hook
export const useAddToCart = () => {
    const setGlobalState = useContext(appSetContext); // 【2】使用useContext声明context
    const addToCart = (id, name) => {
        if (setGlobalState) { // 【3】使用context
            setGlobalState(state => {
                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, { id, name }]
                    },
                };
            });
        }
    }
    return addToCart;
}
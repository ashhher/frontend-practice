import React from "react";
import styles from "./ShoppingCard.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {

}

interface State {
    isOpen: boolean
}

class ShoppingCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.target);
        console.log(e.currentTarget);
        if((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({ isOpen: !this.state.isOpen });
        }
    }

    render(): React.ReactNode {
        return (
            <div className={styles.cartContainer}>
                <button
                    className={styles.button}
                    onClick={(e) => this.handleClick(e)}
                >
                    <FiShoppingCart />
                    <span>购物车 2 (件)</span>
                </button>
                <div className={styles.cartDropDown}
                    style={{
                        display: this.state.isOpen ? "block" : "none"
                    }}>
                    <ul>
                        <li>Robot 1</li>
                        <li>Robot 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCard;
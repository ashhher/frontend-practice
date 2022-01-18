import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetContext } from '../AppState'; // 【1】引用context
import { withAddToCart } from './AddToCart'; // Using HOC

export interface RobotProps {
    id: number;
    name: string;
    email: string;
    addToCart: (id, name) => void; // Using HOC
}

const Robot: React.FC<RobotProps> = ({ id, name, email, addToCart }) => { // Using HOC
    const globalState = useContext(appContext);

    return (
        <div className={styles.cardContainer}>
            <li>
                <h2>full price</h2>
                <img src={`https://robohash.org/${id}`} alt="avatar" />
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{globalState.username}</p>
                <button onClick={() => addToCart(id, name)}>加入购物车</button>
            </li>
        </div>
    );
};

export default withAddToCart(Robot); // Using HOC
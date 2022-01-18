import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetContext } from '../AppState'; // 【1】引用context
import { useAddToCart } from './AddToCart'; // Using Hook

export interface RobotProps {
    id: number;
    name: string;
    email: string;
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
    const globalState = useContext(appContext);
    const addToCart = useAddToCart(); // Using Hook

    return (
        <div className={styles.cardContainer}>
            <li>
                <h2>50% off</h2>
                <img src={`https://robohash.org/${id}`} alt="avatar" />
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{globalState.username}</p>
                <button onClick={() => addToCart(id, name)}>加入购物车</button>
            </li>
        </div>
    );
};

export default RobotDiscount;
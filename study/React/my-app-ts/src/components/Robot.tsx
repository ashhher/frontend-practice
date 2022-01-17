import React from "react";
import styles from "./Robot.module.css"

interface RobotProps {
    id: number,
    name: string,
    email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    return (
        <div className={styles.cardContainer}>
            <li>
                <img src={`https://robohash.org/${id}`} alt="avatar" />
                <h2>{name}</h2>
                <p>{email}</p>
            </li>
        </div>
    );
};

export default Robot;
import { Typography } from "antd";
import React from "react";
import styles from "./ProductCollection.module.css";

interface PropsType {
    id: string | number;
    size: "large" | "small";
    title: string;
    imageSrc: string;
    price: string | number;
}

export const ProductImage: React.FC<PropsType> = ({ id, size, title, imageSrc, price }) => {
    return (
        <>
            {size === "large" ? (
                <img src={imageSrc} alt="product image" className={styles["large-image"]} />
            ) : (
                <img src={imageSrc} alt="product image" className={styles["small-image"]} />
            )}
            <div>
                <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
                <Typography.Text type="danger" strong>￥ {price} 起</Typography.Text>
            </div>
        </>
    )
}
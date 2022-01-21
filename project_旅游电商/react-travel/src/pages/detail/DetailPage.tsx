import React from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";

type DetailPageParams = {
    tourId: string
}

export const DetailPage: React.FC = () => {
    const params = useParams<DetailPageParams>()
    console.log(params);
    
    return <h1>旅游路径详情:路径ID{params.tourId}</h1>

}
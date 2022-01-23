import React from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import { useTranslation } from "react-i18next";

type DetailPageParams = {
    tourId: string
}

export const DetailPage: React.FC = () => {
    const params = useParams<DetailPageParams>();
    const { t } = useTranslation();
    console.log(params);

    return <h1>旅游路径详情:路径ID{params.tourId}</h1>

}
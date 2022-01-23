import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom";
import store from "../../redux/store";
import { useTranslation } from "react-i18next";


export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const storeState = store.getState();
    const { t } = useTranslation();

    const [language, setLanguage] = useState<string>(storeState.language);
    const [languageList, setLanguageList] = useState<any>(storeState.languageList);

    store.subscribe(() => {
        const storeState = store.getState();
        setLanguage(storeState.language);
        setLanguageList(storeState.languageList);
    });

    const toPage = (url: string) => {
        if (location.pathname === (url + '/'))
            window.location.reload();
        else
            navigate(`${url}/`);
    };

    const menuClickHandler = (e) => {
        if (e.key === 'new') {
            const code = languageList.length;
            const action = {
                type: "add_language",
                payload: { code: "nl-" + code, name: "New Language " + code },
            };
            store.dispatch(action);
        } else {
            const action = {
                type: "change_language",
                payload: e.key,
            };
            store.dispatch(action);
        }
    };

    return (
        <div className={styles['app-header']}>
            {/* top-header */}
            <div className={styles['top-header']}>
                <div className={styles.inner}>
                    <Typography.Text>{t("header.slogan")}</Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        overlay={
                            <Menu onClick={menuClickHandler}>
                                {languageList.map(l => {
                                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                                })}
                                <Menu.Item key={"new"}>{t("header.add_new_language")}</Menu.Item>
                            </Menu>
                        }
                        icon={<GlobalOutlined />}>
                        {languageList.map(lang => {
                            if (lang.code === language)
                                return lang.name;
                        })}
                    </Dropdown.Button>
                    <Button.Group className={styles['button-group']}>
                        <Button onClick={() => toPage('register')}>{t("header.register")}</Button>
                        <Button onClick={() => toPage('signIn')}>{t("header.signin")}</Button>
                    </Button.Group>
                </div>

            </div>

            {/* main-header */}
            <Layout.Header className={styles['main-header']}>
                <span onClick={() => toPage('')}>
                    <img src={logo} alt="logo" className={styles['App-logo']} />
                    <Typography.Title level={3} className={styles.title}>{t("header.title")}</Typography.Title>
                </span>

                <Input.Search
                    placeholder={t("header.input")}
                    className={styles['search-input']} />
            </Layout.Header>

            {/* menu-header */}
            <Menu mode='horizontal' className={styles['main-menu']}>
                <Menu.Item key={1}>{t("header.home_page")}</Menu.Item>
                <Menu.Item key={1}>{t("header.weekend")}</Menu.Item>
                <Menu.Item key={2}>{t("header.group")}</Menu.Item>
                <Menu.Item key={3}>{t("header.backpack")}</Menu.Item>
                <Menu.Item key={4}>{t("header.private")}</Menu.Item>
                <Menu.Item key={5}>{t("header.cruise")}</Menu.Item>
                <Menu.Item key={6}>{t("header.hotel")}</Menu.Item>
                <Menu.Item key={7}>{t("header.local")}</Menu.Item>
                <Menu.Item key={8}>{t("header.theme")}</Menu.Item>
                <Menu.Item key={9}>{t("header.custom")}</Menu.Item>
                <Menu.Item key={10}>{t("header.study")}</Menu.Item>
                <Menu.Item key={11}>{t("header.visa")}</Menu.Item>
                <Menu.Item key={12}>{t("header.enterprise")}</Menu.Item>
                <Menu.Item key={13}>{t("header.high_end")}</Menu.Item>
                <Menu.Item key={14}>{t("header.outdoor")}</Menu.Item>
                <Menu.Item key={15}>{t("header.insurance")}</Menu.Item>
            </Menu>
        </div>
    )

}
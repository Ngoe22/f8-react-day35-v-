import React from "react";
import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";
import listIcon from "../../assets/list-solid.svg";
import arrow from "../../assets/arrow-left-long-solid.svg";

function Navigation() {
    const [show, setShow] = React.useState(false);

    const navList = [
        ["/", "Home"],
        ["/counter", "Counter"],
        ["/comments", "Comments"],
        ["/products", "Products"],
        ["/buttons", "Buttons"],
        ["/profile", "Profile"],
        ["/weather", "Weather"],
        ["/todo", "Todo"],
    ].map((value, index) => {
        return (
            <li key={index}>
                <NavLink
                    to={value[0]}
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.navLink} ${styles.active}`
                            : `${styles.navLink}`
                    }
                >
                    {value[1]}
                </NavLink>
            </li>
        );
    });

    console.log(show);

    return (
        <>
            <div
                className={`${styles.navBack} ${show ? styles.hidden : ``}`}
                onClick={() => {
                    setShow(!show);
                }}
            >
                <img src={listIcon} alt="" />
            </div>

            <nav className={`${styles.navList} ${show ? styles.show : ``}`}>
                <ul>
                    <li
                        className={styles.navBackIn}
                        onClick={() => {
                            setShow(!show);
                        }}
                    >
                        <img src={arrow} alt="" />
                    </li>
                    {navList}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;

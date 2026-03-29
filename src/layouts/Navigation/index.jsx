import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

function Navigation() {
    const navList = [
        ["/", "Home"],
        ["/buttons", "Buttons"],
        ["/comments", "Comments"],
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

    return (
        <nav className={styles.navList}>
            <ul>{navList}</ul>
        </nav>
    );
}

export default Navigation;

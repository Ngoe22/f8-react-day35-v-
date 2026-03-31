/* eslint-disable no-unused-vars */
import Navigation from "../../layouts/Navigation";
import styles from "./Home.module.scss";

function Home() {
    return (
        <>
            <Navigation></Navigation>
            <div className={styles.homeWrapper}>
                <h1  className={styles.heading}>Chào mừng đến với F8 React Day 35</h1>
            </div>
        </>
    );
}

export default Home;

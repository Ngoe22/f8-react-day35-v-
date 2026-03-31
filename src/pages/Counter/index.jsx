import React from "react";
import styles from "./Counter.module.scss";
import Navigation from "../../layouts/Navigation";

const Counter = () => {
    const [num, setNum] = React.useState(0);

    const color = num > 0 ? styles.green : num < 0 ? styles.red : styles.gray;

    return (
        <>
            <Navigation></Navigation>
            <div className={styles.counterWrapper}>
                <div className={styles.counter}>
                    <div className={`${styles.counterNum} ${color}`}>{num}</div>

                    <div className={styles.counterButtons}>
                        <button onClick={() => setNum(num + 1)}>
                            increase
                        </button>
                        <button onClick={() => setNum(num - 1)}>
                            decrease
                        </button>
                        <button onClick={() => setNum(0)}>reset</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Counter;

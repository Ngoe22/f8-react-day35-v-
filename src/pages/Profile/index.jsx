import React from "react";
import styles from "./Profile.module.scss";
import Navigation from "../../layouts/Navigation";

function Profile(props) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch(props.api)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);

                if (!Array.isArray(res) && Object.keys(res).length)
                    setData([...[res]]);
                else if (res.length > 0) setData([...res]);
                else setData(`fail`);
            })
            .catch((error) => {
                console.log(error);
                setData(`fail`);
            });
    }, []);

    const infoList = [
        `name`,
        `username`,
        `email`,
        `phone`,
        `website`,
        `address`,
    ];

    return (
        <>
            <Navigation></Navigation>

            <div className={styles.profileWrapper}>
                <div className={styles.profile}>
                    <ul className={styles.profileUsers}>
                        {data === `fail` ? (
                            <li className={styles.profileUserFailed}>
                                there is no data
                            </li>
                        ) : data === null ? (
                            <li className={styles.profileUserLoading}>
                                loading...
                            </li>
                        ) : (
                            data.map((user, index) => {
                                return (
                                    <li
                                        className={styles.profileUser}
                                        key={index}
                                    >
                                        <img src="https://i.pinimg.com/1200x/ee/82/13/ee821383a9a101941a4406565d2cdaf8.jpg"></img>

                                        <div className={styles.profileUserBody}>
                                            {infoList.map(
                                                (infoName, infoIndex) => {
                                                    return (
                                                        <div
                                                            className={
                                                                styles.profileUserInfo
                                                            }
                                                            key={infoIndex}
                                                        >
                                                            <span
                                                                className={
                                                                    styles.profileTitle
                                                                }
                                                            >
                                                                {`${infoName} : `}
                                                            </span>
                                                            {infoName ===
                                                            `address`
                                                                ? `${user.address.suite} - ${user.address.street} - ${user.address.city}`
                                                                : `${user[infoName]}`}
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </li>
                                );
                            })
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Profile;

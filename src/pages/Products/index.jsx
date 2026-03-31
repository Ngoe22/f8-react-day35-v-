import React from "react";
import styles from "./Products.module.scss";
import Navigation from "../../layouts/Navigation";

function Production(props) {
    const [data, setData] = React.useState(null);
    const [modal, setModal] = React.useState(null); // index of data

    React.useEffect(() => {
        fetch(props.api)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                setData(res);
            })
            .catch((error) => {
                console.log(`data:fail`, error);
                setData(`fail`);
            });
    }, []);

    return (
        <>
            <Navigation></Navigation>
            <div className={styles.productWrapper}>
                <div className={styles.product}>
                    <ul className={styles.productList}>
                        {data === `fail`
                            ? `loading fail`
                            : data === null
                              ? `Loading...`
                              : data.length === 0
                                ? "There is no production"
                                : data.map((item, itemIndex) => {
                                      let body = item.body.split(``);
                                      let bodyText = ``;
                                      if (body.length > 100) {
                                          bodyText =
                                              body.slice(0, 99).join(``) +
                                              `...`;
                                      } else {
                                          bodyText = item.body;
                                      }

                                      return (
                                          <li
                                              className={styles.productItem}
                                              key={itemIndex}
                                          >
                                              <div className={styles.productId}>
                                                  {item.id}
                                              </div>
                                              <div
                                                  className={
                                                      styles.productTitle
                                                  }
                                                  title={item.title}
                                              >
                                                  {item.title}
                                              </div>
                                              <div
                                                  className={
                                                      styles.productPreview
                                                  }
                                              >
                                                  {bodyText}
                                              </div>
                                              <button
                                                  className={
                                                      styles.productLearnMore
                                                  }
                                                  onClick={() => setModal(item)}
                                              >
                                                  Learn more
                                              </button>
                                          </li>
                                      );
                                  })}
                    </ul>
                    {!modal || !data ? (
                        ``
                    ) : (
                        <div className={styles.productModal}>
                            <div className={styles.productModalBox}>
                                <div className={styles.productModalId}>
                                    {modal.id}
                                </div>
                                <div className={styles.productModalTitle}>
                                    {modal.title}
                                </div>
                                <div className={styles.productModalBody}>
                                    {modal.body}
                                </div>
                                <button
                                    className={styles.productModalClose}
                                    onClick={() => setModal(null)}
                                >
                                    ✖
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Production;

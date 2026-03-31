import React from "react";
import style from "./Comments.module.scss";
import Navigation from "../../layouts/Navigation";

function Comments(props) {
    const [data, setData] = React.useState(null);
    const [input, setInput] = React.useState({ name: "", email: "", body: "" });

    React.useEffect(() => {
        fetch(props.api)
            .then((res) => res.json())
            .then((array) => {
                console.log(array);
                setData(array);
            });
    }, []);

    let commentList = data
        ? data.map((item) => {
              return (
                  <li className={style.commentItem} key={item.id}>
                      <div className={style.commentItemHead}>
                          <div className={style.commentItemAvatar}>
                              <img
                                  src={`https://robohash.org/${item.id}.png`}
                              ></img>
                          </div>
                          <div className={style.commentItemHeadMid}>
                              <div className={style.commentItemName}>
                                  {item.name}
                              </div>
                              <div className={style.commentItemEmail}>
                                  {item.email}
                              </div>
                          </div>
                          <div className={style.commentItemPostTime}>
                              {item.postTime
                                  ? item.postTime
                                  : item.name.split(``).length + `m`}
                          </div>
                      </div>
                      <div className={style.commentItemBody}>{item.body}</div>
                  </li>
              );
          })
        : `loading.....`;

    return (
        <>
            <Navigation></Navigation>
            <div className={style.commentWrap}>
                <div className={style.comment}>
                    <ul className={style.commentList}>{commentList}</ul>
                    <div className={style.commentPostForm}>
                        <label className={style.commentPostName}>
                            name
                            <input
                                value={input.name}
                                onChange={(e) => {
                                    setInput({
                                        ...input,
                                        name: e.target.value,
                                    });
                                }}
                                className={style.inputUnderline}
                            ></input>
                        </label>

                        <label className={style.commentPostEmail}>
                            email
                            <input
                                value={input.email}
                                onChange={(e) => {
                                    setInput({
                                        ...input,
                                        email: e.target.value,
                                    });
                                }}
                                name="email"
                                className={style.inputUnderline}
                            ></input>
                        </label>

                        <div className={style.commentPostContent}>
                            <textarea
                                name="body"
                                value={input.body}
                                onChange={(e) => {
                                    setInput({
                                        ...input,
                                        body: e.target.value,
                                    });
                                }}
                            ></textarea>
                            <button
                                onClick={() => {
                                    if (
                                        !input.name ||
                                        !input.email ||
                                        !input.body
                                    )
                                        return alert(
                                            "Please fill in all fields",
                                        );

                                    setData([
                                        ...data,
                                        {
                                            id: Math.random() * 10000,
                                            name: input.name,
                                            email: input.email,
                                            body: input.body,
                                        },
                                    ]);
                                    // reset input
                                    setInput({ name: "", email: "", body: "" });
                                }}
                                className={style.commentPostBtn}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comments;

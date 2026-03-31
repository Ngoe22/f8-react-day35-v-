/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Todo.module.scss";
import Navigation from "../../layouts/Navigation";

function Todo() {
    const [list, setList] = React.useState([]);
    const [newTask, setNewTask] = React.useState(``);

    const [editContent, setEditContent] = React.useState(``);
    const [editId, setEditId] = React.useState(``);

    const length = list.length;
    const completed = list.reduce((acc, value) => {
        return acc + value.completed;
    }, 0);

    function createId() {
        return `${Math.floor(Math.random() * 1000)}-${Date.now()} `;
    }

    return (
        <>
            <Navigation></Navigation>
            <div className={styles.todoWrapper}>
                <div className={styles.todo}>
                    <div className={styles.todoNums}>
                        <div className={styles.todoNumsCompleted}>
                            {completed}
                        </div>
                        <div className={styles.todoNumsTotal}>{length}</div>
                        <div className={styles.todoNumsIncomplete}>
                            {length - completed}
                        </div>
                    </div>

                    <div className={styles.todoGet}>
                        <input
                            value={newTask}
                            onChange={(e) => {
                                setNewTask(e.target.value);
                            }}
                        ></input>
                        <button
                            onClick={(e) => {
                                if (!newTask)
                                    return alert(`Enter your task title`);
                                setList([
                                    ...list,
                                    {
                                        title: newTask,
                                        completed: false,
                                        id: createId(),
                                    },
                                ]);
                                setNewTask(``);
                            }}
                        >
                            Add
                        </button>
                    </div>

                    <ul className={styles.todoList}>
                        {list.map((item, index) => {
                            const onEditing = editId === item.id;
                            const Tag = onEditing ? "input" : `div`;

                            return (
                                <li className={styles.todoItem} key={item.id}>
                                    <Tag
                                        className={`${styles.todoItemTitle}${item.completed ? ` ${styles.done}` : ``}${onEditing ? ` ${styles.onEditing}` : ``}`}
                                        contentEditable={onEditing}
                                        defaultValue={
                                            onEditing ? item.title : null
                                        }
                                        onChange={
                                            onEditing
                                                ? (e) => {
                                                      setEditContent(
                                                          e.target.value,
                                                      );
                                                  }
                                                : null
                                        }
                                    >
                                        {onEditing ? null : item.title}
                                    </Tag>

                                    <button
                                        className={styles.todoItemEdit}
                                        onClick={(e) => {
                                            if (onEditing) {
                                                setList(
                                                    list.map((value) => {
                                                        if (
                                                            editId === value.id
                                                        ) {
                                                            value.title =
                                                                editContent;
                                                        }
                                                        return value;
                                                    }),
                                                );

                                                setEditContent(``);
                                                setEditId(``);
                                            } else {
                                                setEditContent(item.title);
                                                setEditId(item.id);
                                            }
                                        }}
                                    >
                                        {onEditing ? `save` : `edit`}
                                    </button>

                                    <button
                                        className={`${styles.todoItemStatus} ${item.completed ? styles.done : styles.undone}`}
                                        onClick={() => {
                                            setList(
                                                list.map(
                                                    (value, statusIndex) => {
                                                        if (
                                                            statusIndex ===
                                                            index
                                                        ) {
                                                            value.completed =
                                                                !value.completed;
                                                        }
                                                        return value;
                                                    },
                                                ),
                                            );
                                        }}
                                    >
                                        {item.completed ? `undone` : `done`}
                                    </button>

                                    <button
                                        className={styles.todoItemDelete}
                                        onClick={() => {
                                            setList(
                                                list.filter(
                                                    (value, deleteIndex) =>
                                                        deleteIndex !== index,
                                                ),
                                            );
                                        }}
                                    >
                                        delete
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Todo;

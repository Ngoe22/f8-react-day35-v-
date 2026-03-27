import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.scss";

function Button({
    primary,
    size = "medium",
    bordered,
    rounded,
    loading,
    children,
    disabled,
    ...passProps
}) {
    console.log(passProps.className);
    console.log(styles[passProps.className]);

    const allClassName = clsx(styles.button, styles[size], {
        [styles.primary]: primary,
        [styles.bordered]: bordered,
        [styles.rounded]: rounded,
        [styles.loading]: loading,
        [styles.disabled]: disabled,
        [styles[passProps.className]]: passProps.className,
    });

    const Tag = passProps.href ? "a" : "button";
    return (
        <Tag {...passProps} className={allClassName} >
            {children}
        </Tag>
    );
}

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    primary: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.string,
};

export default Button;

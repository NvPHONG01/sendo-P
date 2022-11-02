import classNames from "classnames/bind"
import styles from './button.module.scss'
// import { Link } from 'react-router-dom'

const ss = classNames.bind(styles);

function Button({ login, children, onclick }) {
    let Comp = 'button';

    const props = {
        onclick,
    }

    // if (to) {
    //     props.to = to;
    //     Comp = Link;
    // } else if (href) {
    //     props.href = href;
    //     Comp = 'a';
    // }

    const classes = ss('wrapper', {
        login,
    })

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
import classNames from "classnames/bind"
import styles from './card.module.scss'
// import { Link } from 'react-router-dom'

const ss = classNames.bind(styles);

function Button({  children, onclick , FlashSale }) {
    let Comp = 'div';

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
        FlashSale,
    })

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
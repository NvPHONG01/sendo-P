import classNames from "classnames/bind";
import styles from './Popper.module.scss'

const style = classNames.bind(styles);

function Wrapper ({ children }) {
    return <div className={style('wrapper')}>
        {children}
    </div>
}

export default Wrapper;
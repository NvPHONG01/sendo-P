import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const ss = classNames.bind(styles)

function DefaultLayout() {
    return (
        <div className={ss('wrapper')}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default DefaultLayout
import classNames from "classnames/bind";
import styles from './Header.module.scss'
import { useState } from "react";

import images from "../../../assets/images/index";
import Button from "../../Button";
import { Wrapper as PopperWrapper } from '../../../components/Popper'




const ss = classNames.bind(styles);

console.log(images.logo)

function Header() {

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const search_result = () => {
        return (
            <div className={ss('search-result')}>
                <PopperWrapper >
                    <ul>
                        <li><span>Xu hướng tìm kiếm</span></li>
                        <li><a href="/">Zed Tử Thần Bóng Tối</a></li>
                        <li><a href="/">Yasuo Ma Kiếm</a></li>
                        <li><a href="/">Zed Tử Thần Bóng Tối</a></li>
                        <li><a href="/">Yasuo Ma Kiếm</a></li>
                        <li><a href="/">Zed Tử Thần Bóng Tối</a></li>
                        <li><a href="/">Yasuo Ma Kiếm</a></li>
                        <li><a href="/">Zed Tử Thần Bóng Tối</a></li>
                        <li><a href="/">Yasuo Ma Kiếm</a></li>
                    </ul>
                </PopperWrapper>
            </div>
        )
    }


    return (
        <div className={ss('wrapper')}>
            <div className={ss('inner')}>
                <div className={ss('top')}>
                    <div className={ss('container')}>
                        <span>Tải ứng dụng</span>
                        <span>Chăm sóc khách hàng</span>
                        <span>Kiểm tra đơn hàng</span>
                    </div>
                </div>
                <div className={ss('bottom')}>
                    <div className={ss('container')}>
                        <div className={ss('logo')}>
                            <img src={images.logo} href="/" aria-label="logo" />
                        </div>
                        <div className={ss('list')}>
                            <div className={ss('menu')}>
                                <object data={images.menu} aria-label="gian hàng"></object>
                            </div>


                            <div className={ss('search')}>
                                <input onFocus={show} onBlur={hide} placeholder="Tìm kiếm trên Sendo..." aria-label="tìm kiếm" />
                            </div>

                            {visible ? search_result() : null}


                            <button className={ss('ConfigSearch')}>
                                <object data={images.search} aria-label="xác nhận tìm kiếm"></object>
                            </button>
                        </div>
                        <div className={ss('list')}>
                            <object className={ss('card')} data={images.card} aria-label="Giỏ Hàng"></object>
                            <Button className={ss('login')} children="Đăng Nhập" login></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
import classNames from "classnames/bind"
import Styles from './Category.module.scss'
import images from "../../assets/images";
import { useEffect, useState } from "react";

import Location from './location';
import Transport from "./transport";

const ss = classNames.bind(Styles);

function List({ connectDataProv, connectDataTrans }) {


    const [show, setShow] = useState(true);
    const onClick = () => setShow(!show);

    const [show1, setShow1] = useState(true);
    const onClick1 = () => setShow1(!show1);

    const [show2, setShow2] = useState(true);
    const onClick2 = () => setShow2(!show2);

    const tabs = () => {
        return (
            <ul className={ss('sub-category-tabs')}>
                <li><a href=" ">Thời Trang Nam</a></li>
            </ul>
        )
    }


    const [DataProv, setDataProv] = useState([])

    const [DataTrans, setDataTrans] = useState([])

    useEffect(() => {
        connectDataProv(DataProv)
        connectDataTrans(DataTrans)
    }, [DataProv, DataTrans])

    return (
        <div className={ss('side-nav-categories')}>
            <ul className={ss('category-tabs')} >
                <li className={ss('main-category')}><a href=" ">Danh Mục</a>
                    <button onClick={onClick}><img src={show ? images.arrowlist : images.arrowlist2} alt="" /></button>
                    {show ? tabs() : null}
                </li>
            </ul>
            <ul className={ss('category-tabs')}>
                <li className={ss('main-category')}><a href=" ">Địa Điểm </a>
                    <button onClick={onClick1}><img src={show1 ? images.arrowlist : images.arrowlist2} alt="" /></button>
                    {show1 ? <Location moveDataProv={setDataProv} /> : null}
                </li>
            </ul>
            <ul className={ss('category-tabs')}>
                <li className={ss('main-category')}><a href=" ">Phương Thức Vận Chuyển</a>
                    <button onClick={onClick2}><img src={show2 ? images.arrowlist : images.arrowlist2} alt="" /></button>
                    {show2 ? <Transport props={setDataTrans} /> : null}
                </li>
            </ul>

        </div>
    )
}

export default List
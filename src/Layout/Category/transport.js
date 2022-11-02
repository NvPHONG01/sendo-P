
import classNames from "classnames/bind";
import Styles from './Category.module.scss'
import { useState, useEffect } from "react";

const ss = classNames.bind(Styles);


const Transport = ({ props }) => {

    const [DataTrans, setDataTrans] = useState([]);

    const AddData = (e) => {
        const newDataProvince = [...DataTrans, e];
        setDataTrans(newDataProvince);
        const result = DataTrans.find(x => x === e)
        if (result === e) {
            setDataTrans([...DataTrans].filter((k) => { return k !== e }));
        }
    }

    useEffect(() => {
        props(DataTrans)
    }, [DataTrans])

    return (
        <ul className={ss('sub-category-tabs')}>
            <li><div><input type={"checkbox"} onChange={x => AddData(x.target.value)} value="Hoả Tốc" /><a href=" ">Hoả Tốc</a></div></li>
            <li><div><input type={"checkbox"} onChange={x => AddData(x.target.value)} value="Chuyển Phát Tiêu Chuẩn" /><a href=" ">Chuyển Phát Tiêu Chuẩn</a></div></li>
        </ul>
    )
}

export default Transport
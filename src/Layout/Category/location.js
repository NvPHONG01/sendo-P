import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Styles from './Category.module.scss'

const ss = classNames.bind(Styles);


const Location = ({ moveDataProv }) => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/vietnam")
            .then((res) => res.json())
            .then((item) => {
                setdata(item);
            });
    }, []);

    const [DataProvince, setDataProvince] = useState([]);

    const AddData = (e) => {
        const newDataProvince = [...DataProvince, e];
        setDataProvince(newDataProvince);
        const result = DataProvince.find(x => x === e)
        if (result === e) {
            setDataProvince([...DataProvince].filter((k) => { return k !== e }));
        }
    }

    useEffect(() => {
        moveDataProv(DataProvince)
        console.log(DataProvince)
    }, [DataProvince])

    return (
        <ul className={ss('sub-category-tabs')}>
            {data.map(item => {
                return (
                    <li>
                        <div><input
                            onChange={(e) => {
                                AddData(e.target.value)
                            }}
                            value={item.province}
                            type={"checkbox"} /><a href=" ">{item.province}</a>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Location
import Styles from "./Fashion.module.scss"
import classNames from "classnames/bind"
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { useEffect, useState } from "react";
import Category from "../../Category/index"


const ss = classNames.bind(Styles);

function Fashion() {

    const [data, setdata] = useState([]);

    const [StateProv, setStateProv] = useState([]);

    const [StateTrans , setStateTrans] = useState([]);


    const [DataAll , setDataAll] = useState([{}]);

    useEffect(() => {
        
    })

    useEffect(() => {
        fetch("http://localhost:3000/Fashion")
            .then((res) => res.json())
            .then((item) => {
                setdata(item);
            });
    }, []);

    const card = (item) => {
        return (

            <div className={ss('card')}>
                <div className={ss('top')}>
                    <img src={item.img} alt="anhr" />
                </div>
                <div className={ss('bottom')}>
                    <div>{item.name}</div>
                    <div><b>{item.price}.000đ</b></div>
                    <div>
                        <strike>{item.saleprice}.000đ</strike>
                        <span className={ss('color')}>-{item.percent}%</span>
                    </div>
                    <div>
                        <div className={ss('Kredivo')}>
                            <div>
                                <img src={"https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png"} alt="" />
                                <span>Trả góp Kredivo</span>
                            </div>
                        </div>
                    </div>
                    <div>Đã bán : {item.sold}</div>
                    <div>{item.address[0]}</div>
                </div>
            </div>
        )
    }

    

    return (
        <div>
            <Header />
            <div className={ss('wrapper')}>
                <div className={ss('inner')}>
                    <div className={ss('top')}></div>
                    <div className={ss('main')}>
                        <div className={('left')}>
                            <div className={ss('container')}>
                                <Category connectDataProv={setStateProv} connectDataTrans={setStateTrans} />
                            </div>

                        </div>
                        <div className={ss('right')}>
                            <div className={ss('sort')}>
                                <span>Sắp xếp theo : </span>
                                <select>
                                    <option value="Đề Cử">Đề Cử</option>
                                    <option value="Khuyến Mại">Khuyến Mại</option>
                                    <option value="Bán Chạy">Bán Chạy</option>
                                    <option value="Đánh Giá Tốt">Đánh Giá Tốt</option>
                                </select>
                            </div>
                            <div className={ss('cards')}>
                                {StateProv.length ? data.filter((item) => {
                                    const result = item.address.find(x => x === StateProv.find(e => { return e === x }))
                                    return result
                                }).map((item) => {
                                    return (
                                        card(item)
                                    )
                                }) : data.map((item) => {
                                    return (
                                        card(item)
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Fashion
import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import React, { useState, useEffect } from "react";

import images from "../../../assets/images/index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ss = classNames.bind(styles);


//   {
//     id: 1,
//     img:" ",
//     price: "",
//     img: "",
//   },
// ];

// const Card = () => {
//   return (
//     <div className={ss("card-FS")}>
//       <div>
//         <img
//           src="https://media3.scdn.vn/img3/2019/5_8/l0GmXZ_simg_de2fe0_350x350_maxb.jpg"
//           alt=""
//         />
//       </div>
//       <div>
//         <img
//           className={ss("imgsale")}
//           src="https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png"
//           alt=""
//         />
//       </div>
//       <div className={ss("car")}>
//         <h4>69.000đ</h4>
//         <div>
//           <strike>197.000đ</strike>
//           <h6>-65%</h6>
//         </div>
//       </div>
//     </div>
//   );
// };

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, display: "block", background: "#e7e8ea", minHeight: 40, minWidth: 40, position: "absolute", right: -46 }}
      src={images.arrow}
      alt="PHONG"
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, display: "block", background: "#e7e8ea", minHeight: 40, minWidth: 40, position: "absolute", left: -46 }}
      src={images.arrow1}
      alt="PHONG"
      onClick={onClick}
    />
  );
}

function Main() {

  var settings = {
    className: "left",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 8,
    slidesToScroll: 7,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/FlashSale")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);



  return (
    <div className={ss("wrapper")}>
      <div className={ss("inner")}>
        <div className={ss("menu")}>
          <div className={ss("container")}>
            <ul>
              <li>
                <button >Cho Bạn</button>
                <div></div>
              </li>
              <li>
                <button>Đầm, váy</button>
                <div></div>
              </li>
              <li>
                <button>Đồ dùng nhà bếp</button>
                <div></div>
              </li>
              <li>
                <button>Áo nữ</button>
                <div></div>
              </li>
              <li>
                <button>Chăm sóc sức khoẻ</button>
                <div></div>
              </li>
              <li>
                <button>Áo khoác nữ</button>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
        <div className={ss("bar")}>
          <div>
            <div className={ss("Items")}>

            </div>
          </div>
          <div>
            <img src="https://media3.scdn.vn/img4/2022/10_20/4hg5L4awVsxbn2oZzdNE.png" alt="phong" />
          </div>
        </div>
        <div className={ss("main")}>
          <div className={ss("flash-sale")}>
            <div className={ss("bannerFlashsale")}>
              <div className={ss("logoFS")}></div>
              <a href="https://www.sendo.vn/flash-sale?source_page_id=home&source_pagetab_id=0&source_block_id=flash-sale">
                Xem Tất Cả
              </a>
            </div>
            <div className={ss("itemsFlashsale")}>
              {suggestions.length === 0 ? (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <Slider {...settings}>
                  {suggestions.map((current) => (
                    <div className="out" key={current.id}>
                      {/* <div className="card">
                        <img
                          className="rounded-circle"
                          alt={"users here"}
                          src={`https://source.unsplash.com/random/${current.id}`}
                          height={56}
                          width={56}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{current.username}</h5>
                          <small className="card-text text-sm-center text-muted">
                            Giá Gốc
                          </small>
                          <br />
                          <button className="btn btn-sm follow btn-primary">
                            Giá
                          </button>
                        </div>
                      </div> */}
                      <div className={ss("card-FS")}>
                        <div>
                          <img
                            className={ss("imgFS")}
                            src={`https://source.unsplash.com/random/${current.id}`}
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className={ss("imgsale")}
                            src="https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png"
                            alt=""
                          />
                        </div>
                        <div className={ss("car")}>
                          <h4>69.000đ</h4>
                          <div>
                            <strike>197.000đ</strike>
                            <h6>-65%</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>

        <div className={ss("main")}>
          <div className={ss("trade-sale")}>
            <div className={ss("bannerTradesale")}>
              <div>
                <h4>Thương hiệu chính hãng</h4>
                <a href="https://www.sendo.vn/flash-sale?source_page_id=home&source_pagetab_id=0&source_block_id=flash-sale">
                  Xem Tất Cả
                </a>
              </div>
              <img
                heigh="100%"
                src="https://media3.scdn.vn/img4/2022/09_30/YlDaGZqXXSR1ZecMK3lk.jpg"
                alt="Shop brands banners"
              />
            </div>
            <div className={ss("itemsTradesale")}>
              {suggestions.length === 0 ? (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <Slider {...settings}>
                  {suggestions.map((current) => (
                    <div className="out" key={current.id}>
                      {/* <div className="card">
                        <img
                          className="rounded-circle"
                          alt={"users here"}
                          src={`https://source.unsplash.com/random/${current.id}`}
                          height={56}
                          width={56}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{current.username}</h5>
                          <small className="card-text text-sm-center text-muted">
                            Giá Gốc
                          </small>
                          <br />
                          <button className="btn btn-sm follow btn-primary">
                            Giá
                          </button>
                        </div>
                      </div> */}
                      <div className={ss("card-FS")}>
                        <div>
                          <img
                            className={ss("imgFS")}
                            src={`https://source.unsplash.com/random/${current.id}`}
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className={ss("imgsale")}
                            src="https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png"
                            alt=""
                          />
                        </div>
                        <div className={ss("car")}>
                          <h4>69.000đ</h4>
                          <div>
                            <strike>197.000đ</strike>
                            <h6>-65%</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

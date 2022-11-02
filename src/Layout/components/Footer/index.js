import styles from './Footer.module.scss'
import classNames from 'classnames/bind'

const ss = classNames.bind(styles)

function Footer() {
    return (
        <div className={ss('wrapper')}>
            <div className={ss('inner')}>
                <div className={ss('Footer-1')}>
                    <div className={ss('container')}>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png" alt="Siêu nhiều hàng tốt"></img>
                        <div>
                            <b>Siêu nhiều hàng tốt</b><br />
                            <span>Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span>
                        </div>
                    </div>
                    <div className={ss('container')}>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png" alt="Siêu nhiều hàng tốt"></img>
                        <div >
                            <b>Siêu yên tâm</b><br />
                            <span>Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span>
                        </div>
                    </div>
                    <div className={ss('container')}>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png" alt="Siêu nhiều hàng tốt"></img>
                        <div>
                            <b>Siêu tiện lợi</b><br />
                            <span>Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span>
                        </div>
                    </div>
                    <div className={ss('container')}>
                        <img src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png" alt="Siêu nhiều hàng tốt"></img>
                        <div>
                            <b>Siêu tiết kiệm</b><br />
                            <span>Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span>
                        </div>
                    </div>
                </div>
                <div className={ss('Footer-2')}>
                </div>

                phong
            </div>
        </div>
    )
}

export default Footer
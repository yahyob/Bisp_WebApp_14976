import './style.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import Img from '../assets/картнка 2.png'
import Img1 from '../assets/UF.png'

function Footer() {
    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12 ftr-item mt-5">
                        <p className="mt-5 ms-5">Students Will Be Empowered: <br /> UniFinder will provide prospective <br /> students with a plethora of <br /> information to enable them to make <br /> well-informed decisions regarding <br /> their course of study.</p>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <img className="img-fluid" src={Img} alt="" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footer bg-dark p-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 ms-5 mt-4">
                                <a className="nav-link text-light" href="#">About </a>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 ms-5 mt-4">
                                <a className="nav-link text-light" href="#">Catalog</a>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 ms-5 mt-4">
                                <a className="nav-link text-light" href="#">Sertificates</a>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 ms-5 mt-4">
                                <a className="nav-link text-light" href="#">Feedbacks</a>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 ms-5 mt-4">
                                <a className="nav-link text-light" href="#">Contacts</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
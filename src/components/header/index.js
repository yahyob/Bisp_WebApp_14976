import './style.css'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import Img from '../assets/img-1.png'
import Img1 from '../assets/img-2.png'


function Header (){
    return (
        <div className="container-fluid mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 hdr-dv mt-5">
                        <div className="hdr-item">
                            <p>Students Will Be Empowered: Unifinder <br /> will provide prospective students with a <br /> plethora of information to enable them to <br /> make well-informed decisions regarding <br /> their course of study.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 hdr-img text-center mt-5">
                        <img className="img-fluid w-75" src={Img} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 hdr-img1 text-center">
                        <img className="img-fluid w-75" src={Img1} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 hdr-dv1 mt-5">
                        <div className="hdr-item1">
                            <p>Students Will Be Empowered: Unifinder <br /> will provide prospective students with a <br /> plethora of information to enable them to <br /> make well-informed decisions regarding <br /> their course of study.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
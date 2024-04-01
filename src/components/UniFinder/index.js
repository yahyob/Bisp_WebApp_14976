import './style.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import MaskGrup from '../assets/Mask Group (1).png'
import MaskGrup1 from '../assets/Mask Group (2).png'
import MaskGrup2 from '../assets/Mask Group (3).png'
import MaskGrup3 from '../assets/Mask Group (4).png'
import MaskGrup4 from '../assets/Mask Group (5).png'
import MaskGrup5 from '../assets/Mask Group (6).png'
import Uf from '../assets/UF.png'


function UniFinder() {
    return(
        <div className="container-fluid mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-12 ms-4 text-center">
                        <img src={MaskGrup} alt="" />
                        <h5 className="mt-2">Start your <br />studies</h5>
                    </div>
                    <div className="col-lg-4 col-md-12 text-center">
                        <img src={MaskGrup1} alt="" />
                        <h5 className="mt-2">Analyze your <br />knowledge</h5>
                    </div>
                </div>
                <div className="row justify-content-between text-center">
                    <div className="col-lg-3 col-md-12 text-center ms-lg-5 min-finder">
                        <img src={Uf} alt="" />
                        <h5>Get UniFinder <br />help</h5>
                    </div>
                    <div className="col-lg-3 col-md-12 text-center justify-content-center">
                        <div className="min-hdr text-center justify-content-center">
                            <h3>UniFinder</h3>
                        </div>
                        <p>UniFinder has info more <br />than 70% of Universities in Uzbekistan</p>
                    </div>
                    <div className="col-lg-4 col-md-12 justify-content-start min-finder">
                        <img src={MaskGrup2} alt="" />
                        <h5>Language <br />certificates</h5>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-12 text-center">
                        <img src={MaskGrup3} alt="" />
                        <h5 className="mt-2">Get your <br />school certificate</h5>
                    </div>
                    <div className="col-lg-4 col-md-12 text-center">
                        <img src={MaskGrup4} alt="" />
                        <h5 className="mt-2">Find your <br />interests </h5>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-12 ms-lg-5 text-center">
                        <img src={MaskGrup5} alt="" />
                        <h3>Social life <br />interests</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UniFinder
import './style.css'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import Img from '../assets/UF.png'
import Kryg from '../assets/1 картинка.png'


function Navbar (){
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg mt-4">
                <div className="container">
                    <a className="navbar-brand d-block" href="#"><img src={Img} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="container-fluid">
                            <div className="row justify-content-center text-end">
                                <input type="text" className="form-control w-75" placeholder="Serach"/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 header-text mt-4">
                        <h1><a href="#">UniFinder </a> - find <br /> the best University you want!</h1>
                        <p className="mt-4">Choosing the correct institution can be <br /> extremely difficult in a world where education is <br /> becoming more and more globalized and crosses <br /> regional borders. Unifinder will help you with it!</p>
                        <button className="mt-3">Log In /  Sign Up</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 header"><img src={Kryg} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
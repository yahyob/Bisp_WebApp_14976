import './style.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


function ChooseFrom() {
    return(
        <div className="container-fluid mt-5">
            <h1 className="text-center">Choose From:</h1>
            <div className="row justify-content-evenly">
                <div className="col-lg-3 col-md-12 col-sm-12 col-12 min-hdr-bc text-center mt-5">
                    <div className="min-nav">
                        <h3>State Universities</h3>
                    </div>
                    <h1 className="mt-5">115</h1>
                    <h6 className="mt-4">in Tashkent and regions</h6>
                    <h6 className="mt-4">... amount of students</h6>
                    <h6 className="mt-4">... amount of faculties</h6>
                    <h6 className="mt-4">In Uzbek and Russian <br />languages</h6>
                    <div className="mt-4">
                        <a className="text-decoration-none text-info" href="#"><b>See more...</b></a>
                    </div>
                    <button className="mt-3">Search</button>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-12 min-hdr-bc1 text-center mt-5">
                    <div className="min-nav1">
                        <h3>Foreign universities <br />in Tashkent</h3>
                    </div>
                    <h1 className="mt-5">115</h1>
                    <h6 className="mt-4">in Tashkent and regions</h6>
                    <h6 className="mt-4">... amount of students</h6>
                    <h6 className="mt-4">... amount of faculties</h6>
                    <h6 className="mt-4">In Uzbek and Russian <br />languages</h6>
                    <div className="mt-4">
                        <a className="text-decoration-none text-info" href="#"><b>See more...</b></a>
                    </div>
                    <button className="mt-3">Search</button>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-12 min-hdr-bc2 text-center mt-5">
                    <div className="min-nav2">
                        <h3>non-state higher <br />educational institutions.</h3>
                    </div>
                    <h1 className="mt-5">115</h1>
                    <h6 className="mt-4">in Tashkent and regions</h6>
                    <h6 className="mt-4">... amount of students</h6>
                    <h6 className="mt-4">... amount of faculties</h6>
                    <h6 className="mt-4">In Uzbek and Russian <br />languages</h6>
                    <div className="mt-4">
                        <a className="text-decoration-none text-info" href="#"><b>See more...</b></a>
                    </div>
                    <button className="mt-3">Search</button>
                </div>
            </div>
        </div>
    )
}


export default ChooseFrom
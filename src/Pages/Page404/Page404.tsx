import './Page404.scss'
import { Link } from "react-router-dom";
import { Header1 } from "../../Components/Header/Header"
import Archivum from "../../Assets/Main/archivum.svg"

function Page404() {
    return (
        <>
            <Header1 />
            <div className="main">
                <div className="archivum2">
                    <img src={Archivum} alt="" />
                    <h1>404</h1>
                    <p>Page Not Found</p>
                    <Link to="/" className="button2">Back to Home</Link>
                </div>
            </div>

        </>
    )
}

export default Page404

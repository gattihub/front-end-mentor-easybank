import logoBank from '../../assets/images/logo.svg'
import './styles.css'


export function Header(): JSX.Element {

    function listaMenu() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Careers</a>
                </li>
            </ul>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <img src={logoBank} alt="Bank Logo" />
                <button type="button" className="btn-close mb-5" data-bs-dismiss="modal" aria-label="Close"></button>
                <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="modal navbar-colapse justify-content-between bg-white w-75" id="navbarNav"
                    aria-labelledby="navbarModal" aria-hidden="true">
                    <div className="modal-dialog border-0 w-100 m-3 modal-dialog-centered justify-content-center">
                        
                        {listaMenu()}
                    </div>
                </div>

                <div className="divListaMenu">
                    {listaMenu()}
                </div>
            </div>
        </nav >
    )
}

import { Link } from "react-router-dom";

const MyNav = () => {
    return (
        <>
         <header style={{textAlign: 'left'}}>
            <h >NYAAY SAHAAYAK</h>
        </header>
        
        <nav  class="navbar navbar-expand-sm navbar-light" style={{backgroundColor: 'white',textAlign: 'center'}}>
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul align="center" class="navbar-nav me-auto mt-2 mt-lg-0"style={{backgroundColor:'white'}}>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                    </li>
                    <li class="nav-item" >
                        <Link class="nav-link active" to="/serv">Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/about">About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/cont">Contact Us</Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
        </>
      );
}
 
export default MyNav ;
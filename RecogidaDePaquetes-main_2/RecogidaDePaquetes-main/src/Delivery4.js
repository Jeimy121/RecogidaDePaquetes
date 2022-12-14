import './App.css';
import {Link} from "react-router-dom";

function Delivery4() {
  return (
    <div>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/*<!-- Navbar Brand-->*/}
            <Link to="/index" className="navbar-brand ps-3">RECOGIDA DE PAQUETES</Link>
            {/*<!-- Sidebar Toggle-->*/}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            {/*<!-- Navbar Search-->*/}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>
            {/*<!-- Navbar-->*/}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <Link to="/Profile" className="dropdown-item">Editar Perfil</Link>
                        <li><hr className="dropdown-divider" /></li>
                        <Link to="/Login" className="dropdown-item">Cerrar sesión</Link>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Cliente</div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Envios
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link to="/Envio" className="nav-link">Solicitud</Link>
                                    <Link to="/Tracking" className="nav-link">Seguimiento</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Identificado como:</div>
                        Usuario1
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="card mb-4">
                        <div class="card-header">
                            <img src="/Imagen/Disponibilidad.jpg" width="1050px" height="250px"/>
                        </div>
                    </div>
                    <figure class="text-center">
                        <blockquote class="blockquote">
                          <p  style={{backgroundColor:'rgb(35, 35, 35)', color:'rgb(255, 255, 255)'}}>DESTINATARIO</p>
                        </blockquote>
                    </figure>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Primer Nombre</span>
                        <input type="text" class="form-control" placeholder="xxxx" aria-label="Username"/>
                        <span class="input-group-text" id="basic-addon1">Segundo Nombre</span>
                        <input type="text" class="form-control" placeholder="xxxx" aria-label="Server"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Primer Apellido</span>
                        <input type="text" class="form-control" placeholder="xxxx" aria-label="Username"/>
                        <span class="input-group-text" id="basic-addon1">Segundo Apellido</span>
                        <input type="text" class="form-control" placeholder="xxxx" aria-label="Server"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Tipo ID</span>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Seleccione documento</option>
                            <option value="1">CE</option>
                            <option value="1">CC</option>
                            <option value="2">NIP</option>
                            <option value="3">NIT</option>
                            <option value="3">TI</option>
                          </select>
                        <span class="input-group-text" id="basic-addon1">Documento</span>
                        <input type="text" class="form-control" placeholder="xxxx" aria-label="Server"/>
                    </div>
                    <figure class="text-center">
                        <blockquote class="blockquote">
                          <p  style={{backgroundColor:'rgb(35, 35, 35)', color:'rgb(255, 255, 255)'}}>UBICACIÓN</p>
                        </blockquote>
                    </figure>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Ciudad</span>
                        <input type="text" class="form-control" placeholder="xxxx" aria-label="Username"/>
                        <span class="input-group-text" id="basic-addon1">Dirección</span>
                        <input type="text" class="form-control" placeholder="xxxx" aria-label="Server"/>
                    </div>
                </main>

                <div class="column" >
                        <Link to="/Delivery3" className="buttonEnd">Atrás</Link>
                        <button className="buttonEnd">Guardar</button>
                        <Link to="/Tracking" className="buttonEnd">Siguiente</Link>           
                </div>
               
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">MinTIC 2022 - GRUPO 2253 - EQUIPO 7</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>


  );
}

export default Delivery4;

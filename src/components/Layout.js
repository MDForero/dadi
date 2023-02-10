import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer';

const Layout = () => {
    const [navbarColor, setNavbarColor] = useState('white');
    const [dadi, setDadi] = useState("dadi")
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setCollapsed(false);
        window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    }, [location]);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 200) {
                setNavbarColor('white sticky-top');
                setDadi("")
            } else {
                setNavbarColor('white ');
                setDadi("dadi")
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>
        <Navbar collapseOnSelect expand="lg" expanded={collapsed} className={navbarColor} variant="dark" >
            <Container>
                <Navbar.Brand href="/"><strong className={dadi}>DADI</strong> soluciones tecnológicas</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  onClick={() => setCollapsed(!collapsed)}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink to="/" className="nav-link">Inicio</NavLink>
                        <NavLink to="servicios" className="nav-link">Servicios</NavLink>
                        <NavLink to="casos-de-exito" className="nav-link">Casos de éxito</NavLink>
                        <NavLink to="nosotros" className="nav-link">Nosotros</NavLink>
                        <NavLink to="contacto" className="nav-link">Contacto</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        <Footer />
    </>
    )
}

export default Layout
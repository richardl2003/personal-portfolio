import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home"> 
                    <p class="m-0 display-6">Richard Li</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link> 
                    <Nav.Link href="#skills" className={activeLink === 'skill' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link> 
                    <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/richardli2003/" target="_blank" rel="noreferrer"><img src={navIcon1} alt=""/></a>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src={navIcon2} alt=""/></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={navIcon3} alt=""/></a>
                    </div>
                    <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}><button className="vvd"><span>Let's Connect</span></button></Nav.Link>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
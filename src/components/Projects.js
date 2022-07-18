import { Nav, Col, Row, Tab, Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            linkUrl: "https://github.com/richardl2003/"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            linkUrl: "https://github.com/richardl2003/"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            linkUrl: "https://github.com/richardl2003/"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            linkUrl: "https://github.com/richardl2003/"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            linkUrl: "https://github.com/richardl2003/"
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            linkUrl: "https://github.com/richardl2003/"
        },
    ]


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">tab 2</Tab.Pane>
                                <Tab.Pane eventKey="third">tab 3</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
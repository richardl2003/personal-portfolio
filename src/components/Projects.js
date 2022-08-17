import { Col, Row, Tab, Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import gitAPI from "../assets/img/gitAPI.png"
import spending from "../assets/img/gitAPI.png"
import tictactoe from "../assets/img/tictactoe.png"
import minesweeper from "../assets/img/minesweeper.png"

export const Projects = () => {

    const projects = [
        {
            title: "Git Commands REST API",
            description: "Full Stack Web Application to remember commonly used Git Commands",
            imgUrl: gitAPI,
            linkUrl: "https://github.com/richardl2003/git_commands_RestAPI"
        },
        {
            title: "Transaction Data Analyzer",
            description: "Tracks spending habits visually",
            imgUrl: spending,
            linkUrl: "https://github.com/richardl2003/transaction_tracker"
        },
        {
            title: "Tictactoe AI",
            description: "Utilized the Minimax algorithm to never lose",
            imgUrl: tictactoe,
            linkUrl: "https://github.com/richardl2003/tictactoe"
        },
        {
            title: "Minesweeper AI",
            description: "Prepositional Logic AI to play optimally",
            imgUrl: minesweeper,
            linkUrl: "https://github.com/richardl2003/Minesweeper"
        }
    ]


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of the personal projects I have been working on: </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
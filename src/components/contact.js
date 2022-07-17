
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'



export const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Sending...')
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Send")
        let result = response.json()
        setFormDetails(formInitialDetails)
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully'})
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.'})
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-content-center">
                    <Col md={6}>
                        <Col>
                            <h1 class="text-start">Let's Get in touch!</h1>
                        </Col>
                        <Col>
                            <p class="text-start mt-5 mb-0 text-muted">Email</p>
                            <p class="text-start fs-5">richardliy03@gmail.com</p>
                        </Col>
                        <Col>
                            <p class="text-start mt-5 mb-0 text-muted">Social Links</p>
                            <div className="social-icon d-flex flex-column mt-2 mb-5">
                                <a href="https://www.linkedin.com/in/richardli2003/" target="_blank" rel="noreferrer"><img src={navIcon1} alt=""/></a>
                            </div>
                        </Col>
                    </Col>
                    <Col md={6}>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={12} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="2" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Hi!", "I'm Richard Li"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, )

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner position-relative" id="home">
            <Container className='position-absolute top-50 start-50 translate-middle'>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h2><span className='wrap display-2'>{text}</span></h2>
                <p>Software Engineering Student at McMaster University</p>
                <a href="/#about">Learn more <ArrowRightCircle size={25}/></a>
            </Container>
        </section>
    )
}
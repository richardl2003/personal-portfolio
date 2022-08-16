import headerImg from '../assets/img/about.png'

export const About = () => {
    return (
        <section className="about" id="about">
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className='about__me-image'>
                        <img src={headerImg} alt="Head shot" />
                    </div>
                </div>

                <div className='about__content'>
                    <p className='h4 text-left'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                        as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                </div>
            </div>
        </section>
    )
}
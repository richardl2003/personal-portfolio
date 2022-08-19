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
                    <p className='lead text-left'>
                        I'm a second year Software Engineering student attending McMaster University. 
                    </p>
                    <p className='lead text-left'>
                        I love the thrill of learning new technical skills as there are numerous applications that technology can help advance our society. Most recently, I finished my first Co-op working as a 
                        research assistant at McMaster University investigating merge conflicts in Git. You can view a poster on my work <a href='https://drive.google.com/file/d/1S4VcQcO3BuCY1cKwBrjBvTJ8yrBD6efq/view?usp=sharing' target="_blank" rel="noreferrer">here</a>.
                    </p>
                    <p className='lead text-left'>
                        I hope to continue to gain experience in the field of Software Engineering, as I have a keen interest in DevOps, Full Stack Development, and Artifical Intelligence.
                    </p>
                </div>
            </div>
        </section>
    )
}
import "./links.css"
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';


function Links() {
    return(
        <div style={{ height: "100vh;"}}>
            <div className="img-bg">

            </div>
            <div className="curve-dec">

            </div>
            <div className="picture-circle">
                <div className="picture-frame">

                </div>
            </div>
            <div className="content-links">
                <p className="title-name">Boboc Robert</p>
                <p className="function-name">web developer</p>
                <div className="links-list">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/boboc-robert-andrei-a2b21a175/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: 'black', fontSize: '30px' }} /></a>
                        <a href="https://api.whatsapp.com/send?phone=40723344599" target="_blank" rel="noopener noreferrer"><FaWhatsapp style={{ color: 'black', fontSize: '30px' }} /></a>
                        <a href="mailto:andreiboboccibo@gmail.com"><FaEnvelope style={{ color: 'black', fontSize: '30px' }} /></a>
                    </div>
                    <div className="links-padding">
                        <a href="https://generationsalez.com" target="_blank" className="links-p">generationsalez.com</a>
                    </div>
                    <div className="links-padding">
                        <a className="links-p">Portfolio</a>
                    </div>
                    <div className="links-padding">
                        <a className="links-p">Contact Form</a>
                    </div>
                    <div className="links-padding">
                        <a href="https://github.com/Cibuta562" target="_blank" className="links-p">Github</a>
                    </div>
                    <div className="links-padding">
                        <a href="https://linktr.ee/puzzle_studio" target="_blank" className="links-p">Puzzle Studios</a>
                    </div>
                    <div className="credits">
                        <a className="links-down">© generation salez 2024</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links
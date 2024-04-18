import "./links.css"
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';


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
                        <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp style={{ color: 'black', fontSize: '30px' }} /></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: 'black', fontSize: '30px' }} /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: 'black', fontSize: '30px' }} /></a>
                    </div>
                    <div className="links-padding">
                        <a className="links-p">generationsalez.com</a>
                    </div>
                    <div className="links-padding">
                        <a className="links-p">portfolio</a>
                    </div>
                    <div className="links-padding">
                        <a className="links-p">contact form</a>
                    </div>
                    <div className="links-padding">
                        <a className="links-p">github</a>
                    </div>
                    <div className="links-padding">
                        <a className="links-p">roasted.ro</a>
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
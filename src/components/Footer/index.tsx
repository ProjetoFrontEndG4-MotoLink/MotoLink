import { Link } from "react-router-dom"
import { StyledFooter } from "./style"
import logo from "../../assets/images/logo-grey.svg"

export const Footer = () => {
    return (
       <StyledFooter>
                <div className="container container__footer">
                    <div className="footer__column1">
                        <img src={logo}/>
                        <div className="container__infosDevs">
                            <p>Desenvolvido por:</p>
                            <div>
                                <Link className="infosDevs__name" to={"https://www.linkedin.com/in/euisabellebernardes/"} 
                                target="_blank">Isabelle Bernades</Link>
                                <span> | </span>
                                <Link className="infosDevs__name" to={"https://www.linkedin.com/in/amauri-ara%C3%BAjo-8728b3172/"}
                                target="_blank">Amauri Araújo</Link>
                                <span> | </span>
                                <Link className="infosDevs__name" to={"https://www.linkedin.com/in/carloseduardosenna/"}
                                target="_blank">Carlos Senna</Link>
                                <span> | </span>
                                <Link className="infosDevs__name" to={"https://www.linkedin.com/in/pedroandradev/"}
                                target="_blank">Pedro Andrade</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer__column2">
                        <p>MotoLink © Todos os direitos reservados.</p>
                    </div>
                </div>
       </StyledFooter>
    )
}
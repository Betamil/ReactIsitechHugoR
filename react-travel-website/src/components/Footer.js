import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import * as fromEmailAPI from "../api/emails";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emails: [],
    };
  }

  async postEmail() {
    const email = await fromEmailAPI.postEmail(this.state.email);
    const emails = await fromEmailAPI.getEmails();
    this.setState({
      emails: emails,
    });
  }

  async componentDidMount() {
    const emails = await fromEmailAPI.getEmails();
    this.setState({
      emails: emails,
    });
  }

  handleChange(e) {
    e.preventDefault();
    let name = e.target.name;
    this.setState(
      {
        [name]: e.target.value,
      },
      () => console.log("callback", this.state)
    );
    console.log(this.state);
  }

  render() {
    return (
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Rejoignez-nous pour recevoir nos meilleures offres !
          </p>
          <p className="footer-subscription-text">
            Vous pouvez vous désinscrire à tout moment.
          </p>
          <div className="input-areas">
              <input
                className="footer-input"
                name="email"
                type="text"
                placeholder="Email"
                value={this.state.email} onChange={(e) => this.handleChange(e)}
              />
              <Button buttonStyle="btn--outline" onClick={() => this.postEmail()}>S'inscrire</Button>
          </div>
        </section>
        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>BESOINS D'AIDE ?</h2>
              <Link to="/">
                Consultez notre rubrique d’aide, la réponse à votre question s’y
                trouve sûrement
              </Link>
              <Link to="/">Questions / Réponses</Link>
            </div>
            <div class="footer-link-items">
              <h2>SERVICE CLIENT</h2>
              <Link to="/">
                Une question au sujet de votre commande ou de notre enseigne ?
              </Link>
              <Link to="/">Envoyez-nous un message</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>ESPACE ENTREPRISE</h2>
              <Link to="/">
                Vous êtes un professionnel et recherchez une offre adaptée à vos
                besoins ? Découvrez notre espace entreprise
              </Link>
              <Link to="/">Je découvre</Link>
            </div>
          </div>
        </div>
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <Link to="/" className="social-logo">
                Nature&Co
                <i class="fab fa-typo3" />
              </Link>
            </div>
            <small class="website-rights">Nature&Co © 2021</small>
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;

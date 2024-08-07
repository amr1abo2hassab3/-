import "./Footer.css";
import paintKewit from "../../media/https___kuwaitpainter.com_wp-admin_post.php_post37actionedit.jpg.webp";
import CallMe from "../callme/CallMe";
import WhatsApp from "../whatsApp/Whats";

function Footer() {
  return (
    <footer className="foot mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
            <div className="imgFooter text-center">
              <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <h2>صباغ الكويت</h2>
                <h3>صباغ ابو احمد بالكويت</h3>
                <div>
                  <CallMe />
                  <WhatsApp />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
            <div className="imgFooter">
              {/* <img src={paintKewit} alt="صباغ الكويت - افضل صباغ في الكويت - صباغ شاطر " title="معلم صباغ "/> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

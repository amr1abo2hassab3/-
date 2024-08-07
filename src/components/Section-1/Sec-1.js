import "./Sec1.css";
import photo1 from "../../media/https___kuwaitpainter.com_wp-admin_post.php_post37actionedit.jpg.webp";
import CallMe from "../callme/CallMe";
import WhatsApp from "../whatsApp/Whats";

const Sec1 = () => {
  return (
    <section className="Sec1">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="img_sec1">
              <img src={photo1} alt="صباغ بالكويت" />
            </div>
          </div> */}

          <div className=" col-lg-12 col-md-12 col-sm-12">
            <div className="text_sec1">
              <h1 className="mt-3">صباغ بالكويت</h1>
              <CallMe />
              <WhatsApp />
              <ul>
                <li>صباغ في الكويت</li>
                <li> افضل صباغ في الكويت</li>
                <li> صباغ شاطر في الكويت </li>
                <li>فني صباغ</li>
                <li> معلم صباغ بالكويت</li>
                <li> معلم صباغ في الكويت</li>
                <li>أفضل صباغ</li>
                <li>صباغ ممتاز</li>
                <li>صباغ ممتاز بالكويت</li>
                <li>الصباغ بالكويت</li>
                <li>رقم صباغ بالكويت</li>
                <li>أرقام صباغ بالكويت</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;

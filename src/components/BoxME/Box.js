import img1 from "../../media/engineer.36a1a111d803ea6f6a04.png";
import "./Box.css"
import CallMe from "../callme/CallMe";
import WhatsApp from "../whatsApp/Whats";

const Box = () => {
  return (
    <div className="container mt-3">
      <div className="box">
        <h2> صباغ الكويت </h2>
        <article className="info">
          {/* <img src={img1} alt="صباغ بالكويت" title="صباغ رخيص" /> */}
          <h4>
            صباغ الكويت <span className="numerPhobe">96594903036</span> صباغ شاطر
            ورخيص عن تجربة احصل على خصم 50% الان مع <strong>صباغ</strong> ابو
            أحمد
            <h4 className="mt-5">
              رقم صباغ في الكويت <span className="numerPhobe">96594903036</span>
            </h4>
            <CallMe />
            <WhatsApp />
          </h4>
        </article>
      </div>
    </div>
  );
};

export default Box;

import Sec1 from "../components/Section-1/Sec-1";
import Sec2 from "../components/Sec2/Sec2";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> صباغ الكويت - صباغ شاطر ورخيص - 94903036</title>
        <meta
          name="description"
          content=" صباغ الكويت المتخصص الاول في مجال الاصباغ في الكويت يقدم دهان المنازل والشقق بافضل الاسعار داخل دولة الكويت يعتبر من نخبة الصباغين بالكويت فهو صباغ شاطر 
              افضل موقع يقدم رقم صباغ الكويت يقدم لكم خدمات صباغ رخيص بالكويت لدينا معلم صبغ وصباغ شاطر وصباغ ممتاز بالكويت مع فنى تركيب ورق جدران."
        />

        <meta
          name="keywords"
          content="      صباغ الكويت - فني صباغ - صباغ شاطر - معلم صباغ - افضل صباغ - صباغ ممتاز
            - صباغ في الكويت - صباغ رخيص - اصباغ الكويت - أصباغ الكويت - معلم صباغ
            بالكويت - أفضل صباغ بالكويت - صباغ الاندلس - صباغ الفروانيه - صباغ
            الجهراء - فني صباغ بالكويت - مقاول صباغ بالكويت - صباغ شاطر بالكويت -
            صباغ ممتاز الكويت - معلم صباغ في الكويت - صباغ محترف بالكويت
              تركيب ورق جدران - تركيب ورق جدران- صباغ ورق جدران - صباغ السالم - صباغ الصالحيه - صباغ الجابريه - صباغ الخالديه - صباغ الاحمدي - صباغ الفنيطيس-  - صباغ بيوت بالكويت - صباغ منازل بالكويت - صباغ السالم - صباغ الصالحيه - صباغ الجابريه - صباغ الخالديه الكويت - صباغ العادليه بالكويت - صباغ الاحمدي - صباغ مبارك الكبير "
        />
      </Helmet>

      <Sec1 />
      <Sec2 />
    </div>
  );
};

export default Home;

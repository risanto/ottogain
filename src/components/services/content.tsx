import { useTranslation } from "react-i18next";

import excellencesIcon1 from "../../assets/home/excellences-icon1.svg";
import excellencesIcon2 from "../../assets/home/excellences-icon2.svg";
import excellencesIcon3 from "../../assets/home/excellences-icon3.svg";
import excellencesMainImg from "../../assets/home/excellences-main.webp";

import content1Img from "../../assets/services/content-1.webp";
import content2Img from "../../assets/services/content-2.webp";
import content3Img from "../../assets/services/content-3.webp";

import bgServicesContent from "../../assets/services/bg-services-content.svg";

import "../../i18n";

export default function ServiceContent() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center border border-purple-400/50 border-t-2"
      style={{ backgroundImage: `url(${bgServicesContent.src})` }}
    >
      <section className="flex flex-col items-start gap-32 px-6 lg:px-[100px] py-12 lg:py-24 text-white leading-relaxed">
        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <img src={content1Img.src} />

          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[450px]">
              <h2 className="font-semibold text-[2.5rem] text-white lg:text-5xl lg:text-left text-center">
                {t("serviceContent.item1.h2")}
              </h2>

              <p>{t("serviceContent.item1.p")}</p>

              <ul className="pl-5 list-disc">
                <li>{t("serviceContent.item1.ul.1")}</li>
                <li>{t("serviceContent.item1.ul.2")}</li>
                <li>{t("serviceContent.item1.ul.3")}</li>
                <li>{t("serviceContent.item1.ul.4")}</li>
                <li>{t("serviceContent.item1.ul.5")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[490px]">
              <h2 className="font-semibold text-[2.5rem] text-white lg:text-5xl lg:text-left text-center">
                {t("serviceContent.item2.h2")}
              </h2>

              <p>{t("serviceContent.item2.p")}</p>

              <div>
                <p className="font-extrabold">
                  {t("serviceContent.item2.ul1.header")}
                </p>

                <ul className="pl-5 list-disc">
                  <li>{t("serviceContent.item2.ul1.1")}</li>
                  <li>{t("serviceContent.item2.ul1.2")}</li>
                  <li>{t("serviceContent.item2.ul1.3")}</li>
                </ul>
              </div>

              <div>
                <p className="font-extrabold">
                  {t("serviceContent.item2.ul2.header")}
                </p>

                <ul className="pl-5 list-disc">
                  <li>{t("serviceContent.item2.ul2.1")}</li>
                  <li>{t("serviceContent.item2.ul2.2")}</li>
                  <li>{t("serviceContent.item2.ul2.3")}</li>
                  <li>{t("serviceContent.item2.ul2.4")}</li>
                </ul>
              </div>
            </div>
          </div>

          <img src={content2Img.src} />
        </div>

        <div className="gap-7 lg:gap-28 grid lg:grid-cols-2">
          <img src={content3Img.src} />

          <div className="flex justify-center">
            <div className="flex flex-col justify-center gap-10 pl-4 lg:pl-0 max-w-[450px]">
              <div className="bg-[#BB7CE4]/10 px-11 py-10 rounded-3xl">
                <p>{t("serviceContent.item3.p")}</p>

                <ul className="pl-5 list-disc">
                  <li>{t("serviceContent.item3.ul.1")}</li>
                  <li>{t("serviceContent.item3.ul.2")}</li>
                  <li>{t("serviceContent.item3.ul.3")}</li>
                  <li>{t("serviceContent.item3.ul.4")}</li>
                  <li>{t("serviceContent.item3.ul.5")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

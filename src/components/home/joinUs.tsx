import { useTranslation } from "react-i18next";

import joinUsIcon1 from "../../assets/home/join-us-icon1.svg";
import joinUsIcon2 from "../../assets/home/join-us-icon2.svg";
import joinUsIcon3 from "../../assets/home/join-us-icon3.svg";

import "../../i18n";

export function JoinUs() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-start bg-[#1B0A31] px-6 lg:px-[100px] py-12 text-white">
      <div className="flex justify-center lg:justify-start items-center w-full">
        <div className="bg-[#281343] px-5 py-3 rounded-3xl font-semibold text-white text-2xl">
          Join Us!
        </div>
      </div>

      <h2 className="mt-2 max-w-[470px] font-semibold text-[2.5rem] text-white lg:text-5xl lg:text-left text-center">
        {t("joinUs.h2")}
      </h2>

      <div className="flex lg:flex-row flex-col gap-7 lg:gap-28">
        <div className="flex flex-col gap-10 mt-14 pl-4 lg:pl-0">
          <div className="flex items-start gap-6">
            <img src={joinUsIcon1.src} alt="icon" />

            <div>
              <h3 className="font-semibold text-white text-2xl">
                {t("joinUs.referral.h3")}
              </h3>

              <ul>
                <li className="mt-2 ml-5 list-disc">
                  {t("joinUs.referral.p1")}
                </li>
                <li className="mt-2 ml-5 list-disc">
                  {t("joinUs.referral.p2")}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <img src={joinUsIcon2.src} alt="icon" />

            <div>
              <h3 className="font-semibold text-white text-2xl">
                {t("joinUs.representative.h3")}
              </h3>

              <ul>
                <li className="mt-2 ml-5 list-disc">
                  {t("joinUs.representative.p1")}
                </li>
                <li className="mt-2 ml-5 list-disc">
                  {t("joinUs.representative.p2")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6 mt-3 p-4 lg:px-14 lg:py-11 border border-[#BB7CE4] rounded-xl">
          <img src={joinUsIcon3.src} alt="icon" />

          <div>
            <h3 className="font-semibold text-white text-2xl">
              {t("joinUs.career.h3")}
            </h3>

            <p className="mt-4">{t("joinUs.career.p.heading")}</p>
            <ul>
              <li className="mt-2 ml-5 list-disc">{t("joinUs.career.p.1")}</li>
              <li className="mt-2 ml-5 list-disc">{t("joinUs.career.p.2")}</li>
              <li className="mt-2 ml-5 list-disc">{t("joinUs.career.p.3")}</li>
              <li className="mt-2 ml-5 list-disc">{t("joinUs.career.p.4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;

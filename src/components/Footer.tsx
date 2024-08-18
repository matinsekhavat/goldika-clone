import AccessLink from "./footer/AccessLink";
import GovCertificate from "./footer/GovCertificate";

export type AccessLinkProps = {
  title: string;
  href: string;
};

const accessLinkList: AccessLinkProps[][] = [
  [
    { href: "/", title: "صفحه‌ی اصلی" },
    { href: "/", title: "درباره ما" },
    { href: "/", title: "شرایط و قوانین" },
    { href: "/", title: "وبلاگ" },
  ],
  [
    { href: "/", title: "سوالات متداول" },
    { href: "/", title: "ارتباط با ما" },
    { href: "/", title: "چطور به گلدیکا اعتماد کنیم؟" },
  ],
];

function Footer() {
  return (
    <footer className="bg-dark-700 border-t border-dark-400 pt-12 ">
      <div className="container-fluid ">
        {/* uppper side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 ">
          {/* AccessLink */}
          <div className="flex gap-4 justify-around">
            {accessLinkList.map((links, index) => (
              <div key={index} className="space-y-3">
                {links.map((link) => (
                  <AccessLink {...link} key={link.title} />
                ))}
              </div>
            ))}
          </div>
          {/* Certificate Section */}
          <div className="grid grid-cols-3 gap-2">
            <GovCertificate
              width={84}
              height={84}
              src="/union.png"
              alt="
            مجوز اتحادیه کشوری"
            >
              اتحادیه کشوری کسب مجاز
            </GovCertificate>
            <GovCertificate
              width={81.64}
              height={81.64}
              src="/enamad.png"
              alt="مجوز اینماد"
            >
              اتحادیه کشوری کسب مجاز
            </GovCertificate>
            <GovCertificate
              width={81.64}
              height={81.64}
              src="/samandehi.png"
              alt="مجوز ساماندهی"
            >
              نشان ملی ثبت samandehi.ir
            </GovCertificate>
          </div>
        </div>
        {/* MiddleSection - contact us */}
        <div className="my-14 md:flex md:items-start md:justify-between md:gap-8">
          <div className="sm:flex">
            <p className="text-stone-400"> آدرس دفتر فنی:&nbsp; </p>

            <address className="not-italic mt-">
              تهران، دانشگاه صنعتی شریف، مجتمع نوآوری شهید ستاری، طبقه پنجم،
              واحد ۵۲۳
            </address>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <span className="text-stone-400">تلفن: </span>
            <span> ۰۲۱-۹۱۰ ۹۶ ۱۹۶ </span>
            {/* <div className="flex">social</div> */}
          </div>
        </div>

        <p className="text-center  p-3 font-light text-sm text-gray-400">
          کلیه حقوق برای گلدیکا محفوظ است🧡
        </p>
      </div>
    </footer>
  );
}

export default Footer;

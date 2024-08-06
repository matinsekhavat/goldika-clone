import BoxCalculator from "../components/main-hero/BoxCalculator";
import PhoneNumberInput from "../components/main-hero/PhoneNumberInput";

function HomePage() {
  return (
    <div className="my-24 container-fluid">
      {/* Hero Section */}

      <div className="grid grid-cols-1 gap-y-4 gap-x-12 min-[880px]:grid-cols-[1.3fr_1fr] min-[880px]:items-end">
        {/* content */}
        <div>
          <div className="text-center space-y-4 md:text-right mb-4">
            <h1 className="text-lg md:text-2xl">
              <span className="text-4xl text-yellow-500 md:font-bold md:text-5xl">
                گلدیکا
              </span>{" "}
              | بازار امن طلا
            </h1>
            {/* badge */}
            <div className="flex items-center gap-4 text-[13px]">
              <span className="p-1 rounded-xl text-yellow-500 border border-yellow-500 bg-yellow-500/10">
                بدون نیاز به مراجعه حضوری
              </span>
              <span className="p-1 rounded-xl text-yellow-500 border border-yellow-500 bg-yellow-500/10">
                بازار ۲۴ ساعته
              </span>
            </div>
          </div>
          {/* middle text content */}
          <div className="">
            <p className="hidden sm:block sm:text-xl md:text-2xl">
              خرید و فروش آنلاین طلای آب شده (بدون اجرت)
            </p>
            <p className="text-stone-400 my-2">
              خرید طلای آب شده به صورت رسمی و تضمین‌شده و با هر میزان سرمایه
            </p>
          </div>
          {/* Phone number */}
          <div className=" my-8 text-center md:text-right space-y-4 max-w-96 mx-auto md:mx-0 md:max-w-none ">
            <PhoneNumberInput />
            <p className="text-stone-400 text-[14px]">
              در کمتر از دو دقیقه ثبت‌نام و شروع به معامله کنید.
            </p>
          </div>
        </div>

        {/* Live Box */}
        <div className="max-w-[340px] md:max-w-[431px] w-full mx-auto ">
          <BoxCalculator />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

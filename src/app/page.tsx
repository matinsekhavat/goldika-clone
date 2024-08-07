import BoxCalculator from "../components/main-hero/BoxCalculator";
import ButtonBadge from "../components/main-hero/ButtonBadge";
import PhoneNumberInput from "../components/main-hero/PhoneNumberInput";

function HomePage() {
  return (
    <div className="my-24 container-fluid">
      {/* Hero Section */}

      <div className="grid grid-cols-1 gap-y-4 gap-x-20  min-[880px]:grid-cols-[1.2fr_1fr] min-[880px]:items-end">
        {/* content */}
        <div className="">
          <div className="text-center space-y-4 min-[880px]:text-right mb-4">
            <h1 className="text-lg md:text-2xl">
              <span className="text-4xl text-yellow-500 md:font-bold md:text-5xl">
                گلدیکا
              </span>{" "}
              | بازار امن طلا
            </h1>
            {/* badge */}
            <div className="flex items-center gap-4 justify-center min-[880px]:justify-normal flex-wrap text-[13px]">
              <ButtonBadge>بدون نیاز به مراجعه حضوری</ButtonBadge>
              <ButtonBadge>بازار ۲۴ ساعته</ButtonBadge>
              <ButtonBadge>امکان تحویل فیزیکی</ButtonBadge>
            </div>
          </div>
          {/* middle text content */}
          <div className="text-center min-[880px]:text-right">
            <p className="hidden sm:block sm:text-xl md:text-2xl">
              خرید و فروش آنلاین طلای آب شده (بدون اجرت)
            </p>
            <p className="text-stone-400 my-2">
              خرید طلای آب شده به صورت رسمی و تضمین‌شده و با هر میزان سرمایه
            </p>
          </div>
          {/* Phone number */}
          <div className=" my-8 text-center min-[880px]:text-right space-y-4 max-w-96 mx-auto min-[880px]:mx-0 min-[880px]:max-w-none ">
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

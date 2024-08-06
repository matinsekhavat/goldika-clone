import BoxCalculator from "../components/main-hero/BoxCalculator";
import PhoneNumberInput from "../components/main-hero/PhoneNumberInput";

function HomePage() {
  return (
    <div className="my-24 container-fluid">
      {/* Hero Section */}

      <div className="grid grid-cols-1 gap-y-4 gap-x-12 min-[880px]:grid-cols-[1.3fr_1fr] min-[880px]:items-end">
        {/* content */}
        <div>
          <div className="text-center space-y-4 md:text-right">
            <h1 className="text-lg md:text-2xl">
              <span className="text-4xl text-yellow-500 md:font-bold md:text-5xl">
                گلدیکا
              </span>{" "}
              | بازار امن طلا
            </h1>
            <p className="text-stone-400 text-lg">
              خرید طلای آب شده به صورت رسمی و تضمین‌شده و با هر میزان سرمایه
            </p>
          </div>
          {/* Phone number */}
          <div className=" my-8 text-center space-y-4 max-w-96 mx-auto md:mx-0 md:max-w-none ">
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

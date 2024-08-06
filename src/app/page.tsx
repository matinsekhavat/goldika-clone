import BoxCalculator from "../components/main-hero/BoxCalculator";
import PhoneNumberInput from "../components/main-hero/PhoneNumberInput";

function HomePage() {
  return (
    <div className="my-20 container-fluid">
      {/* Hero Section */}

      <div className="grid grid-cols-1 gap-y-4 min-[880px]:grid-cols-2">
        {/* content */}
        <div>
          <div className="text-center space-y-4">
            <h1 className="text-lg">
              <span className="text-4xl text-yellow-500">گلدیکا</span> | بازار
              امن طلا
            </h1>
            <p className="text-stone-400 text-lg">
              خرید طلای آب شده به صورت رسمی و تضمین‌شده و با هر میزان سرمایه
            </p>
          </div>
          {/* Phone number */}
          <div className=" my-8 text-center space-y-4 max-w-96 mx-auto">
            <PhoneNumberInput />
            <p className="text-stone-400 text-[14px]">
              در کمتر از دو دقیقه ثبت‌نام و شروع به معامله کنید.
            </p>
          </div>
        </div>

        {/* Live Box */}
        <div className="max-w-[340px] w-full mx-auto">
          <BoxCalculator />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

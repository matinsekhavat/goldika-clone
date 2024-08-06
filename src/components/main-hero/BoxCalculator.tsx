import Logo from "../Logo";

function BoxCalculator() {
  return (
    <div className=" p-3 rounded-xl bg-dark-700 min-h-[387px] flex flex-col justify-evenly">
      {/* header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex flex-col gap-2">
          <p>قیمت خرید</p>
          <span className="text-yellow-600 shadow-sm">3,558,048تومان</span>
        </div>
        <Logo />
        <div className="flex flex-col gap-2">
          <p>قیمت فروش</p>
          <span className="text-yellow-600 te">3,487,048تومان</span>
        </div>
      </div>
      {/* middle */}
      <div className="bg-dark-600 rounded-xl ">
        <div className="flex items-center">
          <button className="bg-transparent p-4 flex-1 border-b border-yellow-500 ">
            خرید
          </button>
          <button className="bg-transparent p-4 flex-1  border-b-2 border-yellow-500">
            فروش
          </button>
        </div>
        <div className="p-2 space-y-4 my-3 ">
          <div className="flex items-stretch gap-2  border rounded-lg border-stone-500 bg-dark-900">
            <input
              type="text"
              className="w-0 bg-transparent outline-none border-none flex-1 p-2"
            />
            <p className="self-center p-2 ">تومان</p>
          </div>
          <div className="flex items-stretch gap-2  border rounded-lg border-stone-500 bg-dark-900">
            <input
              type="text"
              className="w-0 bg-transparent outline-none border-none flex-1 p-2"
            />
            <p className="self-center p-2 ">گرم</p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <button className=" border-2 rounded-md p-2 mt-auto block w-full border-yellow-600">
          خرید
        </button>
      </div>
    </div>
  );
}

export default BoxCalculator;

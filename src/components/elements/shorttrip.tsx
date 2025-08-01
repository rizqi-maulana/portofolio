export default function ShortTrip() {
  return (
    <div className="mt-5 w-[235px] md:w-max h-max">
      <div className="flex items-center w-full">
        <div className="h-[10px] w-[10px] bg-[#767580] mr-1 rounded-full" />
        <div className="text-wrap w-[300px]">
          <h2 className="text-xs md:text-sm text-[#767580]">2021-2022</h2>
          <p className="text-xs md:text-sm">
            Junior high school students start learning programming from Java,
            Javascript and Lua.
          </p>
        </div>
      </div>

      <div className="h-[30px] md:h-[50px] w-[2px] bg-[#767580] relative top-[-10px] md:top-[-5px] ml-[2px] md:ml-1" />
      <div className="flex items-center w-full">
        <div className="h-[10px] w-[10px] bg-[#767580] mr-1 rounded-full" />
        <div className="text-wrap w-[300px]">
          <h2 className="text-xs md:text-sm text-[#767580]">
            Jul 2022 - May 2025
          </h2>
          <p className="text-xs md:text-sm">
            started focusing on web development.
          </p>
        </div>
      </div>
    </div>
  );
}

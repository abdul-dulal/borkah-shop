function Mainmodal({ children, shown, close }) {
  return shown ? (
    <div className=" ">
      <div
        className=" origin-top-right lg:right-32 md:right-12 right-5 absolute top-28 left-0 bottom-0 z-[9999] flex justify-end rounded-md   "
        onClick={() => {
          close();
        }}
      >
        <div
          className="overflow-y-scroll h-96 w-[350px] bg-white p-6 z-[9999]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </div>
  ) : null;
}
export default Mainmodal;

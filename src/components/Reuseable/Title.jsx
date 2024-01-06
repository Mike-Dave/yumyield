function Title({ titleText }) {
  return (
    <div className="p-4 mt-10 mb-5">
      <h1 className="font-ptSerif uppercase text-gray-800 font-bold text-xl tracking-widest">
        {titleText}
      </h1>
      <hr className="border-t-4 mt-1 border-red-400 w-[3rem]" />
    </div>
  );
}

export default Title;

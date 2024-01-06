function ErrorMessage({ errorText }) {
  return (
    <>
      <p className="text-red-400 bg-gray-800 p-4 font-ptSerif">{errorText}</p>
    </>
  );
}

export default ErrorMessage;

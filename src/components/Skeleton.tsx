const Skeleton = () => {
  return (
    <div className="rounded-lg text-white bg-gray-200 mx-auto p-4 w-full h-[12rem] shadow-md animate-pulse flex flex-col gap-4">
      <div className="bg-gray-300 h-6 w-16 rounded-lg"></div>
      <div className="bg-gray-300 h-6 w-8 rounded-lg"></div>
      <div className="bg-gray-300 h-6 rounded-lg"></div>
    </div>
  );
};

export default Skeleton;

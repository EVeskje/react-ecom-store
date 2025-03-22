export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      <p className="text-xl font-semibold text-gray-600">Loading...</p>
    </div>
  );
};
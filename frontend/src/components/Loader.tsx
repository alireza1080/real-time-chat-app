import { LoaderOne } from "./ui/loader";

const Loader = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="scale-110 sm:scale-125 md:scale-150 lg:scale-200">
        <LoaderOne />
      </div>
    </div>
  );
};

export default Loader;

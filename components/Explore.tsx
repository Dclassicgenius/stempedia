import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

const Explore = () => {
  return (
    <div className="flex justify-center mt-5">
      <Link
        href="/dashboard"
        className="text-6xl font-medium bg-green-500 px-10 py-5 rounded-full hover:bg-green-600 text-white flex gap-4  hover:scale-110 transition-all"
      >
        <p>Explore</p> <IoIosArrowDropright />
      </Link>
    </div>
  );
};

export default Explore;

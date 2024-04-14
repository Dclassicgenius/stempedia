import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-slate-900 p-7 text-gray-50 fixed w-full top-0 z-10">
      <div className="flex justify-between">
        <Link href="/">
          <p className="text-3xl font-bold">STEMPEDIA</p>
        </Link>
        <ul className="flex gap-4 text-lg font-medium">
          <li>Home</li>
          <li>Blog</li>
          <li>Courses</li>
          <li>Simulations</li>
          <li>Resources</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

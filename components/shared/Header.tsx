import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex first-line:items-center justify-between">
        <Link href="/" className="flex">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={38}
            height={38}
          />
          <p className="h5-bold ml-1">Event Radar</p>
        </Link>

        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex flex-col flex-center flex-between gap-4 text-center sm:flex-row">
        <Link href="/" className="flex">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={38}
            height={38}
          />
          <p className="h5-bold ml-1">Event Radar</p>
        </Link>
        <p>2023 Event Radar. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

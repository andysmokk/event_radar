import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

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

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;

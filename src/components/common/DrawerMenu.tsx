import Image from "next/image";

const DrawerMenu = ({ toggle }: { toggle: () => void }) => {
  return (
    <div>
      <div className=" relative z-50">
        <nav className="flex flex-col  py-6 px-6 bg-background h-screen">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image src="/img/logo.png" alt="" width={100} height={100} />
            </a>
            <button onClick={toggle}>
              <svg
                className="h-6 w-6 text-foreground cursor-pointer hover:animate-pulse"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="h-full flex flex-col justify-between">
            <ul className="flex flex-col gap-3">
              <li className="uppercase font-medium">
                <a onClick={toggle} href="#our-vision" className="hover:underline">
                  OUR VISION
                </a>
              </li>
              <li className="uppercase font-medium">
                <a onClick={toggle} href="#the-product" className="hover:underline">
                  THE PRODUCT
                </a>
              </li>
              <li className="uppercase font-medium">
                <a onClick={toggle} href="#why-spredai" className="hover:underline">
                  WHY $PREDAI
                </a>
              </li>
              <li className="uppercase font-medium">
                <a onClick={toggle} href="#roadmap" className="hover:underline">
                  ROADMAP
                </a>
              </li>
              <li className="uppercase font-medium">
                <a href="" className="hover:underline">
                  INVESTOR INQUIERIES
                </a>
              </li>
              <li className="uppercase font-medium">
                <a href="" className="hover:underline">
                  X / TWITTER
                </a>
              </li>
              <li className="uppercase font-medium">
                <a href="" className="hover:underline">
                  TELEGRAM
                </a>
              </li>
            </ul>
            <div className="pb-5">
              <p className="text-center font-medium">© PREDICTAI 2024</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DrawerMenu;

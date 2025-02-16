import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="flex gap-2 items-center self-stretch border-b p-3 font-[family-name:var(--font-geist-sans)] shadow-sm"
      style={{ direction: "rtl" }}
    >
      <Image
        src={
          "https://rekaz.io/home/wp-content/uploads/2023/11/Rekaz-logo-arabic.svg"
        }
        priority
        alt="Logo"
        width={100}
        height={100}
      />
      <p className="text-black/20">|</p>
      <h1>Mini Website Builder</h1>
    </nav>
  );
};
export default Navbar;

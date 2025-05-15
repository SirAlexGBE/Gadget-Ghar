import appleLogo from "../../assets/apple-logo.png";
import sonyLogo from "../../assets/sony-logo.png";
import samsungLogo from "../../assets/samsung-logo.png";
import canonLogo from "../../assets/Cannon-logo.png";
import huaweiLogo from "../../assets/huawei-logo.png";
import lenovoLogo from "../../assets/Lenevo-logo.png";

export default function Brands() {
  const brands = [
    {name: "Samsung", logo: samsungLogo},
    {name: "Apple", logo: appleLogo},
    {name: "Sony", logo: sonyLogo},
    {name: "Huawei", logo: huaweiLogo},
    {name: "Canon", logo: canonLogo},
    {name: "Lenovo", logo: lenovoLogo},
  ];

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">Top Brands</h2>
      </div>

      <div className="flex flex-wrap justify-evenly items-center gap-y-10 mt-12">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center px-5 justify-evenly w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
            <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-12 max-w-full object-contain hover:opacity-80 transition-opacity cursor-pointer" />
          </div>
        ))}
      </div>
    </section>
  );
}

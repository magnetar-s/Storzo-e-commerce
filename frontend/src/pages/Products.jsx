import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuReceiptIndianRupee } from "react-icons/lu";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const [descLength, setDescLength] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setDescLength(10);
      } else {
        setDescLength(20);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderproduct = products.map((product) => {
    return (
      <div
        className="cursor-pointer w-40 h-60 xl:w-56 xl:h-[350px] flex flex-col items-center justify-center overflow-x-hidden border-[2px] rounded border-[#F1F2F4] p-2"
        key={product.id}
      >
        <Link to={`/product/${product.id}`}>
          <img
            className="w-28 h-28 xl:w-48 xl:h-48 xl:mb-3 object-contain hover:scale-105 transition-transform duration-300"
            src={product.image}
            alt=""
          />
          <h1 className="w-full text-center break-words font-semibold text-sm xl:text-lg">
            {product.title.slice(0, descLength)}
          </h1>
          <h1 className="w-full break-words text-center text-sm xl:text-[16px]">
            {product.description.slice(0, descLength)}...
          </h1>
        </Link>
        <div className="w-full flex items-end justify-between pt-3 px-2">
          <p className="font-semibold xl:font-bold text-[16px] xl:text-xl">
            <LuReceiptIndianRupee />{product.price}*
          </p>
          <button className="cursor-pointer flex items-center justify-center py-2 px-4 bg-[#2A55E5] hover:bg-[#2a56e5e8] text-[#FFFFFF] rounded text-[16px] xl:text-2xl">
            <FaCartArrowDown />
          </button>
        </div>
      </div>
    );
  });

  return products.length > 0 ? (
    <div className="p-2 bg-[#FFFFFF] w-full h-full flex flex-wrap items-center justify-around xl:items-start xl:justify-start gap-3 xl:gap-6 overflow-x-hidden mt-[105px] mb-20 rounded">
      {renderproduct}
    </div>
  ) : (
    "Loading..."
  );
};

export default Products;

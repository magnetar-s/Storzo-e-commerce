import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TiFlash } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import { LuReceiptIndianRupee } from "react-icons/lu";
import { useForm } from "react-hook-form";
import {
  asyncdeleteproduct,
  asyncupdateproduct,
} from "../../store/actions/productActions";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      company: product?.company,
      category: product?.category,
      description: product?.description,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/products");
  };

  return product ? (
    <>
      <div className="mt-[110px] w-full md:px-20 py-6 md:py-10 flex md:items-start items-center justify-center flex-col md:flex-row bg-[#FFFFFF]">
        <div className="w-full md:w-[40%] flex items-center justify-center flex-col md:min-h-[400px] object-contain">
          <img className="w-80" src={product.image} alt="" />
          <div className="flex items-center justify-center w-full xl:w-[60%]  gap-5">
            <button className="w-full h-[50px] flex items-center justify-center xl:text-xl rounded mt-10 cursor-pointer text-[#FFFFFF] font-bold bg-[#FB641B] active:bg-[#fb661beb]">
              <TiFlash />
              Buy Now
            </button>
            <button className="w-full h-[50px] flex items-center justify-center xl:text-xl rounded mt-10 cursor-pointer text-[#FFFFFF] font-bold bg-[#FF9F00] active:bg-[#ff9d00ea]">
              <FaCartArrowDown />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col items-start justify-center mt-5 pl-10 break-words">
          <h1 className="w-full font-semibold text-xl xl:text-[26px] break-words">
            {product.title}
          </h1>
          <p className="w-full font-normal break-words xl:mt-3">
            Brand : {product.company}
          </p>
          <p className="w-full font-normal break-words xl:mt-1">
            Category : {product.category}
          </p>
          <h1 className="flex items-center justify-center mt-2 gap-2 font-semibold text-2xl xl:text-3xl xl:mt-6">
            <LuReceiptIndianRupee />
            {product.price}
          </h1>
          <p className="w-full font-normal break-words xl:mt-6">
            {product.description}
          </p>
        </div>
      </div>

      {/* ////////////////////////////// */}
      {users && users?.isAdmin && (
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="flex items-center justify-center w-full my-15 flex-wrap"
        >
          {/* input....... */}
          <div className="flex p-10 w-full lg:w-1/2 bg-[#FFFFFF] items-start justify-start flex-col">
            {/* image */}
            <input
              {...register("image")}
              className="w-full outline-none border-b p-2 text-md placeholder:text-[#878787]"
              placeholder="Image URL"
              type="url"
            />
            {/* title */}
            <input
              {...register("title")}
              className="w-full outline-none border-b p-2 text-md placeholder:text-[#878787]"
              type="text"
              placeholder="Title"
            />
            {/* price */}
            <input
              {...register("price")}
              className="w-full outline-none border-b p-2 text-md placeholder:text-[#878787]"
              type="number"
              placeholder="Amount"
            />
            {/* company */}
            <input
              {...register("company")}
              className="w-full outline-none border-b p-2 text-md placeholder:text-[#878787]"
              type="text"
              placeholder="Company"
            />
            {/* category */}
            <input
              {...register("category")}
              className="w-full outline-none border-b p-2 text-md placeholder:text-[#878787]"
              type="text"
              placeholder="Category"
            />
            {/* description */}
            <textarea
              {...register("description")}
              className="w-full outline-none border-b p-2 text-md placeholder:text-[#878787]"
              placeholder="Description"
            ></textarea>

            <button className="w-full h-[50px] rounded mt-10 cursor-pointer text-[#FFFFFF] font-bold bg-[#2874F0] active:bg-[#2875f0e9]">
              Update Product
            </button>

            <button
              onClick={DeleteHandler}
              className="w-full h-[50px] rounded mt-10 cursor-pointer text-[#FFFFFF] font-bold bg-[#FF0029] active:bg-[#ff002be4]"
            >
              Delete Product
            </button>
          </div>
        </form>
      )}
    </>
  ) : (
    "Loading"
  );
};

export default ProductDetail;

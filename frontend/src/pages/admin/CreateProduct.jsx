import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { asynccreateproduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    product.image = url;
    console.log(product);
    navigate("/products")
    dispatch(asynccreateproduct(product));

    reset();
    setUrl("");
    setError(false);
  };

  const handleChange = (e) => {
    setUrl(e.target.value.trim());
  };

  return (
    <form
      onSubmit={handleSubmit(CreateProductHandler)}
      className="flex items-center justify-center mt-[100px]"
    >
      <div className="flex  w-[90%] h-auto xl:w-[55%]">
        {/* image preview */}
        <div className="hidden md:block items-center justify-center  bg-[#2874F0] w-[40%] h-auto p-5 text-[#FFFFFF]">
          <div className="relative flex h-full w-full items-center justify-center flex-col">
            <p className="absolute left-50% bottom-50% flex items-center justify-center flex-col text-blue-200"><CiImageOn className="text-4xl" /> Image Preview</p>
            {url && (
              <div className="bg-[#2874F0] z-[1] flex items-center justify-center w-full h-full flex-col">
                <img
                  src={url}
                  alt="Preview"
                  onError={() => setError(true)}
                  key={url}
                  onLoad={() => setError(false)}
                  className="z-[1]"
                />

                {error && (
                  <p className="text-red-200 text-center">
                    ⚠️ Could not load image. Check the URL.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* input....... */}
        <div className="flex  p-10 bg-[#FFFFFF] items-start justify-start flex-col w-full h-auto xl:w-[60%]">
          {/* image */}
          <input
            {...register("image")}
            className="w-full outline-none border-b p-2 text-md placeholder:text-[#878787]"
            placeholder="Image URL"
            type="url"
            value={url}
            onChange={handleChange}
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
          
          <small className="text-[#878787] mt-8">
            By creating a new product,, you agree to Storzo's{" "}
            <a href="#" className="text-[#2874F2]">
              Terms of Use{" "}
            </a>
            and{" "}
            <a href="#" className="text-[#2874F2]">
              Privacy Policy.
            </a>
          </small>
          <button className="w-full h-[50px] rounded mt-10 cursor-pointer text-[#FFFFFF] font-bold bg-[#FB641B] active:bg-[#fb661beb]">
            Create Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateProduct;

import { FC, useEffect, useState } from "react";
import scss from "./AdminPage.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IForm {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}
const API = import.meta.env.VITE_API;

const AdminPage: FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState<IForm>();
  console.log(product);
  //ozgortush krk
  const readProduct = async () => {
    try {
      let { data } = await axios.get(API);
      setProduct(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createProduct: SubmitHandler<IForm> = async (data) => {
    const obj = {
      name: data.name,
      price: data.price,
      image: data.image,
      description: data.description,
      category: data.category,
    };
    try {
      await axios.post(API, obj);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <section className={scss.AdminPage}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.content}>
            <form
              className={scss.form}
              onSubmit={() => handleSubmit(createProduct)}
              action=""
            >
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
              />
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="price"
              />
              <input
                {...register("image", { required: true })}
                type="text"
                placeholder="image"
              />
              <input
                {...register("description", { required: true })}
                type="text"
                placeholder="description"
              />
              <select
                className={scss.select}
                {...register("category", { required: true })}
                name=""
                id=""
              >
                <option value="Hot coffee">Hot coffee</option>
                <option value="Cold coffe">Cold coffe</option>
                <option value="Hot tea">Hot tea</option>
                <option value="Cold tea">Cold tea</option>
                <option value="Refreshers ">Cold tea</option>
              </select>
              <button className={scss.button} type="submit">
                Create
              </button>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;

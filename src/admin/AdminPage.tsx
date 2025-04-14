import { FC, useState } from "react";
import scss from "./AdminPage.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IForm {
  name: string;
  price: number;
  photoURL: string;
  description: string;
  category: string;
  calories: string;
}

const API = import.meta.env.VITE_API;

const AdminPage: FC = () => {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const sendData: SubmitHandler<IForm> = async (data) => {
    const newObj = {
      name: data.name,
      price: data.price,
      photoURL: data.photoURL,
      description: data.description,
      category: data.category,
      calories: data.calories,
    };
    try {
      await axios.post(API, newObj);
      reset();
      setPreviewImage(null);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const handleImagePreview = (url: string) => {
    setPreviewImage(url);
  };

  return (
    <section className={scss.AdminPage}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1 className={scss.title}>Add a Starbucks Product</h1>
          <form onSubmit={handleSubmit(sendData)} className={scss.form}>
            <div className={scss.formSection}>
              <h2>Product Details</h2>
              <div className={scss.inputGroup}>
                <label htmlFor="name">Product Name</label>
                <input
                  {...register("name", {
                    required: "Product name is required",
                  })}
                  type="text"
                  id="name"
                  placeholder="e.g. Caramel Macchiato"
                  className={errors.name ? scss.errorInput : ""}
                />
              </div>
              <div className={scss.inputGroup}>
                <label htmlFor="price">Price ($)</label>
                <input
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 0, message: "Price cannot be negative" },
                  })}
                  type="number"
                  id="price"
                  placeholder="e.g. 5.95"
                  step="0.01"
                  className={errors.price ? scss.errorInput : ""}
                />
              </div>
              <div className={scss.inputGroup}>
                <label htmlFor="description">Description</label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  id="description"
                  placeholder="e.g. Espresso with caramel drizzle..."
                  className={errors.description ? scss.errorInput : ""}
                />
              </div>
            </div>

            <div className={scss.formSection}>
              <h2>Media</h2>
              <div className={scss.inputGroup}>
                <label htmlFor="photoURL">Photo URL</label>
                <input
                  {...register("photoURL", {
                    required: "Photo URL is required",
                    pattern: {
                      value: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/i,
                      message: "Enter a valid image URL",
                    },
                  })}
                  type="text"
                  id="photoURL"
                  placeholder="e.g. https://starbucks.com/image.png"
                  onChange={(e) => handleImagePreview(e.target.value)}
                  className={errors.photoURL ? scss.errorInput : ""}
                />
                {previewImage && (
                  <div className={scss.imagePreview}>
                    <img
                      src={previewImage}
                      alt="Product preview"
                      onError={() => setPreviewImage(null)}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className={scss.formSection}>
              <h2>Nutrition & Category</h2>
              <div className={scss.inputGroup}>
                <label htmlFor="category">Category</label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  id="category"
                  className={errors.category ? scss.errorInput : ""}
                >
                  <option value="">Select Category</option>
                  <option value="Hot Coffee">Hot Coffee</option>
                  <option value="Cold Coffee">Cold Coffee</option>
                  <option value="Hot Tea">Hot Tea</option>
                  <option value="Cold Tea">Cold Tea</option>
                  <option value="Refreshers">Refreshers</option>
                  <option value="Frappuccino">Frappuccino</option>
                  <option value="Blended Beverage">Blended Beverage</option>
                  <option value="Iced Energy">Iced Energy</option>
                  <option value="Hot Chocolate">Hot Chocolate</option>
                  <option value="Lemonade & More">Lemonade & More</option>
                  <option value="Bottled Beverages">Bottled Beverages</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Treats">Treats</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Snacks">Snacks</option>
                </select>
              </div>
              <div className={scss.inputGroup}>
                <label htmlFor="calories">Calories</label>
                <select
                  {...register("calories", {
                    required: "Calories is required",
                  })}
                  id="calories"
                  className={errors.calories ? scss.errorInput : ""}
                >
                  <option value="">Select Calories</option>
                  <option value="36">36</option>
                  <option value="38">38</option>
                  <option value="40">40</option>
                  <option value="42">42</option>
                  <option value="44">44</option>
                </select>
              </div>
            </div>

            <div className={scss.ctaButtons}>
              <button type="submit" className={scss.ctaButton}>
                Create Product
              </button>
              <button
                type="button"
                className={scss.secondaryButton}
                onClick={() => {
                  reset();
                  setPreviewImage(null);
                }}
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;

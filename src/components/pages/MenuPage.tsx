import { FC, useEffect, useState } from "react";
import styles from "./MenuPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import { oneProduct, setCategory, setData } from "../../store/slice/DataSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../loaders/Loader";

const categories = [
  {
    type: "Drinks",
    items: [
      "Hot Coffee",
      "Cold Coffee",
      "Hot Tea",
      "Cold Tea",
      "Refreshers",
      "Frappuccino Blended Beverage",
      "Iced Energy",
      "Hot Chocolate, Lemonade & More",
      "Bottled Beverages",
    ],
  },
  {
    type: "Food",
    items: ["Breakfast", "Bakery", "Treats", "Lunch", "Snacks"],
  },
];

const API = import.meta.env.VITE_API;
const MenuPage: FC = () => {
  const { data, searchValue } = useAppSelector((store) => store.dataProduct);
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState("Hot Coffee");
  const [localSearchValue, setLocalSearchValue] = useState("");
  const navigate = useNavigate();

  async function readProduct() {
    try {
      const { data } = await axios.get(API);
      dispatch(setData(data.data));
    } catch (error) {
      console.log(error);
    }
  }

  function handleProduct(category: string) {
    dispatch(setCategory(category));
  }

  useEffect(() => {
    readProduct();
  }, []);

  const filteredData = data.filter((item) => {
    const categoryMatch =
      item.category.toLowerCase().trim() ===
      selectedCategory.toLowerCase().trim();
    if (localSearchValue) {
      return (
        categoryMatch &&
        (item.name.toLowerCase().includes(localSearchValue.toLowerCase()) ||
          item.price.toString().includes(localSearchValue))
      );
    }

    return categoryMatch;
  });

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setLocalSearchValue(e.target.value);
  }

  //!
  function filterSearch(value: string) {
    let result = data.filter(
      (item) =>
        item.name.toLowerCase().trim().includes(value.toLowerCase().trim()) ||
        item.price.toString().includes(value)
    );
    dispatch(setData(result));
    if (!value) {
      readProduct();
    }
  }

  async function getOneProduct(id: number) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch(oneProduct(data));
      navigate(`/details/${data.name}`);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    filterSearch(searchValue);
  }, [searchValue]);

  return (
    <section className={styles.menuPage}>
      <div className="container">
        <div className={styles.content}>
          <aside className={styles.category}>
            {categories.map((group) => (
              <div key={group.type}>
                <h5>{group.type}</h5>
                {group.items.map((item) => (
                  <div className={styles.p} key={item}>
                    <p onClick={() => setSelectedCategory(item)}>{item}</p>
                  </div>
                ))}
              </div>
            ))}
          </aside>

          <div className={styles.products}>
            <div className={styles.headerSection}>
              <p>
                Menu/<span>{selectedCategory}</span>
              </p>
              <div className={styles.searchFilter}>
                <input
                  type="text"
                  placeholder="Search in this category..."
                  value={localSearchValue}
                  onChange={handleSearch}
                  className={styles.searchInput}
                />
              </div>
            </div>
            <h2 className={styles.categoryTitle}>{selectedCategory}</h2>
            <hr />
            <div className={styles.productGrid}>
              {filteredData.length > 0 ? (
                filteredData.map((product) => (
                  <div
                    onClick={() => {
                      getOneProduct(product._id);
                      handleProduct(product.category);
                    }}
                    key={product._id}
                    className={styles.productCard}
                  >
                    <div className={styles.productImage}>
                      <img src={product.photoURL} alt={product.name} />
                    </div>
                    <h2 className={styles.productName}>{product.name}</h2>
                  </div>
                ))
              ) : (
                <div className={styles.noResults}>
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;

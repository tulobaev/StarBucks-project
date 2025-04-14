import { FC, useState } from "react";
import styles from "./MenuPage.module.scss";

const mockProducts = [
  {
    id: 1,
    name: "Caffe Americano",
    price: "$3.15",
    category: "Cold Coffee",
    image:
      "https://media.xenial.com/company_63ddbd701aaf62eaecef230d/product-images/54905-IcedOatHoney_300px.png",
  },
  {
    id: 2,
    name: "Cappuccino",
    category: "Hot Tea",
    price: "$4.25",
    image:
      "https://media.xenial.com/company_63ddbd701aaf62eaecef230d/product-images/54905-IcedOatHoney_300px.png",
  },
  {
    id: 1,
    name: "Caffe Americano",
    category: "Refreshers",
    price: "$3.15",
    image:
      "https://media.xenial.com/company_63ddbd701aaf62eaecef230d/product-images/54905-IcedOatHoney_300px.png",
  },
];

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

const MenuPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hot Coffee");

  const filteredData = mockProducts.filter(
    (item) =>
      item.category.toLowerCase().trim() ===
      selectedCategory.toLowerCase().trim()
  );

  return (
    <section className={styles.menuPage}>
      <div className="container">
        <div className={styles.content}>
          <aside className={styles.category}>
            {categories.map((group) => (
              <div key={group.type}>
                <h5>{group.type}</h5>
                {group.items.map((item) => (
                  <div className={styles.p}>
                    <p key={item} onClick={() => setSelectedCategory(item)}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </aside>

          <div className={styles.products}>
            <p>
              Menu/<span>{selectedCategory}</span>
            </p>
            <h2 className={styles.categoryTitle}>{selectedCategory}</h2>
            <hr />
            <div className={styles.productGrid}>
              {filteredData.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h2 className={styles.productName}>{product.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;

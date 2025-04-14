import { FC } from "react";
import scss from "./AckToStarBucksPage.module.scss";

const AckToStarBucksPage: FC = () => {
  return (
    <div className={scss.layout}>
      <section className={scss.AckToStarBucksPage}>
        <div className="container">
          <div className={scss.content}>
            <section className={scss.main}>
              <div className={scss.title}>
                <h1>Starting today, there are more reasons to stay awhile</h1>
                <p>
                  Starbucks is committed to creating a welcoming community
                  coffeehouse where people gather, and where we serve the finest
                  coffee, handcrafted by our skilled baristas.
                </p>
              </div>
              <div className={scss.imageBox}>
                <img
                  src="https://about.starbucks.com/uploads/2025/01/Back-to-Starbucks_20250106_JLIEBMAN_CARAMEL_MACCHIATO-320x235.jpg"
                  alt="image"
                />
                <img
                  src="https://about.starbucks.com/uploads/2025/01/Back-to-Starbucks_20250106_JLIEBMAN_BARISTA-300x410.jpg"
                  alt="image"
                />
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id={scss.blog}>
        <div className="container">
          <p className={scss.title}>
            Beginning January 27, we are bringing back and introducing new
            amenities to our cafes in the U.S. and Canada.{" "}
          </p>
          <div className={scss.blog}>
            <div className={scss.card}>
              <div className={scss.image}>
                <img
                  src="https://about.starbucks.com/uploads/2025/01/Back-To-Starbucks-3-2048x1365.jpg"
                  alt="image"
                />
              </div>
              <div className={scss.inform}>
                <h4>
                  Enjoy your first beverage in the cafe and get free refills
                </h4>
                <p>
                  When you enjoy your first drink in our cafe, you can receive
                  free refills of hot or iced brewed coffee or tea during the
                  same visit in that cafe.*
                </p>
              </div>
            </div>

            <div
              className={scss.card}
              style={{ background: "rgb(50,70,47)", color: "#fff" }}
            >
              <div className={scss.image}>
                <img
                  src="https://about.starbucks.com/uploads/2025/01/Back-to-Starbucks-2048x1365.jpg"
                  alt="image"
                />
              </div>
              <div className={scss.inform}>
                <h4>he condiment bar is back </h4>
                <p>
                  Also on January 27, you can now add the finishing touches to
                  your beverage with the return of creamer and milk, along with
                  a variety of sweeteners to the condiment bar. If you don’t see
                  the milk or sweetener you prefer, don’t hesitate to ask a
                  barista.
                </p>
              </div>
            </div>

            <div className={scss.card}>
              <div className={scss.image}>
                <img
                  src="https://about.starbucks.com/uploads/2025/01/Back-To-Starbucks-4-2048x1365.jpg"
                  alt="image"
                />
              </div>
              <div className={scss.inform} style={{ maxWidth: "590px" }}>
                <h4>Our Coffeehouse Code of Conduct</h4>
                <p>
                  We’ve also heard from customers and partners (employees) that
                  access to comfortable seating and a clean, safe environment is
                  critical to getting back to the Starbucks they know and love.
                  To do this, we’ll be implementing a{" "}
                  <a
                    style={{
                      color: "rgb(7,115,73)",
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                    href="https://about.starbucks.com/code-of-conduct/"
                  >
                    Coffeehouse Code of Conduct
                  </a>{" "}
                  to provide clarity that our spaces are for use by customers
                  and partners.
                </p>
              </div>
            </div>

            <div
              className={scss.card}
              style={{ background: "rgb(50,70,47)", color: "#fff" }}
            >
              <div className={scss.image}>
                <img
                  src="https://about.starbucks.com/uploads/2025/02/20230309_PA041_EarthWeekGreenerStoresLA_064-768x513.jpg"
                  alt="image"
                />
              </div>
              <div className={scss.inform} style={{ maxWidth: "590px" }}>
                <h4>Simplifying our menu</h4>
                <p>
                  We’re starting to{" "}
                  <a
                    style={{
                      color: "rgb(7,115,73)",
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                    href="https://about.starbucks.com/code-of-conduct/"
                  >
                    simplify our menu
                  </a>{" "}
                  to focus on fewer, more popular items, executed with
                  excellence. This will make way for innovation, help reduce
                  wait times, improve quality and consistency, and align with
                  our core identity as a coffee company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={scss.videoSection}>
        <div className="container">
          <div className={scss.iframeContainer}>
            <iframe
              src="https://www.youtube.com/embed/CMmFG-GXNZ0?si=8pFKBbL0XzWv1o7G"
              title="Starbucks Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AckToStarBucksPage;

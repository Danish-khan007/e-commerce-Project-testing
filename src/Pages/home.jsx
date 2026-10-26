
import { useState } from "react"
import tShirt      from "../assets/products/t-shirts/t-shirt.jpg"
import jeans       from "../assets/products/pents/jeans.jpg"
import jacket      from "../assets/products/t-shirts/jacket.jpg"
import tShirts1    from "../assets/products/t-shirts/1.jpg"
import tShirts2    from "../assets/products/t-shirts/2.jpg"
import tShirts3    from "../assets/products/t-shirts/3.jpg"
import tShirts4    from "../assets/products/t-shirts/4.jpg"
import tShirts5    from "../assets/products/t-shirts/5.jpg"
import tShirts6    from "../assets/products/t-shirts/6.jpg"
import tShirts7    from "../assets/products/t-shirts/7.jpg"
import tShirts8    from "../assets/products/t-shirts/8.jpg"
import tShirts9    from "../assets/products/t-shirts/9.jpg"
import tShirts10   from "../assets/products/t-shirts/10.jpg"
import tShirts11   from "../assets/products/t-shirts/11.jpg"
import tShirts12   from "../assets/products/t-shirts/12.jpg"
import tShirts13   from "../assets/products/t-shirts/13.jpg"
import tShirts14   from "../assets/products/t-shirts/14.jpg"
import tShirts15   from "../assets/products/t-shirts/15.jpg"
import pents1      from "../assets/products/pents/1.jpg"
import pents2      from "../assets/products/pents/2.jpg"
import pents3      from "../assets/products/pents/3.jpg"
import pents4      from "../assets/products/pents/4.jpg"
import pents5      from "../assets/products/pents/5.jpg"
import pents6      from "../assets/products/pents/6.jpg"
import pents7      from "../assets/products/pents/7.jpg"
import pents8      from "../assets/products/pents/8.jpg"
import pents9      from "../assets/products/pents/9.jpg"
import pents10     from "../assets/products/pents/10.jpg"
import shoes1      from "../assets/products/shoes/1.jpg"
import shoes2      from "../assets/products/shoes/2.jpg"
import shoes3      from "../assets/products/shoes/3.jpg"
import shoes4      from "../assets/products/shoes/4.jpg"
import shoes5      from "../assets/products/shoes/5.jpg"
import shoes6      from "../assets/products/shoes/6.jpg"
import shoes7      from "../assets/products/shoes/7.jpg"
import shoes8      from "../assets/products/shoes/8.jpg"
import shoes9      from "../assets/products/shoes/9.jpg"
import shoes10     from "../assets/products/shoes/10.jpg"


import { useCart } from "../CartContext";

const Home = () => {
    const { cart, addToCart, removeFromCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const products = [
        { id: 1,  name: "T-Shirt", price: 499, image: tShirt,     category: "T-Shirts"   },
        { id: 2,  name: "Jeans",   price: 999, image: jeans,      category: "Pants"      },
        { id: 3,  name: "Jacket",  price: 699, image: jacket,     category: "T-Shirts"   },
        { id: 4,  name: "1",       price: 242, image: tShirts1,   category: "T-Shirts"   },
        { id: 5,  name: "2",       price: 422, image: tShirts2,   category: "T-Shirts"   },
        { id: 6,  name: "3",       price: 345, image: tShirts3,   category: "T-Shirts"   },
        { id: 7,  name: "4",       price: 353, image: tShirts4,   category: "T-Shirts"   },
        { id: 8,  name: "5",       price: 462, image: tShirts5,   category: "T-Shirts"   },
        { id: 9,  name: "6",       price: 255, image: tShirts6,   category: "T-Shirts"   },
        { id: 10, name: "7",       price: 465, image: tShirts7,   category: "T-Shirts"   },
        { id: 11, name: "8",       price: 463, image: tShirts8,   category: "T-Shirts"   },
        { id: 12, name: "9",       price: 334, image: tShirts9,   category: "T-Shirts"   },
        { id: 13, name: "10",      price: 756, image: tShirts10,  category: "T-Shirts"   },
        { id: 14, name: "11",      price: 575, image: tShirts11,  category: "T-Shirts"   },
        { id: 15, name: "12",      price: 633, image: tShirts12,  category: "T-Shirts"   },
        { id: 16, name: "13",      price: 754, image: tShirts13,  category: "T-Shirts"   },
        { id: 17, name: "14",      price: 855, image: tShirts14,  category: "T-Shirts"   },
        { id: 18, name: "15",      price: 765, image: tShirts15,  category: "T-Shirts"   },
        { id: 19, name: "1",       price: 242, image: pents1,     category: "Pants"      },
        { id: 20, name: "2",       price: 422, image: pents2,     category: "Pants"      },
        { id: 21, name: "3",       price: 345, image: pents3,     category: "Pants"      },
        { id: 22, name: "4",       price: 353, image: pents4,     category: "Pants"      },
        { id: 23, name: "5",       price: 462, image: pents5,     category: "Pants"      },
        { id: 24, name: "6",       price: 255, image: pents6,     category: "Pants"      },
        { id: 25, name: "7",       price: 465, image: pents7,     category: "Pants"      },
        { id: 26, name: "8",       price: 463, image: pents8,     category: "Pants"      },
        { id: 27, name: "9",       price: 334, image: pents9,     category: "Pants"      },
        { id: 28, name: "10",      price: 756, image: pents10,    category: "Pants"      },
        { id: 29, name: "1",       price: 756, image: shoes1,     category: "Shoes"      },
        { id: 30, name: "2",       price: 756, image: shoes2,     category: "Shoes"      },
        { id: 31, name: "3",       price: 756, image: shoes3,     category: "Shoes"      },   
        { id: 32, name: "4",       price: 756, image: shoes4,     category: "Shoes"      },
        { id: 33, name: "5",       price: 756, image: shoes5,     category: "Shoes"      },
        { id: 34, name: "6",       price: 756, image: shoes6,     category: "Shoes"      },
        { id: 35, name: "7",       price: 756, image: shoes7,     category: "Shoes"      },
        { id: 36, name: "8",       price: 756, image: shoes8,     category: "Shoes"      },
        { id: 37, name: "9",       price: 756, image: shoes9,     category: "Shoes"      },
        { id: 38, name: "10",       price: 756, image: shoes10,   category: "Shoes"      },
    ];
    const filteredProducts = products.filter(
         (product) =>
    selectedCategory === "All" || product.category === selectedCategory
    );
    

return (
  <main className="home-layout">
    <aside className="category-menu">
      <h2>Categories</h2>

      {["All", "T-Shirts", "Pants", "Shoes"].map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "category-active" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </aside>

    <section className="products-section">
      <h1>Our Products</h1>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <button type="button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  </main>
);
};

export default Home;
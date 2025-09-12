import React, { useEffect } from 'react';

const Menu = () => {
  const menuData = {
    bourekas: [
      {
        name: "Feta + Ricotta",
        description: "A delicious mix of creamy ricotta and savory feta, lightly seasoned and baked in golden, flaky pastry. Topped with sesame seeds and served with a resek agvaniyot complement.",
        servedWith: "hard boiled egg, pickles & olives",
        sauceOptions: "Tahini, Garlic aioli",
        tagline: "Flaky, savory, filling. The classic done right."
      },
      {
        name: "Mashed Potatoes + Caramelized Onions",
        description: "Creamy mashed potato mixed with golden sautéed onions and a dash of black pepper, sealed in crisp pastry. Topped with nigella seeds and served with a complement of matbucha.",
        servedWith: "hard boiled egg, pickles & olives",
        sauceOptions: "Tahini, Garlic aioli",
        tagline: "Soft inside, bold outside."
      },
      {
        name: "Roasted Eggplant + Za'atar and Tahini",
        description: "Roasted eggplant mashed with tahini, lemon, and garlic, spiced with za'atar and chili flakes. Topped with za'atar spices and a drizzle of tahini.",
        servedWith: "hard boiled egg, pickles & olives",
        sauceOptions: "Tahini, Garlic aioli",
        tagline: "Smoky, tangy, herby — loaded with flavor."
      },
      {
        name: "Nutella",
        description: "Warm, creamy Nutella packed into flaky pastry. Topped with hazelnut crumbs and complemented by whipped cream.",
        servedWith: "hard boiled egg, pickles & olives",
        sauceOptions: "Chocolate or vanilla",
        tagline: "Nutty and rich — a flavor we all know and love, delivered in a new way."
      },
      {
        name: "Baklava",
        description: "A crunchy-sweet blend of toasted walnuts and pistachios with honey, cinnamon, and a touch of orange zest, sealed in pastry. Topped with honey and crushed pistachios, served with a complement of your choice of rose or orange blossom water",
        servedWith: "hard boiled egg, pickles & olives",
        sauceOptions: "Rose or orange blossom water",
        tagline: "Sweet and crunchy — like baklava in a bourekas suit."
      },
      {
        name: "More flavors in the works",
        description: "We're constantly experimenting with new flavors and combinations. Stay tuned for exciting additions to our menu!",
        servedWith: "",
        sauceOptions: "",
        tagline: ""
      }
    ],
    savoryComplements: [
      { name: "Tahini", description: "Creamy sesame paste, rich and nutty, with a lemony tang.\nPairs best with: Eggplant boureka" },
      { name: "Matbucha", description: "Slow-cooked tomatoes and peppers, sweet, smoky, and a little spicy.\nPairs best with: Potato boureka" },
      { name: "Resek Agvaniyot", description: "Freshly grated tomato, juicy and pulpy.\nPairs best with: Cheese boureka" }
    ],
    sweetComplements: [
      { name: "Whipped Cream", description: "Light and airy, cooling, the perfect soft contrast to pastry.\nPairs best with: Nutella + hazelnut boureka" },
      { name: "Orange Blossom Water Syrup", description: "Floral and aromatic, with a sweet Middle Eastern fragrance.\nPairs best with: Baklava boureka" },
      { name: "Rose Water Syrup", description: "Elegant and fragrant, with a subtle floral essence.\nPairs best with: Baklava boureka" }
    ],
    additionalSides: [
      { name: "Israeli salad", description: "Diced mix of juicy tomatoes, crisp cucumbers, sharp onions, and fresh parsley — tossed in lemon juice, olive oil, salt, and pepper." },
      { name: "Hard-Boiled Egg", description: "Gently steam-cooked and served as a classic side" },
      { name: "Pickles & Olives", description: "Mix of briny olives and traditional Israeli-style pickles." }
    ],
    specialtyDrinks: [
      { name: "Limonana", description: "Frozen lemon–mint slush with a bold citrus kick and a cool, herbal finish. Sweet, sour, and wildly refreshing" }
    ],
    regularDrinks: [
      { name: "Espresso" },
      { name: "Green Tea" },
      { name: "Peach Iced Tea" },
      { name: "Coca Cola" },
      { name: "Sprite" },
      { name: "Water" }
    ]
  };

  useEffect(() => {
    // Simplified animation setup without IntersectionObserver to prevent errors
    const timeoutId = setTimeout(() => {
      try {
        const menuItems = document.querySelectorAll('.menu-item, .complement-item, .side-item, .drink-item');
        menuItems.forEach(item => {
          if (item) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          }
        });
      } catch (error) {
        console.warn('Error setting up menu animations:', error);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const MenuCategory = ({ title, items, isSimple = false }) => {
    if (!items || !Array.isArray(items)) {
      return null;
    }
    
    return (
      <div className="menu-category">
        <h3>{title}</h3>
        <div className="menu-items">
          {items.map((item, index) => (
            <div key={index} className="menu-item">
              <h4>{item.name || 'Unnamed Item'}</h4>
              {!isSimple && item.description && (
                <p className="menu-description">{item.description}</p>
              )}
              {!isSimple && item.servedWith && (
                <p className="served-with"><strong>Served with:</strong> {item.servedWith}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Menu</h2>
        <div className="menu-categories">
          <MenuCategory title="Bourekas" items={menuData?.bourekas} />
        </div>
        <div className="complements-sections">
          <div className="savory-complements">
            <h3>Savory Complements</h3>
            <div className="complements-list">
              {menuData?.savoryComplements && menuData.savoryComplements.length > 0 && menuData.savoryComplements.map((item, index) => (
                <div key={index} className="complement-item">
                  <h4>{item?.name || 'Unnamed Item'}</h4>
                  {item?.description && <p>{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="sweet-complements">
            <h3>Sweet Complements</h3>
            <div className="complements-list">
              {menuData?.sweetComplements && menuData.sweetComplements.length > 0 && menuData.sweetComplements.map((item, index) => (
                <div key={index} className="complement-item">
                  <h4>{item?.name || 'Unnamed Item'}</h4>
                  {item?.description && <p>{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="additional-sections">
          <div className="additional-sides">
            <h3>Sides</h3>
            <div className="sides-list">
              {menuData.additionalSides && menuData.additionalSides.map((side, index) => (
                <div key={index} className="side-item">
                  <h4>{side.name}</h4>
                  {side.description && <p>{side.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="drinks-section">
            <h3>Drinks</h3>
            <div className="drinks-list">
              <div className="drink-subsection">
                <h4 className="drink-subheader">Specialty Drinks</h4>
                {menuData.specialtyDrinks && menuData.specialtyDrinks.map((drink, index) => (
                  <div key={index} className="drink-item">
                    <h5>{drink.name}</h5>
                    {drink.description && <p>{drink.description}</p>}
                  </div>
                ))}
              </div>
              <div className="drink-subsection">
                <h4 className="drink-subheader">Regular Drinks</h4>
                {menuData.regularDrinks && menuData.regularDrinks.map((drink, index) => (
                  <div key={index} className="drink-item">
                    <h5>{drink.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

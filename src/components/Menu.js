import React, { useEffect } from 'react';

const Menu = () => {
  const menuData = {
    bourekas: [
      {
        name: "Za’atar Eggplant Boureka",
        description: "Roasted eggplant, tahini, and za’atar in a flaky pastry.",
        price: "$6",
        labels: ["vegan"]
      },
      {
        name: "Spiced Potato Boureka",
        description: "Creamy potato with a harissa kick.",
        price: "$5",
        labels: ["vegetarian", "spicy"]
      },
      {
        name: "Classic Cheese Boureka",
        description: "Melty feta and mozzarella.",
        price: "$5",
        labels: ["vegetarian"]
      }
    ],
    sides: [
      { name: "Pickles & Olives", price: "$2" },
      { name: "Resek", price: "$2" },
      { name: "Israeli Salad", price: "$3" },
      { name: "Hardboiled Egg", price: "$1" }
    ],
    sauces: [
      { name: "Tahini", price: "$1" },
      { name: "Garlic Aioli", price: "$1" }
    ],
    drinks: [
      { name: "Israeli Soda", price: "$2" },
      { name: "Tea", price: "$1.50" },
      { name: "Coffee", price: "$2" },
      { name: "Water", price: "$1" }
    ]
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const MenuCategory = ({ title, items }) => (
    <div className="menu-category">
      <h3>{title}</h3>
      <div className="menu-items">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <h4>{item.name}</h4>
            {item.description && <p className="menu-desc">{item.description}</p>}
            <span className="price">{item.price}</span>
            {item.labels && (
              <div className="labels">
                {item.labels.map((label, i) => (
                  <span key={i} className="label">{label}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Menu</h2>
        <div className="menu-categories">
          <MenuCategory title="Bourekas" items={menuData.bourekas} />
          <MenuCategory title="Sides & Sauces" items={[...menuData.sides, ...menuData.sauces]} />
          <MenuCategory title="Drinks" items={menuData.drinks} />
        </div>
        <p className="menu-note">Flavors will rotate — stay tuned for the next bite.</p>
      </div>
    </section>
  );
};

export default Menu;

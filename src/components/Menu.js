import React, { useEffect } from 'react';

const Menu = () => {
  const menuData = {
    bourekasMeals: [
      { name: 'Cheese', price: '$15.99' },
      { name: 'Potato', price: '$15.99' },
      { name: 'Eggplant', price: '$15.99' },
      { name: 'Chocolate', price: '$15.99' },
      { name: 'Baklava', price: '$15.99' }
    ],
    sauces: [
      { name: 'Tchina', price: '$1.49' },
      { name: 'Garlic Aioli', price: '$1.49' },
      { name: 'Matbucha', price: '$1.99' }
    ],
    sides: [
      { name: 'Egg', price: '$1.49' },
      { name: 'Pickles & Olives', price: '$1.49' },
      { name: 'Resek', price: '$1.49' },
      { name: 'Israeli Salad', price: '$2.49' }
    ],
    drinks: [
      { name: 'Limonana', price: '$4.99' },
      { name: 'Espresso (single)', price: '$0.99' },
      { name: 'Espresso (double)', price: '$1.99' },
      { name: 'Green Tea', price: '$1.99' },
      { name: 'Peach Iced Tea', price: '$2.99' },
      { name: 'Coca Cola', price: '$1.99' },
      { name: 'Sprite', price: '$1.99' },
      { name: 'Water', price: '$1.00' }
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
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Our Menu</h2>
        <p className="menu-subtitle">Prices reflect current offerings</p>
        
        <div className="menu-categories">
          <MenuCategory title="Bourekas Meals" items={menuData.bourekasMeals} />
          <MenuCategory title="Extras • Sauces" items={menuData.sauces} />
          <MenuCategory title="Extras • Sides" items={menuData.sides} />
          <MenuCategory title="Drinks" items={menuData.drinks} />
        </div>
      </div>
    </section>
  );
};

export default Menu;

import React from 'react';
import './menu.css'
const Menu = () => {
  
  return (
    <div className="menu-container" id='menu-container'>
      <h1>Restaurant Menu</h1>
          <div id='main' className="mein">
      <section className="menu-section">
        <h2>🥗 STARTERS (Tandoori)</h2>
        <ul>
          <div className='chiken-tikka'>
            <img src={"https://media.istockphoto.com/id/1365548297/photo/spicy-indian-chicken-tikka-masala-served-at-an-expensive-fine-dining-restaurant.jpg?s=612x612&w=0&k=20&c=snn7wGdWMj0nYOjHNG7z4jgmhZ8071qnb_apYG6V5qs="} alt="Chicken Tikka" />
            <li>Chicken Tikka – 38.00 ZŁ</li>
          </div>
          <div className="fish-tikka">
            <img src={"https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Fish Tikka" />
            <li>Fish Tikka – 41.00 ZŁ</li>
          </div>
          <div className="tandoori-chiken">
            <img src={"https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Tandoori Chicken" />
            <li>Tandoori Chicken – 45.00 ZŁ</li>
          </div>
          <div className="masala-papadam">
            <img src={"https://img.freepik.com/free-photo/crunchy-nachos-mexican-food-top-view_23-2148224166.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Masala Papadam" />
            <li>Masala Papadam – 15.00 ZŁ</li>
          </div>
          <div className="chiken-malai-tikka">
            <img src={"https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Malai Tikka" />
            <li>Chicken Malai Tikka – 39.00 ZŁ</li>
          </div>
          <div className="chiken-haryali-tikka">
            <img src={"https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19992.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chicken Haryali Tikka" />
            <li>Chicken Haryali Tikka – 37.00 ZŁ</li>
          </div>
          <div className="lamb-seekh-kebab">
            <img src={"https://img.freepik.com/free-photo/delicious-restauranr-appetizer-beer-hard-alcohol-roasted-sausage-set-with-tomato-green-sauce-onion-slices-table-is-covered-with-embroidered-tablecloth_7502-5860.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Lamb Seekh Kebab" />
            <li>Lamb Seekh Kebab – 40.00 ZŁ</li>
          </div>
          <div className="Tandoori-Prawns">
            <img src={"https://img.freepik.com/free-photo/delicious-seafood-table_23-2150857704.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Tandoori Prawns" />
            <li>Tandoori Prawns – 45.00 ZŁ</li>
          </div>
          <div className="malai-paneer-tikka">
            <img src={"https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Malai Paneer Tikka" />
            <li>Malai Paneer Tikka – 32.00 ZŁ</li>
          </div>
          <div className="paneer-tikka">
            <img src={"https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Paneer Tikka" />
            <li>Paneer Tikka – 31.00 ZŁ</li>
          </div>
          <div className="broccoli">
            <img src={"https://img.freepik.com/free-photo/delicious-veggie-dishes-still-life_23-2151160871.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Tandoori Broccoli" />
            <li>Tandoori Broccoli – 32.00 ZŁ</li>
          </div>
          <div className="roasted-papadam">
            <img src={"https://img.freepik.com/free-photo/indian-tasty-roti-composition_23-2149073357.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Roasted Papadam" />
            <li>Roasted Papadam – 12.00 ZŁ</li>
          </div>
          <div className="garlic-chiken-tikka">
            <img src={"https://img.freepik.com/premium-photo/indian-chicken-tikka-kebabs-marinated-spices-yogurt-roasted-tandoor-served-with-green-chutney-onion-selective-focus_466689-77132.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Garlic Chicken Tikka" />
            <li>Garlic Chicken Tikka – 39.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🍜 INDO-CHINESE STARTERS</h2>
        <ul>
          <div className="chilli-chicken">
            <img src={"https://img.freepik.com/free-photo/top-view-vegetable-soup-with-meat-inside-plate-grey_140725-36040.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chilli Chicken" />
            <li>Chilli Chicken – 32.00 ZŁ</li>
          </div>
          <div className="chicken-sweet-sour">
            <img src={"https://img.freepik.com/free-photo/fried-chicken-vegetables-sauce-with-sesame_141793-92.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chicken Sweet & Sour" />
            <li>Chicken Sweet & Sour – 25.00 ZŁ</li>
          </div>
          <div className="chicken-lollipop">
            <img src={"https://img.freepik.com/free-photo/high-angle-shot-delicious-hot-spicy-dish-called-drums-heaven-table_181624-50861.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chicken Lollipop" />
            <li>Chicken Lollipop – 35.00 ZŁ</li>
          </div>
          <div className="lamb-chilli">
            <img src={"https://img.freepik.com/free-photo/lamb-bone-sauteed-bone-broth-with-herbs-tomato-sauce_114579-1900.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Lamb Chilli" />
            <li>Lamb Chilli – 35.00 ZŁ</li>
          </div>
          <div className="prawn-chilli">
            <img src={"https://img.freepik.com/free-photo/high-angle-delicious-shrimp-meal_23-2148771278.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Prawn Chilli" />
            <li>Prawn Chilli – 40.00 ZŁ</li>
          </div>
          <div className="chilli-paneer">
            <img src={"https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chilli Paneer" />
            <li>Chilli Paneer (Dry/Sauce) – 30.00 ZŁ</li>
          </div>
          <div className="vegetable-manchurian">
            <img src={"https://img.freepik.com/free-photo/meatballs-sweet-sour-tomato-sauce_2829-19545.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Vegetable Manchurian" />
            <li>Vegetable Manchurian (Dry/Sauce) – 28.00 ZŁ</li>
          </div>
          <div className="paneer-manchurian">
            <img src={"https://img.freepik.com/premium-photo/chilli-paneer-dry-is-made-using-cottage-cheese-indo-chinese-food_466689-76964.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Paneer Manchurian" />
            <li>Paneer Manchurian (Dry/Sauce) – 31.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🍝 NOODLES & FRIED RICE</h2>
        <ul>
          <div className="chicken-noodles">
            <img src={"https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chicken Noodles" />
            <li>Chicken Noodles – 25.00 ZŁ</li>
          </div>
          <div className="vegetable-noodles">
            <img src={"https://img.freepik.com/free-photo/noodles-with-beef-vegetables-black-table_141793-1729.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Vegetable Noodles" />
            <li>Vegetable Noodles – 25.00 ZŁ</li>
          </div>
          <div className="egg-fried-rice">
            <img src={"https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26584.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Egg Fried Rice" />
            <li>Egg Fried Rice – 23.00 ZŁ</li>
          </div>
          <div className="veg-fried-rice">
            <img src={"https://img.freepik.com/free-photo/white-rice-with-vegetables-black-bowl-wooden-table_123827-31645.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Veg Fried Rice" />
            <li>Veg Fried Rice – 22.00 ZŁ</li>
          </div>
          <div className="chicken-fried-rice">
            <img src={"https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chicken Fried Rice" />
            <li>Chicken Fried Rice – 32.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🥟 APPETIZERS & SNACKS</h2>
        <ul>
          <div className="chicken-pakora">
            <img src={"https://img.freepik.com/free-photo/grilled-chicken-nuggets-bowl-crackers-spices-sauce-side-view_141793-3132.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chicken Pakora" />
            <li>Chicken Pakora – 28.00 ZŁ</li>
          </div>
          <div className="prawn-pakora">
            <img src={"https://img.freepik.com/free-photo/top-view-mussels-sauce_23-2148393743.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Prawn Pakora" />
            <li>Prawn Pakora – 31.00 ZŁ</li>
          </div>
          <div className="fish-pakora">
            <img src={"https://img.freepik.com/free-photo/crispiy-onion-rolls-with-tartar-dip-sauce_114579-1716.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Fish Pakora" />
            <li>Fish Pakora – 32.00 ZŁ</li>
          </div>
          <div className="chicken-samosas">
            <img src={"https://img.freepik.com/free-photo/indian-patisserie-products-with-chocolate-sauce_23-2148295022.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chicken Samosas" />
            <li>Chicken Samosas – 20.00 ZŁ</li>
          </div>
          <div className="vegetable-samosas">
            <img src={"https://img.freepik.com/premium-photo/veg-samosa-is-crispy-spicy-indian-triangle-shape-snack-which-has-crisp-outer-layer-maida-filling-mashed-potato-peas-spices_466689-72879.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Vegetable Samosas" />
            <li>Vegetable Samosas – 18.00 ZŁ</li>
          </div>
          <div className="puri-bhaji">
            <img src={"https://img.freepik.com/premium-photo/puri-bhaji-indian-semi-dry-potato-spicy-recipe-also-known-as-batata-aloo-ki-sabji-served-with-fried-poori-selective-focus_466689-12811.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Puri Bhaji" />
            <li>Puri Bhaji – 22.00 ZŁ</li>
          </div>
          <div className="chole-bhature">
            <img src={"https://img.freepik.com/premium-photo/chole-bhature-is-north-indian-food-dish-combination-chana-masala-bhatura-puri_1093310-618.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chole Bhature" />
            <li>Chole Bhature – 23.00 ZŁ</li>
          </div>
          <div className="vegetable-pakoras">
            <img src={"https://img.freepik.com/free-photo/delicious-veggie-dishes-still-life_23-2151160841.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Vegetable Pakoras" />
            <li>Vegetable Pakoras – 20.00 ZŁ</li>
          </div>
          <div className="onion-bhajia">
            <img src={"https://img.freepik.com/free-photo/side-view-snack-crunchy-deep-fried-snack-with-sauce-bread-table_141793-5100.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Onion Bhajia" />
            <li>Onion Bhajia – 20.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🍲 SOUPS & LENTILS</h2>
        <ul>
          <div className="tomato-soup">
            <img src={"https://img.freepik.com/free-photo/tomato-soup-with-grated-cheese-crackers_140725-3017.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Tomato Soup" />
            <li>Tomato Soup – 18.00 ZŁ</li>
          </div>
          <div className="vegetable-manchow-soup">
            <img src={"https://img.freepik.com/free-photo/chicken-noodle-soup-white-bowl-wooden-table_123827-20368.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Vegetable Manchow Soup" />
            <li>Vegetable Manchow Soup – 22.00 ZŁ</li>
          </div>
          <div className="daal-soup">
            <img src={"https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Daal Soup" />
            <li>Daal Soup – 20.00 ZŁ</li>
          </div>
          <div className="chicken-manchow-soup">
            <img src={"https://img.freepik.com/free-photo/horizontal-view-delicious-noodle-soup-with-chicken-brown-bowl-dark-background_140725-140400.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chicken Manchow Soup" />
            <li>Chicken Manchow Soup – 25.00 ZŁ</li>
          </div>
          <div className="chicken-clear-soup">
            <img src={"https://img.freepik.com/free-photo/green-curry-made-with-chicken-chili-basil-with-tomato-lime-kaffir-lime-leaves-garlic_1150-25724.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Chicken Clear Soup" />
            <li>Chicken Clear Soup – 23.00 ZŁ</li>
          </div>
          <div className="daal-makhani">
            <img src={"https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18712.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Daal Makhani" />
            <li>Daal Makhani – 32.00 ZŁ</li>
          </div>
          <div className="yellow-daal-tarka">
            <img src={"https://img.freepik.com/free-photo/top-close-up-view-lentil-soup-blue-bowl-lentil-soup-tomatoes-spices-black-pepper-herbs_140725-73512.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Yellow Daal Tarka" />
            <li>Yellow Daal Tarka – 30.00 ZŁ</li>
          </div>
          <div className="daal-spinach">
            <img src={"https://img.freepik.com/premium-photo/black-masoor-dal-fry-dhaba-style-sabut-red-lentil-dhal-tadka-green-curry-served-bowl-selective-focus_466689-45872.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Daal Spinach" />
            <li>Daal Spinach (Palak) – 33.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🧆 VEGETARIAN MAIN COURSE</h2>
        <ul>
          <div className="palak-paneer">
            <img src={"https://img.freepik.com/premium-photo/indian-palak-paneer-concrete-surface-top-view_233226-653.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Palak Paneer" />
            <li>Palak Paneer – 32.00 ZŁ</li>
          </div>
          <div className="kadhai-paneer">
            <img src={"https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Kadhai Paneer" />
            <li>Kadhai Paneer – 35.00 ZŁ</li>
          </div>
          <div className="butter-paneer">
            <img src={"https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246078.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Butter Paneer" />
            <li>Butter Paneer – 37.00 ZŁ</li>
          </div>
          <div className="paneer-qorma">
            <img src={"https://img.freepik.com/free-photo/pakistani-dish-arrangement-view_23-2148825114.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Paneer Qorma" />
            <li>Paneer Qorma – 35.00 ZŁ</li>
          </div>
          <div className="mushroom-masala">
            <img src={"https://img.freepik.com/free-photo/top-view-yummy-cooked-mushrooms-with-greens-dark_140725-52985.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Mushroom Masala" />
            <li>Mushroom Masala – 33.00 ZŁ</li>
          </div>
          <div className="mix-vegetables">
            <img src={"https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves_2829-6421.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_items_boosted&w=740"} alt="Mix Vegetables" />
            <li>Mix Vegetables – 28.00 ZŁ</li>
          </div>
          <div className="paneer-jalfrezi">
            <img src={"https://img.freepik.com/free-photo/top-view-tasty-chicken-salad-with-vegetables_140725-85127.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Paneer Jalfrezi" />
            <li>Paneer Jalfrezi – 35.00 ZŁ</li>
          </div>
          <div className="paneer-vindaloo">
            <img src={"https://img.freepik.com/free-photo/side-view-vegetable-ragout-with-potato-carrot-cauliflower-basil_141793-5151.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Paneer Vindaloo" />
            <li>Paneer Vindaloo – 32.00 ZŁ</li>
          </div>
          <div className="paneer-bhurji">
            <img src={"https://img.freepik.com/free-photo/scrambled-eggs-veggies-salad_23-2148440360.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Paneer Bhurji" />
            <li>Paneer Bhurji – 35.00 ZŁ</li>
          </div>
          <div className="aloo-gobi">
            <img src={"https://img.freepik.com/premium-photo/delicious-aloo-gobi-spiced-potato-cauliflower-curry_167857-55651.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Aloo Gobi" />
            <li>Aloo Gobi – 28.00 ZŁ</li>
          </div>
          <div className="zeera-aalo">
            <img src={"https://img.freepik.com/free-photo/front-view-tasty-fried-potatoes-inside-plate-with-seasonings-dark-table_140725-137065.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Zeera Aalo" />
            <li>Zeera Aalo – 28.00 ZŁ</li>
          </div>
          <div className="paneer-do-pyaza">
            <img src={"https://img.freepik.com/premium-photo/paneer-butter-masala-cheese-cottage-curry-popular-indian-lunch-dinner-menu-served-karahi-with-naan-roti-moody-background-selective-focus_466689-17136.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Paneer Do Pyaza" />
            <li>Paneer Do Pyaza – 32.00 ZŁ</li>
          </div>
          <div className="bhaingan-bharta">
            <img src={"https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-korean-style-with-green-onion_2829-10984.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Bhaingan Bharta" />
            <li>Bhaingan Bharta – 28.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🍗 CHICKEN MAIN COURSE</h2>
        <ul>
          <div className="chicken-tikka-masala">
            <img src={"https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine-top-view_2829-6243.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Tikka Masala" />
            <li>Chicken Tikka Masala – 39.00 ZŁ</li>
          </div>
          <div className="chicken-do-pyaza">
            <img src={"https://img.freepik.com/premium-photo/punjabi-soya-chaap-gravy-dhaba-style-soya-chap-masala-sabzi-served-with-naan_1184104-338.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Do Pyaza" />
            <li>Chicken Do Pyaza – 39.00 ZŁ</li>
          </div>
          <div className="chicken-vindaloo">
            <img src={"https://img.freepik.com/free-photo/top-chiken-stew-with-garlic-tomato-sauce-served-with-spices-wooden-board_140725-12330.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Vindaloo" />
            <li>Chicken Vindaloo – 40.00 ZŁ</li>
          </div>
          <div className="chicken-mango">
            <img src={"https://img.freepik.com/free-photo/veal-fillet-stir-fry-with-oranges-paprika-sweet-sour-sauce-light-table_2829-19993.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Mango" />
            <li>Chicken Mango – 45.00 ZŁ</li>
          </div>
          <div className="chicken-kadahi">
            <img src={"https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Kadahi" />
            <li>Chicken Kadahi – 40.00 ZŁ</li>
          </div>
          <div className="chicken-korma">
            <img src={"https://img.freepik.com/premium-photo/chicken-tikka-masala-curry-with-herbs-peppers-indian-food-national-cuisine_97840-3515.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Korma" />
            <li>Chicken Korma – 37.00 ZŁ</li>
          </div>
          <div className="palak-chicken">
            <img src={"https://img.freepik.com/free-photo/flat-lay-tasty-pakistani-dish_23-2148825125.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Palak Chicken" />
            <li>Palak Chicken – 40.00 ZŁ</li>
          </div>
          <div className="doon-valley-chicken">
            <img src={"https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Doon Valley's Chicken" />
            <li>Doon Valley's Chicken – 45.00 ZŁ</li>
          </div>
          <div className="chicken-methi-malai">
            <img src={"https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Methi Malai" />
            <li>Chicken Methi Malai – 36.00 ZŁ</li>
          </div>
          <div className="chicken-jalfrezi">
            <img src={"https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine-top-view_2829-6240.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Jalfrezi" />
            <li>Chicken Jalfrezi – 38.00 ZŁ</li>
          </div>
          <div className="butter-chicken">
            <img src={"https://img.freepik.com/free-photo/top-view-bowl-homemade-stew-pepper_23-2148494757.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Butter Chicken" />
            <li>Butter Chicken – 40.00 ZŁ</li>
          </div>
          <div className="chicken-rogan-josh">
            <img src={"https://img.freepik.com/premium-photo/punjabi-soya-chaap-gravy-dhaba-style-soya-chap-masala-sabzi-served-with-naan_1184104-338.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Rogan Josh" />
            <li>Chicken Rogan Josh – 40.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🐑 LAMB & SEAFOOD MAIN COURSE</h2>
        <ul>
          <div className="lamb-madras">
            <img src={"https://img.freepik.com/free-photo/lamb-bone-sauteed-bone-broth-with-herbs-tomato-sauce_114579-1900.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lamb Madras" />
            <li>Lamb Madras – 37.00 ZŁ</li>
          </div>
          <div className="butter-lamb">
            <img src={"https://img.freepik.com/free-photo/delicious-christmas-dinner-food_23-2151900801.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Butter Lamb" />
            <li>Butter Lamb – 43.00 ZŁ</li>
          </div>
          <div className="lamb-qorma">
            <img src={"https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370900.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lamb Qorma" />
            <li>Lamb Qorma – 35.00 ZŁ</li>
          </div>
          <div className="lamb-do-pyaza">
            <img src={"https://img.freepik.com/premium-photo/mutton-gosht-masala-indian-lamb-rogan-josh-with-some-seasoning-served-with-naan-roti-selective-focus_466689-56763.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lamb Do Pyaza" />
            <li>Lamb Do Pyaza – 42.00 ZŁ</li>
          </div>
          <div className="lamb-roghan-josh">
            <img src={"https://img.freepik.com/free-photo/boiled-meat-with-pomegranate-walnuts_140725-6054.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lamb Roghan Josh" />
            <li>Lamb Roghan Josh – 42.00 ZŁ</li>
          </div>
          <div className="lamb-kadahi">
            <img src={"https://img.freepik.com/free-photo/delicious-pakistani-dish-high-angle_23-2148825147.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lamb Kadahi" />
            <li>Lamb Kadahi – 35.00 ZŁ</li>
          </div>
          <div className="lamb-jalfrezi">
            <img src={"https://img.freepik.com/free-psd/delicious-beef-stew-with-peppers-basil_191095-77627.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lamb Jalfrezi" />
            <li>Lamb Jalfrezi – 38.00 ZŁ</li>
          </div>
          <div className="fish-korma">
            <img src={"https://img.freepik.com/free-photo/top-view-delicious-fish-meal_23-2148734691.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Fish Korma" />
            <li>Fish Korma – 42.00 ZŁ</li>
          </div>
          <div className="prawns-korma">
            <img src={"https://img.freepik.com/premium-photo/bowl-prawn-balti-curry-with-side-pickles_974629-477628.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Prawns Korma" />
            <li>Prawns Korma – 43.00 ZŁ</li>
          </div>
          <div className="butter-prawns">
            <img src={"https://img.freepik.com/free-photo/shrimps-cream-sauce_658428-91.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Butter Prawns" />
            <li>Butter Prawns – 40.00 ZŁ</li>
          </div>
          <div className="prawns-kadahi">
            <img src={"https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535861.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Prawns Kadahi" />
            <li>Prawns Kadahi – 40.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🍛 BIRYANI, RICE & PULAO</h2>
        <ul>
          <div className="chicken-biryani">
            <img src={"https://img.freepik.com/free-photo/high-angle-pakistan-meal-composition_23-2148821517.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Biryani" />
            <li>Chicken Biryani – 40.00 ZŁ</li>
          </div>
          <div className="lamb-biryani">
            <img src={"https://img.freepik.com/free-psd/delicious-chicken-biryani-aromatic-rice-tender-chicken_632498-24189.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lamb Biryani" />
            <li>Lamb Biryani – 43.00 ZŁ</li>
          </div>
          <div className="paneer-biryani">
            <img src={"https://img.freepik.com/premium-photo/healthy-paneer-pulav-pilaf-using-basmati-rice-served-bowl-plate-indian-food_466689-72576.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Paneer Biryani" />
            <li>Paneer Biryani – 40.00 ZŁ</li>
          </div>
          <div className="fish-biryani">
            <img src={"https://img.freepik.com/free-photo/side-view-rice-garnish-with-grilled-chicken-cucumber-carrot-bell-pepper-spring-onion_141793-5070.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Fish Biryani" />
            <li>Fish Biryani – 45.00 ZŁ</li>
          </div>
          <div className="doon-special-biryani">
            <img src={"https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Doon's Special Biryani" />
            <li>Doon's Special Biryani – 47.00 ZŁ</li>
          </div>
          <div className="prawn-biryani">
            <img src={"https://img.freepik.com/free-photo/grilled-shrimp-salad_181624-959.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Prawn Biryani" />
            <li>Prawn Biryani – 45.00 ZŁ</li>
          </div>
          <div className="vegetable-pulao">
            <img src={"https://img.freepik.com/free-psd/delicious-homemade-vegetable-fried-rice-recipe_632498-24730.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Vegetable Pulao" />
            <li>Vegetable Pulao – 15.00 ZŁ</li>
          </div>
          <div className="mutter-pulao">
            <img src={"https://img.freepik.com/premium-photo/tawa-pulao-pulav-pilaf-pilau-is-indian-street-food-made-using-basmati-rice-vegetables-spices-selective-focus_466689-70776.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Mutter Pulao" />
            <li>Mutter Pulao – 15.00 ZŁ</li>
          </div>
          <div className="kashmiri-pulao">
            <img src={"https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Kashmiri Pulao" />
            <li>Kashmiri Pulao – 20.00 ZŁ</li>
          </div>
          <div className="zeera-rice">
            <img src={"https://img.freepik.com/free-photo/top-view-cooked-rice-with-seasonings-dark-surface-meal-photo-dish-food-dark_140725-82286.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Zeera Rice" />
            <li>Zeera Rice – 15.00 ZŁ</li>
          </div>
          <div className="steam-rice">
            <img src={"https://img.freepik.com/free-photo/side-view-plate-with-cooked-rice-with-parsley-table_140725-12126.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Steam Rice" />
            <li>Steam Rice – 13.00 ZŁ</li>
          </div>
          <div className="lemon-rice">
            <img src={"https://img.freepik.com/free-photo/close-up-chicken-with-rice-cooked-indian-style_23-2148294965.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lemon Rice" />
            <li>Lemon Rice – 17.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🫓 BREADS & PARATHAS</h2>
        <ul>
          <div className="plain-naan">
            <img src={"https://img.freepik.com/free-photo/delicious-roti-assortment-table-with-copy-space_23-2149033978.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Plain Naan" />
            <li>Plain Naan – 13.00 ZŁ</li>
          </div>
          <div className="butter-naan">
            <img src={"https://img.freepik.com/free-photo/top-view-pakistani-meal-arrangement_23-2148825100.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Butter Naan" />
            <li>Butter Naan – 14.00 ZŁ</li>
          </div>
          <div className="garlic-naan">
            <img src={"https://img.freepik.com/free-photo/pakistani-food-wooden-board-top-view_23-2148825093.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Garlic Naan" />
            <li>Garlic Naan – 15.00 ZŁ</li>
          </div>
          <div className="moti-naan">
            <img src={"https://img.freepik.com/free-photo/tasty-fresh-round-tandoor-bread-white-wooden-table_166373-801.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Moti Naan" />
            <li>Moti Naan (sesame) – 14.00 ZŁ</li>
          </div>
          <div className="cheese-naan">
            <img src={"https://img.freepik.com/free-photo/top-view-delicious-vegetarian-pizza-isolated_181624-23616.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Cheese Naan" />
            <li>Cheese Naan – 18.00 ZŁ</li>
          </div>
          <div className="paneer-naan">
            <img src={"https://img.freepik.com/premium-photo/two-fresh-goldenbrown-flatbreads-topped-with-melted-cheese-fresh-parsley_65800-6047.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Paneer Naan" />
            <li>Paneer Naan – 17.00 ZŁ</li>
          </div>
          <div className="kashmiri-naan">
            <img src={"https://img.freepik.com/free-photo/front-view-tasty-gutabs-hotcakes-with-meat-pomegranates-dark-surface_179666-44180.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Kashmiri Naan" />
            <li>Kashmiri Naan – 16.00 ZŁ</li>
          </div>
          <div className="masala-kulcha">
            <img src={"https://img.freepik.com/free-photo/view-bowl-with-pakistani-food_23-2148825092.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Masala Kulcha" />
            <li>Masala Kulcha – 16.00 ZŁ</li>
          </div>
          <div className="lacha-paratha">
            <img src={"https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76164.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lacha Paratha" />
            <li>Lacha Paratha – 16.00 ZŁ</li>
          </div>
          <div className="poodina-paratha">
            <img src={"https://img.freepik.com/free-photo/delicious-assortment-traditional-roti_23-2149033987.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Poodina Paratha" />
            <li>Poodina Paratha – 17.00 ZŁ</li>
          </div>
          <div className="methi-roti">
            <img src={"https://img.freepik.com/free-photo/indian-tasty-roti-composition_23-2149073357.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Methi Roti" />
            <li>Methi Roti – 12.00 ZŁ</li>
          </div>
          <div className="tandoori-roti">
            <img src={"https://img.freepik.com/free-photo/delicious-assortment-traditional-roti_23-2149033987.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Tandoori Roti" />
            <li>Tandoori Roti – 14.00 ZŁ</li>
          </div>
          <div className="romali-roti">
            <img src={"https://img.freepik.com/free-photo/indian-tasty-roti-composition_23-2149073358.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Romali Roti" />
            <li>Romali Roti – 12.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🥗 SALADS & RAITAS</h2>
        <ul>
          <div className="onion-salad">
            <img src={"https://img.freepik.com/premium-photo/sliced-red-onion-dark-bowl-isolated_162695-1761.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Onion Salad" />
            <li>Onion Salad – 14.00 ZŁ</li>
          </div>
          <div className="green-salad">
            <img src={"https://img.freepik.com/free-photo/top-view-tasty-salad-with-vegetables_23-2148515491.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Green Salad" />
            <li>Green Salad – 16.00 ZŁ</li>
          </div>
          <div className="mixed-raita">
            <img src={"https://img.freepik.com/free-photo/top-view-tasty-dovga-yogurt-soup-with-greens-inside-plate-white-table-milk-soup-meal_140725-72815.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Mixed Raita" />
            <li>Mixed Raita – 12.00 ZŁ</li>
          </div>
          <div className="plain-yogurt">
            <img src={"https://img.freepik.com/free-photo/organic-yogurt-bowl-with-oats-table_23-2148529400.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Plain Yogurt" />
            <li>Plain Yogurt – 8.00 ZŁ</li>
          </div>
          <div className="chicken-tikka-salad">
            <img src={"https://img.freepik.com/free-photo/fresh-vegetable-salad-with-grilled-chicken-breast_2829-14119.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Chicken Tikka Salad" />
            <li>Chicken Tikka Salad – 25.00 ZŁ</li>
          </div>
          <div className="prawns-salad">
            <img src={"https://img.freepik.com/free-photo/top-view-caesar-salad-with-fried-shrimp_176474-3273.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Prawns Salad" />
            <li>Prawns Salad – 30.00 ZŁ</li>
          </div>
        </ul>
      </section>

      <section className="menu-section">
        <h2>🍨 DESSERTS & TEAS</h2>
        <ul>
          <div className="mango-lassi">
            <img src={"https://img.freepik.com/free-photo/iced-cocktails-drinking-glass-with-beach-sea_74190-6882.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Mango Lassi" />
            <li>Mango Lassi – 15.00 ZŁ</li>
          </div>
          <div className="lassi">
            <img src={"https://img.freepik.com/free-photo/delicious-indian-drinks-arrangement_23-2149312382.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Lassi" />
            <li>Lassi (Salt/Sweet) – 12.00 ZŁ</li>
          </div>
          <div className="indian-masala-tea">
            <img src={"https://img.freepik.com/free-photo/steaming-cup-chai-tea-with-star-anise-cinnamon-sticks-cloves-black-surface_9975-124486.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Indian Masala Tea" />
            <li>Indian Masala Tea – 10.00 ZŁ</li>
          </div>
          <div className="indian-coffee">
            <img src={"https://img.freepik.com/premium-photo/south-indian-filter-coffee-served-traditional-brass-stainless-steel-cup_1093310-2780.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Indian Coffee" />
            <li>Indian Coffee – 12.00 ZŁ</li>
          </div>
          <div className="gulab-jamun">
            <img src={"https://img.freepik.com/premium-photo/plate-gulab-jamun-lal-mohan-sweets-indian-ceremony-festival-diwali_723123-4126.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Gulab Jamun" />
            <li>Gulab Jamun (2 pcs) – 14.00 ZŁ</li>
          </div>
          <div className="ice-cream">
            <img src={"https://img.freepik.com/free-photo/composition-delicious-homemade-icecream_23-2148900954.jpg?uid=R182242620&ga=GA1.1.268238247.1740500251&semt=ais_hybrid&w=740"} alt="Ice Cream" />
            <li>Ice Cream (Vanilla/Mango/Pistachio) – 12.00 ZŁ</li>
          </div>
        </ul>
      </section>
      </div>
    </div>
  );
};

export default Menu;
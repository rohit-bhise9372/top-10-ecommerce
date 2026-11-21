
const products = [
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive",
    price: 64,
    description: "Portable external hard drive with USB 3.0 connectivity and 2TB storage capacity.",
    category: "Electronics",
    subCategory: "Storage",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    description: "1TB internal SATA SSD designed for faster booting and improved computer performance.",
    category: "Electronics",
    subCategory: "Storage",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    rating: {
      rate: 2.9,
      count: 470
    }
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD A55",
    price: 109,
    description: "256GB SATA III SSD with 3D NAND technology and SLC cache performance.",
    category: "Electronics",
    subCategory: "Storage",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: {
      rate: 4.8,
      count: 319
    }
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive",
    price: 114,
    description: "Portable 4TB external gaming drive designed for PlayStation 4.",
    category: "Electronics",
    subCategory: "Gaming",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    rating: {
      rate: 4.8,
      count: 400
    }
  },
  {
    id: 13,
    title: "Acer SB220Q 21.5-inch Full HD Monitor",
    price: 599,
    description: "21.5-inch Full HD IPS monitor with 75Hz refresh rate and ultra-thin design.",
    category: "Electronics",
    subCategory: "Monitors",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    rating: {
      rate: 2.9,
      count: 250
    }
  },
  {
    id: 14,
    title: "Samsung 49-inch Curved Gaming Monitor",
    price: 999.99,
    description: "49-inch QLED curved gaming monitor with 144Hz refresh rate and 1ms response time.",
    category: "Electronics",
    subCategory: "Monitors",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    rating: {
      rate: 2.2,
      count: 140
    }
  },
  
  {
    id: 15,
    title: "Samsung Galaxy S24 Ultra 5G",
    price: 24999,
    description: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 256 GB) (12 GB RAM)",
    category: "Electronics",
    subCategory: "Smartphones",
    image: "https://rukminim2.flixcart.com/image/1336/1336/xif0q/mobile/q/v/8/-original-imahggexsnwzfzcb.jpeg?q=90",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 16,
    title: "Apple iPhone",
    price: 59999,
    description: "Apple smartphone with a premium design and advanced camera.",
    category: "Electronics",
    subCategory: "Smartphones",
    image: "https://rukminim2.flixcart.com/image/1336/1336/xif0q/mobile/n/v/a/-resized-original-imahft5nxmyqndhf.jpeg?q=90",
    rating: { rate: 4.7, count: 250 }
  },
  {
    id: 17,
    title: "HP Pavilion Laptop",
    price: 54999,
    description: "HP laptop suitable for productivity, learning and entertainment.",
    category: "Electronics",
    subCategory: "Laptops",
    image: "https://rukminim2.flixcart.com/image/1336/1336/xif0q/computer/i/c/b/15-eh1101au-thin-and-light-laptop-hp-original-imah26j3pkuza7sh.jpeg?q=90",
    rating: { rate: 4.3, count: 180 }
  },
  {
    id: 18,
    title: "Dell Inspiron Laptop",
    price: 62999,
    description: "Dell laptop with a modern design for everyday computing.",
    category: "Electronics",
    subCategory: "Laptops",
    image: "https://rukminim2.flixcart.com/image/1336/1336/xif0q/computer/j/b/k/inspiron-15-thin-and-light-laptop-dell-original-imagrgyf8px89mhp.jpeg?q=90",
    rating: { rate: 4.4, count: 150 }
  },
  {
    id: 19,
    title: "boAt Wireless Headphones",
    price: 1999,
    description: "Wireless headphones with comfortable ear cushions and rich sound.",
    category: "Electronics",
    subCategory: "Audio",
    image: "https://rukminim2.flixcart.com/image/1336/1336/xif0q/headphone/i/p/m/-original-imahzv2efzddzse8.jpeg?q=90",
    rating: { rate: 4.2, count: 320 }
  },
  {
    id: 20,
    title: "Sony Wireless Earbuds",
    price: 4999,
    description: "Compact wireless earbuds with quality audio and comfortable fit.",
    category: "Electronics",
    subCategory: "Audio",
    image: "https://rukminim2.flixcart.com/image/1336/1336/xif0q/headphone/7/r/o/wf-c510-sony-enriched-transparent-original-imah4gkssgxguhyn.png?q=90",
    rating: { rate: 4.6, count: 210 }
  },
  {
    id: 21,
    title: "Logitech Wireless Mouse",
    price: 899,
    description: "Ergonomic wireless mouse for everyday computer use.",
    category: "Electronics",
    subCategory: "Accessories",
    image: "https://rukminim2.flixcart.com/image/1336/1336/xif0q/mouse/d/d/2/-enriched-transparent-original-imahbg3mcksqv9pq.png?q=90",
    rating: { rate: 4.3, count: 190 }
  },
  {
    id: 22,
    title: "Mechanical Gaming Keyboard",
    price: 2499,
    description: "Mechanical keyboard designed for gaming and typing.",
    category: "Electronics",
    subCategory: "Accessories",
    image: "https://rukminim2.flixcart.com/image/1336/1336/xif0q/keyboard/gaming-keyboard/6/o/l/katana-x2-mechanical-dynamic-backlighting-evofox-original-imahjsw9avppbg6g.jpeg?q=90",
    rating: { rate: 4.5, count: 160 }
  }

]

export default products;
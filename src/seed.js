const sequelize = require('./config/db');
require('./config/associations');
const Category = require('./modules/product/category.model');
const Product = require('./modules/product/product.model');

async function seed(force = true) {
  if (force) {
    await sequelize.sync({ force: true });
    console.log('Database cleared');
  } else {
    // If not forcing, just sync without dropping tables
    await sequelize.sync();
  }

  // Create Categories
  const electronics = await Category.create({ name: 'Electronics' });
  const clothing = await Category.create({ name: 'Clothing & Fashion' });
  const books = await Category.create({ name: 'Books' });
  const home = await Category.create({ name: 'Home & Kitchen' });
  const beauty = await Category.create({ name: 'Beauty & Personal Care' });
  const sports = await Category.create({ name: 'Sports & Outdoors' });
  const toys = await Category.create({ name: 'Toys & Games' });
  const automotive = await Category.create({ name: 'Automotive' });

  await Product.bulkCreate([
    // ==========================================
    // ELECTRONICS (12 products)
    // ==========================================
    {
      name: 'Apple MacBook Air M2',
      description: 'Supercharged by the next-generation M2 chip. Up to 18 hours battery. 13.6-inch Liquid Retina display. 8GB RAM, 256GB SSD.',
      price: 114900, original_price: 119900, stock_quantity: 15,
      category_id: electronics.id, rating: 4.7, review_count: 12483, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000',
      image_urls: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000'
      ]
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      description: '200MP Camera, titanium frame, S Pen, 5000mAh battery. The ultimate Galaxy experience with AI.',
      price: 129999, original_price: 134999, stock_quantity: 42,
      category_id: electronics.id, rating: 4.5, review_count: 8721, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Sony WH-1000XM5 Headphones',
      description: 'Industry-leading noise cancellation. 30-hr battery life. Auto NC Optimizer. Crystal clear hands-free calls.',
      price: 26990, original_price: 34990, stock_quantity: 60,
      category_id: electronics.id, rating: 4.6, review_count: 21045, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000',
      image_urls: [
        'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1000'
      ]
    },
    {
      name: 'Apple iPad Pro 12.9" M2',
      description: 'The most powerful iPad ever. M2 chip, Liquid Retina XDR display, Wi-Fi 6E, Thunderbolt 4.',
      price: 112900, original_price: 122900, stock_quantity: 22,
      category_id: electronics.id, rating: 4.8, review_count: 5302, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Logitech MX Master 3S Mouse',
      description: 'Ergo precision mouse with ultrafast scrolling, near-silent clicks, and 8K DPI sensor. Perfect for productivity.',
      price: 9995, original_price: 11995, stock_quantity: 80,
      category_id: electronics.id, rating: 4.5, review_count: 3892, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Dell XPS 15 Laptop',
      description: 'Stunning 15.6-inch OLED display. Core i7 processor, 16GB RAM, 1TB SSD, and NVIDIA RTX 4050 graphics.',
      price: 149990, original_price: 165000, stock_quantity: 10,
      category_id: electronics.id, rating: 4.4, review_count: 1284, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Bose QuietComfort Earbuds',
      description: 'High-fidelity audio combined with legendary noise cancelling. Up to 6 hours battery life per charge.',
      price: 25900, original_price: 29900, stock_quantity: 35,
      category_id: electronics.id, rating: 4.3, review_count: 4851, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Kindle Paperwhite (16 GB)',
      description: 'Now with a 6.8-inch display and thinner borders, adjustable warm light, and up to 10 weeks of battery life.',
      price: 14999, original_price: 15999, stock_quantity: 95,
      category_id: electronics.id, rating: 4.7, review_count: 14829, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Apple Watch Series 9',
      description: 'Smarter, brighter, and more powerful. Crack-resistant crystal, swimproof design, and advanced health metrics.',
      price: 41900, original_price: 44900, stock_quantity: 50,
      category_id: electronics.id, rating: 4.6, review_count: 3951, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'GoPro HERO12 Black',
      description: 'Incredible image quality, even better HyperSmooth video stabilization, and a huge boost in battery performance.',
      price: 37990, original_price: 45000, stock_quantity: 25,
      category_id: electronics.id, rating: 4.5, review_count: 1984, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1565849906661-09d665e553f4?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1565849906661-09d665e553f4?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Anker 737 Power Bank',
      description: 'Equipped with Power Delivery 3.1 and bi-directional technology to quickly recharge the portable charger.',
      price: 10999, original_price: 12999, stock_quantity: 110,
      category_id: electronics.id, rating: 4.7, review_count: 5120, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'ASUS ROG Zephyrus G14',
      description: 'Powerful AMD Ryzen 9 processor and NVIDIA RTX 4060 graphics inside a thin and light 14-inch chassis.',
      price: 134990, original_price: 149990, stock_quantity: 12,
      category_id: electronics.id, rating: 4.5, review_count: 850, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000']
    },

    // ==========================================
    // CLOTHING & FASHION (12 products)
    // ==========================================
    {
      name: "Levi's 511 Slim Fit Jeans",
      description: "Classic slim fit with a little stretch for all-day comfort. Made from sustainable cotton. Available in multiple washes.",
      price: 2999, original_price: 4499, stock_quantity: 120,
      category_id: clothing.id, rating: 4.3, review_count: 9834, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Nike Air Max 270',
      description: 'React foam midsole with Max Air unit for all-day comfort. Engineered mesh upper for lightweight breathability.',
      price: 10995, original_price: 13995, stock_quantity: 45,
      category_id: clothing.id, rating: 4.4, review_count: 6712, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Polo Ralph Lauren Shirt',
      description: 'Iconic polo shirt crafted from soft combed cotton. The classic fit, signature pony embroidery.',
      price: 4999, original_price: 6500, stock_quantity: 90,
      category_id: clothing.id, rating: 4.2, review_count: 4120, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Adidas Originals Superstar',
      description: 'Featuring the iconic shell toe and serrated 3-Stripes, these leather sneakers are a timeless classic.',
      price: 7999, original_price: 8999, stock_quantity: 65,
      category_id: clothing.id, rating: 4.5, review_count: 10283, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Tommy Hilfiger Leather Belt',
      description: 'Crafted from premium 100% genuine leather, featuring a stylish brushed nickel single-prong buckle.',
      price: 2499, original_price: 3499, stock_quantity: 150,
      category_id: clothing.id, rating: 4.1, review_count: 1540, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1624222247344-550fb8ec5521?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1624222247344-550fb8ec5521?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Puma Unisex Running Shoes',
      description: 'Lightweight performance running shoes with breathable mesh and responsive cushioning for comfort.',
      price: 3499, original_price: 5999, stock_quantity: 80,
      category_id: clothing.id, rating: 4.0, review_count: 3120, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Ray-Ban Wayfarer Sunglasses',
      description: 'Classic unisex sunglasses offering 100% UV protection. Durable and lightweight acetate frames.',
      price: 9890, original_price: 11990, stock_quantity: 40,
      category_id: clothing.id, rating: 4.6, review_count: 4891, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Calvin Klein Crewneck Tees (3x)',
      description: 'Soft 100% cotton undershirts. Features a classic crew neckline and comfortable fit.',
      price: 3299, original_price: 3999, stock_quantity: 75,
      category_id: clothing.id, rating: 4.3, review_count: 2450, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Fossil Gen 6 Smartwatch',
      description: 'Stainless steel smartwatch tracking heart rate, activity, sleep, and cardio levels with Alexa built-in.',
      price: 18495, original_price: 24995, stock_quantity: 30,
      category_id: clothing.id, rating: 4.2, review_count: 1824, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Under Armour Tech 2.0 Shirt',
      description: 'UA Tech fabric is quick-drying, ultra-soft, and has a more natural feel for active training sessions.',
      price: 1799, original_price: 2499, stock_quantity: 140,
      category_id: clothing.id, rating: 4.4, review_count: 5620, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Columbia Fleece Jacket',
      description: 'Crafted of 100% polyester MTR filament fleece for ultimate warmth, comfort, and versatile outdoor layering.',
      price: 3999, original_price: 4999, stock_quantity: 60,
      category_id: clothing.id, rating: 4.5, review_count: 3720, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Herschel Heritage Backpack',
      description: 'A classic design with modern functionality, featuring signature striped fabric liner and a 15-inch laptop sleeve.',
      price: 4500, original_price: 5500, stock_quantity: 50,
      category_id: clothing.id, rating: 4.4, review_count: 1250, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000']
    },

    // ==========================================
    // BOOKS (12 products)
    // ==========================================
    {
      name: 'The Pragmatic Programmer',
      description: 'Your Journey to Mastery. 20th Anniversary Edition. Essential reading for every developer — timeless advice for software craftsmanship.',
      price: 2499, original_price: 3499, stock_quantity: 200,
      category_id: books.id, rating: 4.8, review_count: 14322, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Atomic Habits',
      description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear. #1 NYT Bestseller. Over 15 million copies sold.',
      price: 399, original_price: 599, stock_quantity: 500,
      category_id: books.id, rating: 4.7, review_count: 89234, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Clean Code',
      description: 'A Handbook of Agile Software Craftsmanship by Robert C. Martin. Learn how to write code that is readable, maintainable, and clean.',
      price: 1899, original_price: 2499, stock_quantity: 120,
      category_id: books.id, rating: 4.6, review_count: 8940, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Sapiens: A Brief History',
      description: 'Yuval Noah Harari explores the history of humankind from the Stone Age to the present, questioning our roles and assumptions.',
      price: 499, original_price: 699, stock_quantity: 350,
      category_id: books.id, rating: 4.7, review_count: 42104, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Deep Work',
      description: 'Rules for Focused Success in a Distracted World. Cal Newport presents a compelling guide to achieving peak cognitive performance.',
      price: 349, original_price: 499, stock_quantity: 280,
      category_id: books.id, rating: 4.5, review_count: 15409, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Designing Data-Intensive Apps',
      description: 'The definitive guide to understanding system architectures, storage systems, databases, processing engines, and consistency.',
      price: 2299, original_price: 2999, stock_quantity: 90,
      category_id: books.id, rating: 4.8, review_count: 5410, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Thinking, Fast and Slow',
      description: 'Daniel Kahneman discusses the two systems that drive the way we think — fast, intuitive, and slow, deliberative.',
      price: 450, original_price: 599, stock_quantity: 160,
      category_id: books.id, rating: 4.4, review_count: 23891, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'The Psychology of Money',
      description: 'Timeless lessons on wealth, greed, and happiness by Morgan Housel. Essential financial wisdom for absolute beginners.',
      price: 299, original_price: 399, stock_quantity: 400,
      category_id: books.id, rating: 4.6, review_count: 31050, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Zero to One',
      description: 'Notes on Startups, or How to Build the Future by Peter Thiel. The philosophy of monopoly and creating something entirely new.',
      price: 375, original_price: 499, stock_quantity: 220,
      category_id: books.id, rating: 4.5, review_count: 18451, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Dune',
      description: 'The science fiction masterpiece by Frank Herbert. Set in the far future, follow Paul Atreides on the desert planet Arrakis.',
      price: 499, original_price: 699, stock_quantity: 180,
      category_id: books.id, rating: 4.7, review_count: 29840, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Educated',
      description: 'An unforgettable memoir about a young woman who leaves her survivalist family in Idaho and earns a PhD from Cambridge University.',
      price: 399, original_price: 599, stock_quantity: 130,
      category_id: books.id, rating: 4.6, review_count: 12590, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Rework',
      description: 'A better, faster, easier way to succeed in business. Throw out traditional management theories and start working smarter.',
      price: 450, original_price: 599, stock_quantity: 85,
      category_id: books.id, rating: 4.4, review_count: 6721, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=1000']
    },

    // ==========================================
    // HOME & KITCHEN (12 products)
    // ==========================================
    {
      name: 'Philips Air Fryer HD9252',
      description: 'Rapid Air Technology for crispy results without oil. 1.2kg capacity. Up to 90% less fat. With 7 preset cooking programs.',
      price: 8995, original_price: 12995, stock_quantity: 35,
      category_id: home.id, rating: 4.4, review_count: 7821, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Prestige Iris Mixer Grinder',
      description: '3 stainless steel jars, 4-speed control with incher, motor overload protection. Ideal for Indian cooking.',
      price: 3299, original_price: 4999, stock_quantity: 55,
      category_id: home.id, rating: 4.2, review_count: 12543, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Instant Pot Duo 7-in-1',
      description: 'The world-famous multi-functional pressure cooker. Slow cooker, rice cooker, steamer, sauté pan, and warmer in one.',
      price: 9990, original_price: 12990, stock_quantity: 40,
      category_id: home.id, rating: 4.7, review_count: 45012, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Dyson V8 Cordless Vacuum',
      description: 'Strong suction power for deep cleaning homes. Lightweight and versatile with up to 40 minutes run time.',
      price: 34900, original_price: 39900, stock_quantity: 18,
      category_id: home.id, rating: 4.5, review_count: 5310, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Kent Grand Plus Purifier',
      description: 'RO + UV + UF + TDS control mineral water purifier. Wall-mountable, high storage capacity.',
      price: 16500, original_price: 19500, stock_quantity: 25,
      category_id: home.id, rating: 4.3, review_count: 9812, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1609590981109-77579f1fb903?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1609590981109-77579f1fb903?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Nespresso Essenza Mini',
      description: 'Compact espresso coffee machine offering two cup sizes, high pressure extraction, and fast heat-up.',
      price: 13999, original_price: 16999, stock_quantity: 20,
      category_id: home.id, rating: 4.6, review_count: 1420, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Pigeon Kettle (1.5L)',
      description: 'Stainless steel body with rapid boil, auto shut-off, and cool touch handle. Essential for quick tea and coffee.',
      price: 899, original_price: 1499, stock_quantity: 300,
      category_id: home.id, rating: 4.0, review_count: 24890, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Hario V60 Ceramic Dripper',
      description: 'The standard coffee dripper loved worldwide. Unique spiral ribbing allows for maximum coffee expansion.',
      price: 1899, original_price: 2400, stock_quantity: 80,
      category_id: home.id, rating: 4.8, review_count: 3120, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Tupperware Heritage Bowl Set',
      description: 'Pack of 4 durable airtight and liquid-tight food storage containers. Keeps food fresh for hours.',
      price: 1299, original_price: 1699, stock_quantity: 150,
      category_id: home.id, rating: 4.4, review_count: 1850, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Memory Foam Pillow',
      description: 'Orthopaedic ergonomic contour support cervical pillow. Relieves neck pain and shoulder stiffness.',
      price: 1199, original_price: 1999, stock_quantity: 120,
      category_id: home.id, rating: 4.2, review_count: 5240, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Solimo Premium Almonds (1kg)',
      description: 'High-quality crunchy raw almonds rich in healthy nutrients, vitamins, proteins, and minerals.',
      price: 899, original_price: 1200, stock_quantity: 450,
      category_id: home.id, rating: 4.4, review_count: 18940, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Milton Thermosteel Flask (1L)',
      description: 'Vacuum insulated flask that keeps beverages hot or cold for up to 24 hours. Made from 18/8 stainless steel.',
      price: 990, original_price: 1290, stock_quantity: 210,
      category_id: home.id, rating: 4.3, review_count: 8520, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=1000']
    },

    // ==========================================
    // BEAUTY & PERSONAL CARE (12 products)
    // ==========================================
    {
      name: 'Philips OneBlade Trimmer',
      description: 'Revolutionary hybrid styling tool that trims, shaves, and styles clean lines on any length of facial hair.',
      price: 1899, original_price: 2499, stock_quantity: 110,
      category_id: beauty.id, rating: 4.3, review_count: 8490, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: "L'Oreal Paris Face Serum",
      description: '1.5% Pure Hyaluronic Acid Serum. Intensely hydrates, plumps, and reduces wrinkles for radiant skin.',
      price: 599, original_price: 799, stock_quantity: 180,
      category_id: beauty.id, rating: 4.2, review_count: 14500, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Forest Essentials Massage Oil',
      description: 'Cold-pressed Ayurvedic oil with properties of black sesame and sweet almond to nourish and tone skin.',
      price: 1450, original_price: 1750, stock_quantity: 45,
      category_id: beauty.id, rating: 4.6, review_count: 1210, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Cetaphil Gentle Skin Cleanser',
      description: 'Hypoallergenic, soap-free skin cleanser clinically proven to hydrate skin while deep cleaning.',
      price: 399, original_price: 499, stock_quantity: 320,
      category_id: beauty.id, rating: 4.5, review_count: 23480, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Neutrogena Hydro Boost Water Gel',
      description: 'Clinically proven to instantly deliver 9x more hydration compared to untreated skin. Oil-free.',
      price: 950, original_price: 1150, stock_quantity: 85,
      category_id: beauty.id, rating: 4.4, review_count: 9512, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Oral-B Pro 1000 Toothbrush',
      description: 'Rechargeable electric toothbrush clinically proven to remove up to 300% more plaque along the gumline.',
      price: 3499, original_price: 4500, stock_quantity: 70,
      category_id: beauty.id, rating: 4.5, review_count: 14850, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Dyson Airwrap Multi-Styler',
      description: 'Styles hair using air instead of extreme heat. Includes barrel attachments to curl, wave, smooth, and dry.',
      price: 45900, original_price: 49900, stock_quantity: 15,
      category_id: beauty.id, rating: 4.7, review_count: 2480, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Bath & Body Works Lotion',
      description: 'Stress Relief aromatherapy body lotion with natural eucalyptus and spearmint essential oils.',
      price: 1299, original_price: 1599, stock_quantity: 60,
      category_id: beauty.id, rating: 4.5, review_count: 5310, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1556229174-5e42a09e45af?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1556229174-5e42a09e45af?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'The Body Shop Toner',
      description: 'Tea tree skin clearing mattifying toner. Sweeps away traces of makeup, impurities, and excess oil.',
      price: 895, original_price: 995, stock_quantity: 110,
      category_id: beauty.id, rating: 4.3, review_count: 4210, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'CeraVe Moisturizing Cream',
      description: 'Developed with dermatologists, this non-greasy moisturizing cream provides 24-hour hydration.',
      price: 1150, original_price: 1450, stock_quantity: 150,
      category_id: beauty.id, rating: 4.7, review_count: 38450, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Biotique Ageless Serum',
      description: 'Bio Dandelion visibly ageless serum with nutmeg oil to diminish dark spots, fine lines, and wrinkles.',
      price: 280, original_price: 350, stock_quantity: 250,
      category_id: beauty.id, rating: 4.0, review_count: 6510, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Gillette Fusion5 Razor',
      description: 'Men’s razor with 5 anti-friction blades for a shave you barely feel. Precision trimmer on back.',
      price: 699, original_price: 850, stock_quantity: 200,
      category_id: beauty.id, rating: 4.4, review_count: 10450, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1618607689531-0df85fb4a45a?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1618607689531-0df85fb4a45a?auto=format&fit=crop&q=80&w=1000']
    },

    // ==========================================
    // SPORTS & OUTDOORS (12 products)
    // ==========================================
    {
      name: 'Decathlon Quechua Bag 20L',
      description: 'Comfortable hiking backpack with padded back and straps. Thumb loops and load adjuster belt.',
      price: 999, original_price: 1499, stock_quantity: 150,
      category_id: sports.id, rating: 4.4, review_count: 5120, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Garmin Forerunner 55',
      description: 'Easy-to-use GPS running smartwatch that monitors heart rate, tracks pace/distance, and offers personalized runs.',
      price: 17990, original_price: 22990, stock_quantity: 40,
      category_id: sports.id, rating: 4.5, review_count: 3240, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1510017808632-957d5e61a455?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1510017808632-957d5e61a455?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Yonex Badminton Racket',
      description: 'Nanoflare / Nanoray Light 18i graphite shaft badminton racket. Ultra lightweight at 77 grams.',
      price: 1999, original_price: 2999, stock_quantity: 90,
      category_id: sports.id, rating: 4.2, review_count: 14890, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Coleman Camping Dome Tent',
      description: 'Weatherproof dome tent for 4 persons with quick setup. Durable frame withstands high winds.',
      price: 6990, original_price: 8990, stock_quantity: 25,
      category_id: sports.id, rating: 4.3, review_count: 1850, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Nivia Storm Football',
      description: 'Rubberized hand stitched training football. High durability on all surfaces including hard ground.',
      price: 399, original_price: 599, stock_quantity: 180,
      category_id: sports.id, rating: 4.1, review_count: 9450, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'CamelBak Eddy+ Bottle',
      description: 'BPA-free leakproof water bottle with bite valve straw cap. Convenient carry handle.',
      price: 1499, original_price: 1999, stock_quantity: 110,
      category_id: sports.id, rating: 4.4, review_count: 2310, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Fitbit Charge 6 Tracker',
      description: 'Advanced health and fitness tracker with built-in GPS, active zone minutes, and 7-day battery life.',
      price: 11999, original_price: 14999, stock_quantity: 50,
      category_id: sports.id, rating: 4.2, review_count: 4890, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Cosco Cricket Balls (6x)',
      description: 'Premium light tennis cricket balls in yellow. Specially designed for cricket tournaments.',
      price: 360, original_price: 480, stock_quantity: 300,
      category_id: sports.id, rating: 4.1, review_count: 5120, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Adidas Yoga Mat (8mm)',
      description: 'Cushioned non-slip yoga and fitness mat. Carrying strap included. Easy-to-clean textured surface.',
      price: 1899, original_price: 2499, stock_quantity: 75,
      category_id: sports.id, rating: 4.3, review_count: 2450, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Wilson US Open Racket',
      description: 'Unisex adult recreational tennis racket. Arc technology for clean stability and control.',
      price: 3499, original_price: 4500, stock_quantity: 40,
      category_id: sports.id, rating: 4.3, review_count: 1040, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1617083277987-a2de2e847c23?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1617083277987-a2de2e847c23?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Vector X Skipping Rope',
      description: 'Lightweight adjustable skipping speed rope with comfortable handles for workout training.',
      price: 199, original_price: 299, stock_quantity: 400,
      category_id: sports.id, rating: 4.0, review_count: 8940, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Lululemon Yoga Block',
      description: 'Supportive dense foam block designed to elevate poses, stretch further, and maintain alignment.',
      price: 1299, original_price: 1599, stock_quantity: 50,
      category_id: sports.id, rating: 4.7, review_count: 1120, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000']
    },

    // ==========================================
    // TOYS & GAMES (12 products)
    // ==========================================
    {
      name: 'LEGO Classic Bricks Set',
      description: 'Featuring a wide range of LEGO bricks in 29 different colors. Includes special building elements.',
      price: 1499, original_price: 1899, stock_quantity: 90,
      category_id: toys.id, rating: 4.8, review_count: 8520, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Monopoly Board Game',
      description: 'The classic fast-dealing property trading board game. Buy, sell, and trade to build your empire.',
      price: 1299, original_price: 1499, stock_quantity: 120,
      category_id: toys.id, rating: 4.5, review_count: 12450, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: "Rubik's 3x3 Classic Cube",
      description: 'The world’s favorite brain-teasing puzzle. Solve the scrambled colors for ultimate satisfaction.',
      price: 499, original_price: 599, stock_quantity: 250,
      category_id: toys.id, rating: 4.6, review_count: 9480, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Hot Wheels 5-Car Pack',
      description: 'Deliver instant fuel for racing fun with five highly detailed die-cast scale model vehicles.',
      price: 449, original_price: 499, stock_quantity: 180,
      category_id: toys.id, rating: 4.5, review_count: 6790, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Uno Flip Card Game',
      description: 'The standard matching card game with an exciting new twist — a double-sided deck and dynamic Action cards.',
      price: 199, original_price: 249, stock_quantity: 400,
      category_id: toys.id, rating: 4.7, review_count: 14890, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Hasbro Jenga Classic',
      description: 'Pull out a block without crashing the stack! Win by being the last player to remove a block.',
      price: 799, original_price: 999, stock_quantity: 150,
      category_id: toys.id, rating: 4.5, review_count: 5310, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Funskool Catan Game',
      description: 'The internationally acclaimed board game of trade, building, settlement, and resource harvesting.',
      price: 2999, original_price: 3499, stock_quantity: 35,
      category_id: toys.id, rating: 4.8, review_count: 2410, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Nerf Elite 2.0 Commander',
      description: 'Nerf blaster with a 6-dart rotating drum. Fires darts up to 90 feet. 12 official Nerf darts included.',
      price: 1199, original_price: 1499, stock_quantity: 60,
      category_id: toys.id, rating: 4.4, review_count: 3820, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1590157159903-6911475766b9?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1590157159903-6911475766b9?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Barbie Dreamhouse Dollhouse',
      description: 'Stands over 3 feet tall with 3 stories, 8 rooms, a carport, and an outdoor slide into a swimming pool.',
      price: 18999, original_price: 22000, stock_quantity: 10,
      category_id: toys.id, rating: 4.7, review_count: 1250, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Ravensburger Space Puzzle',
      description: '1000 piece jigsaw puzzle for adults featuring a highly detailed cosmic solar system illustration.',
      price: 1599, original_price: 1999, stock_quantity: 45,
      category_id: toys.id, rating: 4.6, review_count: 1980, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Fisher-Price Rock-a-Stack',
      description: 'Classic infant stacking toy with 5 colorful rings and a bat-at rocker base for physical development.',
      price: 399, original_price: 499, stock_quantity: 150,
      category_id: toys.id, rating: 4.6, review_count: 5120, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1531211624321-2e690f05d5fa?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1531211624321-2e690f05d5fa?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Ticket to Ride Board Game',
      description: 'Cross-country train adventure game where players collect train cards to claim railway routes.',
      price: 3499, original_price: 3999, stock_quantity: 20,
      category_id: toys.id, rating: 4.8, review_count: 3120, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=1000']
    },

    // ==========================================
    // AUTOMOTIVE (12 products)
    // ==========================================
    {
      name: 'Bosch Aerotwin Wiper Blades',
      description: 'Dual-rubber wiper design with graphite coating for quiet, streak-free visibility in heavy rains.',
      price: 1290, original_price: 1800, stock_quantity: 140,
      category_id: automotive.id, rating: 4.4, review_count: 3840, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: '70mai Smart Dash Cam',
      description: 'Dash cam featuring 1944P resolution, built-in GPS, ADAS system, and 24-hour parking monitor.',
      price: 9999, original_price: 12999, stock_quantity: 45,
      category_id: automotive.id, rating: 4.5, review_count: 2180, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Michelin Digital Tyre Inflator',
      description: 'Portable high-pressure digital tyre inflator with auto shut-off function and LED utility light.',
      price: 3499, original_price: 4500, stock_quantity: 80,
      category_id: automotive.id, rating: 4.4, review_count: 5310, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: "Meguiar's Gold Class Wash",
      description: "Premium car wash shampoo and conditioner that washes and conditions your vehicle's paint in one step.",
      price: 1590, original_price: 1990, stock_quantity: 95,
      category_id: automotive.id, rating: 4.6, review_count: 8940, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Wavex Matte Dashboard Polish',
      description: 'Cleans, shines, and protects dashboard surfaces from UV fading, cracking, and dust accumulation.',
      price: 399, original_price: 499, stock_quantity: 120,
      category_id: automotive.id, rating: 4.1, review_count: 3120, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Black+Decker Car Vacuum',
      description: '12V DC corded hand vacuum with cyclonic action suction power and convenient 5-meter cord.',
      price: 2299, original_price: 2999, stock_quantity: 65,
      category_id: automotive.id, rating: 4.1, review_count: 4890, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Philips Headlight Bulb (2x)',
      description: 'X-tremeVision G-force automotive halogen headlight bulbs. Produces up to 130% brighter beam.',
      price: 850, original_price: 1200, stock_quantity: 110,
      category_id: automotive.id, rating: 4.2, review_count: 1420, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Shell Helix Ultra Engine Oil',
      description: 'Fully synthetic motor engine oil (5W-40). Provides maximum engine protection and wear reduction.',
      price: 3250, original_price: 3950, stock_quantity: 70,
      category_id: automotive.id, rating: 4.7, review_count: 6510, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Solimo Waterproof Car Cover',
      description: 'Polyester elasticized dust and waterproof silver car cover with secure buckle straps.',
      price: 1499, original_price: 1999, stock_quantity: 80,
      category_id: automotive.id, rating: 4.0, review_count: 3720, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Armor All Protectant Wipes',
      description: 'Pack of 30 cleaning and protection wipes designed to keep vinyl, rubber, and plastic surfaces clean.',
      price: 499, original_price: 599, stock_quantity: 150,
      category_id: automotive.id, rating: 4.3, review_count: 2450, is_prime: false,
      main_image_url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Ambi Pur Car Air Freshener',
      description: 'Sweet citrus scent car air freshener gel. Spill-proof design provides up to 30 days of consistent aroma.',
      price: 299, original_price: 349, stock_quantity: 200,
      category_id: automotive.id, rating: 4.1, review_count: 8520, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000']
    },
    {
      name: 'Baseus Magnetic Car Mount',
      description: 'Strong neodymium magnetic dashboard telephone holder mount. 360-degree rotation adjustment.',
      price: 799, original_price: 999, stock_quantity: 110,
      category_id: automotive.id, rating: 4.4, review_count: 1850, is_prime: true,
      main_image_url: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000',
      image_urls: ['https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000']
    }
  ]);

  console.log('✅ Seeded 8 categories and 96 products successfully!');
}

module.exports = seed;

if (require.main === module) {
  seed().catch(e => { 
    console.error(e); 
    process.exit(1); 
  }).then(() => {
    process.exit(0);
  });
}


// Array of objects with category names, api urls, route, and type
export const categories = [
  {
    name: "Cell Phones",
    url: "/cell-phones",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat209400050001))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Desktops & All-in-One Computers",
    url: "/desktops",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0501000))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Digital Cameras",
    url: "/digital-cameras",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0401000))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Health Fitness & Beauty",
    url: "/health-fitness-beauty",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat242800050021))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Headphones",
    url: "/headphones",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0204000))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Home Audio",
    url: "/home-audio",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat241600050001))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Home Automation & Security",
    url: "/home-security",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat254000050002))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "iPad, Tablets & E-Readers",
    url: "/tablets",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat209000050006))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Laptops",
    url: "/laptops",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Nintendo",
    url: "/nintendo",
    api: `https://api.bestbuy.com/v1/products((search=Nintendo)&customerReviewCount>=50&customerReviewAverage>=3.5)?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "PlayStation",
    url: "/playstation",
    api: `https://api.bestbuy.com/v1/products((search=Playstation))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Portable and Wireless Speakers",
    url: "/portable-speakers",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat310200050004))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Ranges, Cooktops & Ovens",
    url: "/ovens",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0904000))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Refrigerators",
    url: "/refrigerators",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0901000))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Kitchen Appliances",
    url: "/kitchen-appliances",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0912000))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "TVs",
    url: "/tvs",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0101000))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Washers and Dryers",
    url: "/washers-and-dryers",
    api: `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0910000))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "Xbox",
    url: "/xbox",
    api: `https://api.bestbuy.com/v1/products((search=Xbox))?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "category",
  },
  {
    name: "iPad Promo",
    url: "/ipad-promo",
    api: `https://api.bestbuy.com/v1/products((search=ipad)&type!=BlackTie)?apiKey=${process.env.REACT_APP_API_KEY}&sort=salePrice.dsc&pageSize=20&format=json`,
    type: "promo",
  },
  {
    name: "Outlet Deals",
    url: "/outlet-deals",
    api: `https://api.bestbuy.com/v1/products(percentSavings>10&onSale=true&type=HardGood&customerReviewCount>50&customerReviewAverage>=3.5)?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20&format=json`,
    type: "promo",
  },
];

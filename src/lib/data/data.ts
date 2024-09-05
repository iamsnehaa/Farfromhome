export interface iProduct {
    
    name: string;
    price: string;
    image: string;
    description: string;
  }
  
  export const data: iProduct[] = [];
  
  const Products = [
    {
      name: "Wheat",
      price: "$20 per 100 kg",
      image: "/wheat.jpg",
      description: "A bundle of golden wheat grains in a sack, with some wheat stalks lying nearby."
    },
    {
      name: "Rice",
      price: "$25 per 100 kg",
      image: "/rice.jpg",
      description: "A heap of white rice grains placed in a wooden bowl with rice stalks in the background."
    },
    {
      name: "Maize (Corn)",
      price: "$15 per 100 kg",
      image: "/corn.jpg",
      description: "Yellow corn kernels spilled out of a burlap bag with a cob of corn next to it."
    },
    {
      name: "Sugarcane",
      price: "$30 per ton",
      image: "/sugarcane.jpg",
      description: "Stalks of sugarcane arranged in a bundle, showing the green and brown textures of the canes."
    },
    {
      name: "Potato",
      price: "$10 per 50 kg",
      image: "/potatoes.jpg",
      description: "Fresh brown potatoes piled in a wooden crate with dirt still clinging to them, symbolizing freshness from the farm."
    },
    {
      name: "Tomato",
      price: "$12 per 50 kg",
      image: "/tomato.jpg",
      description: "Ripe red tomatoes scattered on a table, with some still attached to their green vines."
    },
    {
      name: "Onion",
      price: "$8 per 50 kg",
      image: "/onion.jpg",
      description: "A pile of reddish-brown onions with a rustic sack in the background."
    },
    {
      name: "Cotton",
      price: "$40 per bale (227 kg)",
      image: "/cotton.jpg",
      description: "Fluffy white cotton balls arranged in a basket with a cotton field in the background."
    },
  ];
  
  // Push data into the array
  Products.forEach((product) => data.push(product));
  
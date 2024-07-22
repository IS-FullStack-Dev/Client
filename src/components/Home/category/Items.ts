export interface Item {
    id: number;
    name: string;
    description: string;
    oldamount: string;
    newamount: string;
    imageUrl: string;
    rating: number;
    reviewsCount: number;
  }
  
  export const items: Item[] = [
    {
      id: 1,
      name: "Sausage Rolls",
      description: "Enjoy our tasty, mouth watering sausage rolls",
      oldamount: "N350.00",
      newamount: "₦250.00",
      imageUrl: "sausage-rolls.png",
      rating: 1,
      reviewsCount: 4,
    },
    {
      id: 2,
      name: "Cinnamon Rolls",
      description: "Enjoy our tasty, mouth watering sausage rolls",
      oldamount: "N350.00",
      newamount: "₦250.00",
      imageUrl: "cinnamon-rolls.png",
      rating: 1,
      reviewsCount: 4,
    },
    {
      id: 3,
      name: "Buns with Raisins",
      description: "Enjoy our tasty, mouth watering sausage rolls",
      oldamount: "N350.00",
      newamount: "₦250.00",
      imageUrl: "buns-with-raisins.png",
      rating: 1,
      reviewsCount: 4,
    },
    {
      id: 4,
      name: "Glazed Doughnut",
      description: "Enjoy our tasty, mouth watering sausage rolls",
      oldamount: "N350.00",
      newamount: "₦250.00",
      imageUrl: "doughnut.png",
      rating: 1,
      reviewsCount: 4,
    }
  ];
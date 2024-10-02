type ProductItem = {
  id: number;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type ProductItemWithDiscount = ProductItem & { discountAmount: number };

const val: ProductItemWithDiscount = {
  id: 3,
  name: "sia",
  type: "a",
  price: 100,
  imageUrl: "http://example.com/image.jpg",
  quantity: 10, //하나라도 누락되면 에러
  discountAmount: 20,
};
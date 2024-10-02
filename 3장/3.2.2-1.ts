type CardItem = {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  address: string;
  file: boolean
};

type ProductItem = {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

type PromotionEventItem = ProductItem | CardItem;

const printPromotionItem = (item: PromotionEventItem) => {
  console.log(item.name); // O
  // console.log(item.quantity); // 컴파일 에러 발생
};

// 공통적인 부분 외에 CardItem 속성들 다 갖고 있던가
const val: PromotionEventItem = {
  id: 3,
  name: "sia",
  type: "a",
  imageUrl: "http://example.com/image.jpg",
  address: "abcn eft ...",
  file: true
};

// 공통적인 부분 외에 ProductItem 속성들 다 갖고 있던가
const val2: PromotionEventItem = {
  id: 3,
  name: "sia",
  type: "a",
  imageUrl: "http://example.com/image.jpg",
  price: 0,
  quantity: 500,
  file: true // CardItem 일부만 갖고 있어돈 ok
};
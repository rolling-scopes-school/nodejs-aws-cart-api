interface ICreatedProduct {
  description: string;
  price: number;
  title: string;
  count: number;
};
interface IProduct {
  id: string;
  description: string;
  price: number;
  title: string;
};

interface IStock {
  product_id: string;
  count: number;
};

export { ICreatedProduct, IProduct, IStock };

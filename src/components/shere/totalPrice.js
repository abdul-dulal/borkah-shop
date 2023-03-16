export const totalPrice = (data) => {
  const price = data?.map(({ price, quantity }) => quantity * price);

  const granPrice =
    price?.length > 0 &&
    price.reduce((x, y) => {
      return x + y;
    });
  return granPrice;
};


export const money = (value: number | string = 0): string => {
  const numericValue = typeof value === "string" ? parseFloat(value) : value;
  return numericValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
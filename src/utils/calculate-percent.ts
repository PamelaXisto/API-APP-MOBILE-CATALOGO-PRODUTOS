export const calculatePercent = (valor: number, porcentagem: number) => {
  return valor - valor * (porcentagem / 100);
};
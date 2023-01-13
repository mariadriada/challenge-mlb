export const goToSearch = (
  query: string,
  navigate: (q: string) => void
): void => {
  navigate(`/items?search=${query}`);
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

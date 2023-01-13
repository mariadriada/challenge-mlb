/**
 * Function goToSearch: Redirect to search page
 * @params:
 *  - query: string, text to search
 *  - navidage: instace if react router navidator
 */
export const goToSearch = (
  query: string,
  navigate: (q: string) => void
): void => {
  navigate(`/items?search=${query}`);
};

/**
 * Function formatter: Apply formater to price value
 * return: Intl object
 */
export const formatter = () =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

/**
 * Function sortArray: Sort descending string array bythe number of repetitions
 * @params:
 *  - dataList: Array<string>, data source to sort
 * return: string array with data sorted
 */
export const sortArrayDesc = (dataList: Array<string>) => {
  type SortArray = {
    item: string;
    count: number;
  };
  const newArray: Array<SortArray> = [];
  const result: Array<string> = [];

  dataList.forEach((item) => {
    const count = dataList.filter((i) => i === item).length;
    const founded = newArray.find((one) => one.item === item);
    if (!founded) {
      newArray.push({ item, count });
    }
  });
  newArray
    .sort((a, b) => b.count - a.count)
    .forEach((i) => {
      result.push(i.item);
    });
  return result;
};

import { enumSortProperty } from "../redux/filter/types";

type ValuesItem = {
  name: string;
  sortProperty: enumSortProperty;
};

const values: ValuesItem[] = [
  { name: "popularity (1-5)", sortProperty: enumSortProperty.RATING_DESC },
  { name: "popularity (5-1)", sortProperty: enumSortProperty.RATING_ASC },
  { name: "price (1-1500)", sortProperty: enumSortProperty.PRICE_DESC },
  { name: "price (1500-1)", sortProperty: enumSortProperty.PRICE_ASC },
  { name: "alphabetically (A-Z)", sortProperty: enumSortProperty.NAME_DESC },
  { name: "alphabetically (Z-А)", sortProperty: enumSortProperty.NAME_ASC },
];

export default values;

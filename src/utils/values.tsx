import { enumSortProperty } from "../redux/slices/filter/types";

type ValuesItem = {
  name: string;
  sortProperty: enumSortProperty;
};

const values: ValuesItem[] = [
  { name: "по пулярности (1-5)", sortProperty: enumSortProperty.RATING_DESC },
  { name: "по пулярности (5-1)", sortProperty: enumSortProperty.RATING_ASC },
  { name: "по цене (1-1500)", sortProperty: enumSortProperty.PRICE_DESC },
  { name: "по цене (1500-1)", sortProperty: enumSortProperty.PRICE_ASC },
  { name: "по алфавиту (A-Я)", sortProperty: enumSortProperty.NAME_DESC },
  { name: "по алфавиту (Я-А)", sortProperty: enumSortProperty.NAME_ASC },
];

export default values;

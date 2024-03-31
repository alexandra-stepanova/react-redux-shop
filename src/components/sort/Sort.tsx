import React from "react";
import { useDispatch } from "react-redux";
import { setSortType } from "../../redux/filter/slice";
import { SortFilter } from "../../redux/filter/types";
import values from "../../utils/values";

type SortTypes = {
  sortType: SortFilter;
};

const Sort: React.FC<SortTypes> = React.memo(({ sortType }) => {
  const dispatch = useDispatch();
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const handlerOnOpen = (index: any) => {
    dispatch(setSortType(index));
    setIsOpenPopup(false);
  };

  // React.useEffect(() => {
  //   const handleCloseByOverlay = (event: MouseEvent) => {
  //     const _event = event as MouseEvent & {
  //       path: Node[];
  //     };
  //     if (sortRef.current && !_event.path.includes(sortRef.current)) {
  //       setIsOpenPopup(false);
  //     }
  //   };

  //   document.body.addEventListener("click", handleCloseByOverlay);
  //   return () => {
  //     document.body.removeEventListener("click", handleCloseByOverlay);
  //   };
  // }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={() => setIsOpenPopup(!isOpenPopup)}>
          {sortType.name}
        </span>
      </div>
      {isOpenPopup ? (
        <div className="sort__popup">
          <ul className="values">
            {values.map((value, index) => {
              return (
                <li
                  className={`value ${
                    sortType.sortProperty === value.sortProperty ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handlerOnOpen(value)}
                >
                  {value.name}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
});

export default Sort;

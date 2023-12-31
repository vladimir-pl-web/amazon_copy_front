import { ChangeEvent, FC, useEffect, useState } from "react";
import classes from "./range.module.scss";
import { IRanges } from "./types";
import { useDebounce } from "@/hooks/useDebounce";

const Ranges: FC<IRanges> = ({
  min = 0,
  max,
  onChangeFrom,
  onChangeTo,
  fromInit = "0",
  toInit = "2000",
}) => {
  const [values, setValues] = useState({ from: fromInit, to: toInit } || {});
  const { from, to } = values;
  const debouncedFrom = useDebounce(from, 500);
  const debouncedTo = useDebounce(to, 500);

  useEffect(() => {
    onChangeFrom(debouncedFrom);
  }, [debouncedFrom]);

  useEffect(() => {
    onChangeTo(debouncedTo);
  }, [debouncedTo]);

  const onValueHandler = (
    e: ChangeEvent<HTMLInputElement>,
    key: "from" | "to"
  ) => {
    const updatedVal = { ...values };
    updatedVal[key] = e.target.value;
    setValues(updatedVal);
  };
  return (
    <div className={classes.range}>
      <h6>Select by price range:</h6>
      <input
        min={min}
        max={max}
        type="number"
        placeholder="From"
        value={from}
        className="w-24 ma-w-28"
        onChange={(e) => onValueHandler(e, "from")}
      />
      {" - "}
      <input
        min={min}
        max={max}
        type="number"
        placeholder="To"
        value={to}
        className="w-24 ma-w-28"
        onChange={(e) => onValueHandler(e, "to")}
      />
    </div>
  );
};
export default Ranges;

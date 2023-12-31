import classes from "./squareB.module.scss";
import cn from "classnames";
import { FC } from "react";
import { IButtonSquare } from "./types";
import Button from "../button";

const SquareButton: FC<IButtonSquare> = ({ Icon, onClickHandle, number }) => {
  return (
    <Button
      onClick={onClickHandle}
      variant="dark"
      size="sm"
      className={classes.btnSquare}
    >
      {!!number && <span className={cn(classes.number)}>{number}</span>}
      <Icon className={cn(classes.icon)} />
    </Button>
  );
};

export default SquareButton;

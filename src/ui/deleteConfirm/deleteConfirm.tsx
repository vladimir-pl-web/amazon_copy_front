import { FC } from "react";
import classes from "./delete.module.scss";
import Heading from "../heading/heading";
import Button from "../buttons/button";
import { capitalize } from "@/utils/capitalize";

const DeleteConfirm: FC<{
  title: string;
  onDelete: () => void;
  onClose: () => void;
}> = ({ title, onDelete, onClose }) => {
  return (
    <div className={classes.delete}>
      <Heading>
        <span className={classes.text}>{`Delete ${capitalize(title)}?`}</span>
      </Heading>
      <div className={classes.btns}>
        <Button className={classes.btn} onClick={onDelete} variant={"dark"}>
          Delete
        </Button>
        <Button className={classes.btn} onClick={onClose} variant={"light"}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirm;

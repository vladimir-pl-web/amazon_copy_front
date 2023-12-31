import { ICategory } from "@/store/category/types";

export interface ICategorySelect extends Pick<ICategory, "id" | "name"> {
  key: ICategory["id"];
  label: ICategory["name"];
}

export interface ISelect {
  title: string;
  current?: string;
  onChange: (key: number) => void;
  options: ICategorySelect[];
}

export enum IProductAction {
  Add = "add",
  Edit = "edit",
}

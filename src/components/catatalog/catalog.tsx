import { FC, PropsWithChildren, useMemo } from "react";
import { ICatalog } from "./types";
import classes from "./catalog.module.scss";
import cn from "classnames";
import CatalogItem from "./catalogItem/catalogItem";
import Heading from "@/ui/heading/heading";
import DropDown from "@/ui/dropdown/drop";
import { dropItems } from "./constants";
import { useFilters } from "@/hooks/useFilters";
import { ISortType } from "@/ui/dropdown/types";
import { EnumProductsSort, IProduct } from "@/store/product/types";

const Catalog: FC<PropsWithChildren<ICatalog>> = ({
  title = "product List",
  products,
  paginationLength = 0,
  children,
  refetch,
  isFilter,
  className,
  ...rest
}) => {
  const { updateParams, queryParams } = useFilters();
  const { sort } = queryParams;

  const setSort = (data: ISortType) => {
    updateParams("sort", data.key.toString());
    refetch && refetch();
  };
  const list = useMemo(() => {
    return products.map((el: IProduct) => {
      return (
        <li key={el.id}>
          <CatalogItem product={el} />
        </li>
      );
    });
  }, [products]);

  return (
    <div className={cn(classes.wrapper, className)}>
      <div className={classes.header}>
        <Heading>{title}</Heading>
        {products && isFilter && (
          <DropDown<EnumProductsSort>
            value={dropItems.find((el) => el.key === sort)}
            onSelect={setSort}
            items={dropItems}
            title={`Sorted By: `}
          />
        )}
      </div>

      <ul {...rest} className={cn(classes.catalog)}>
        {list ? list : ""}
      </ul>
    </div>
  );
};

export default Catalog;

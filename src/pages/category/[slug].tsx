import Catalog from "@/components/catatalog/catalog";
import { GetStaticProps, GetStaticPaths } from "next";
import Category from "@/services/caterory/category.service";
import Products from "@/services/products/products.service";
import { ByFeature, ICategory } from "@/store/category/types";
import { IProduct } from "@/store/product/types";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";
import { NextPage } from "next";
import CategorySortExplorer from "@/components/screens/categorySortExplorer/categorySortExplorer";
import { capitalize } from "@/utils/capitalize";

const CategoryPage: NextPage<{ products: IProduct[]; category: ICategory }> = ({
  products,
  category,
}) => {
  return (
    <Meta title={category.name}>
      <Layout>
        <CategorySortExplorer
          initialProducts={products || []}
          title={capitalize(category.name)}
        />
      </Layout>
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await Category.getAllCategories();
  const paths = categories.data.map((el) => {
    return { params: { slug: el.slug } };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: products } = await Products.getProductByCategory(
    params?.slug as string,
    "newest"
  );

  const { data: category } = await Category.getCategoryByFeature(
    ByFeature.Slug,
    params?.slug as string,
  );

  return {
    props: {
      products,
      category,
    },
  };
};

export default CategoryPage;

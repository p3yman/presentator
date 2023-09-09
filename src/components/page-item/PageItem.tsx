import { Page } from "../../utils/types";

interface PageItemProps {
  page: Page;
}

export const PageItem = ({ page }: PageItemProps) => {
  return <div>{page.h1}</div>;
};

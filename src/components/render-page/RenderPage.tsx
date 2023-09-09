import { DocumentSettings, Page } from "../../utils/types";
import Layouts from "../layouts";

interface RenderPageProps {
  page: Page;
  settings: DocumentSettings;
  onChange: (page: Page) => void;
  editable?: boolean;
}

console.log({ Layouts });

export const RenderPage: React.FC<RenderPageProps> = ({
  page,
  settings,
  onChange,
  editable = true,
}) => {
  const Layout =
    page.layout in Layouts ? Layouts[page.layout] : Layouts["layout-1"];

  return (
    <div className="p-8 grow flex items-center justify-center">
      <article className="w-full aspect-video border border-slate-200 bg-white shadow-xl">
        <Layout
          page={page}
          onChange={onChange}
          settings={settings}
          editable={editable}
        />
      </article>
    </div>
  );
};

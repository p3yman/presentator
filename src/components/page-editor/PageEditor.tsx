import { DocumentSettings, Page } from "../../utils/types";
import { Layout1 } from "../layouts";

interface PageEditorProps {
  page: Page;
  settings: DocumentSettings;
  onChange: (page: Page) => void;
}

export const PageEditor: React.FC<PageEditorProps> = ({
  page,
  settings,
  onChange,
}) => {
  return (
    <div className="p-8 grow flex items-center justify-center">
      <Layout1 page={page} onChange={onChange} settings={settings} editable />
    </div>
  );
};

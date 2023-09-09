import { Layout } from "../../../utils/types";
import { EditableContent } from "../../editable-content/EditableContent";

export const Layout1 = ({
  page,
  settings,
  editable = false,
  onChange,
}: Layout) => {
  return (
    <article className="w-full aspect-video border border-slate-200">
      <div className="flex flex-col h-full">
        <div className="h-2/3 text-center flex items-center justify-center">
          <EditableContent
            id="h1"
            content={page.h1}
            className="text-5xl font-bold m-8 p-1"
            placeholder="Enter your title"
            editable={editable}
            onBlur={(content) => {
              onChange?.({
                ...page,
                h1: content,
              });
            }}
          />
        </div>
        <div
          className="text-center grow flex items-center justify-center text-white"
          style={{ backgroundColor: page.bg ?? "#8b5cf6" }}
        >
          <EditableContent
            id="h2"
            content={page.h2}
            className="text-4xl m-8 p-1"
            placeholder="Enter your second title"
            editable={editable}
            onBlur={(content) => {
              onChange?.({
                ...page,
                h2: content,
              });
            }}
          />
        </div>
      </div>
    </article>
  );
};

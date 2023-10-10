import { Layout } from "../../../utils/types";
import { EditableContent } from "../../editable-content/EditableContent";

export const Layout4 = ({ page, editable = false, onChange }: Layout) => {
  return (
    <div className="flex h-full">
      <div
        style={{ backgroundColor: page.bg ?? "#8b5cf6" }}
        className="h-full w-1/3"
      ></div>
      <div
        className="text-center flex flex-col gap-4 justify-center grow p-8"
        style={{ color: page.bg ?? "#8b5cf6" }}
      >
        <EditableContent
          id="h1"
          content={page.h1}
          className="text-5xl font-bold p-2 bg-white inline-flex"
          placeholder="Enter your title"
          editable={editable}
          onBlur={(content) => {
            onChange?.({
              ...page,
              h1: content,
            });
          }}
        />
        <EditableContent
          id="content"
          content={page.content}
          className="p-2 text-black inline-flex"
          placeholder="Enter your text"
          editable={editable}
          onBlur={(content) => {
            onChange?.({
              ...page,
              content,
            });
          }}
        />
      </div>
    </div>
  );
};

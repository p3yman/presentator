import { Layout } from "../../../utils/types";
import { EditableContent } from "../../editable-content/EditableContent";

export const Layout1 = ({ page, editable = false, onChange }: Layout) => {
  return (
    <div
      className="flex justify-center items-center h-full"
      style={{ backgroundColor: page.bg ?? "#8b5cf6" }}
    >
      <div className="text-center flex items-center justify-center">
        <EditableContent
          id="h1"
          content={page.h1}
          className="text-5xl font-bold p-1 text-white"
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
    </div>
  );
};

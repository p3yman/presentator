import { Layout } from "../../../utils/types";
import { EditableContent } from "../../editable-content/EditableContent";

export const Layout3 = ({ page, editable = false, onChange }: Layout) => {
  return (
    <div
      className="flex justify-center items-center h-full"
      style={{ backgroundColor: page.bg ?? "#8b5cf6" }}
    >
      <div
        className="text-center flex items-center justify-center"
        style={{ color: page.bg ?? "#8b5cf6" }}
      >
        <EditableContent
          id="h1"
          content={page.h1}
          className="text-5xl font-bold p-8 bg-white"
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

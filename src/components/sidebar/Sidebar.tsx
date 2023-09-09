import clsx from "clsx";
import type { DroppableProvided } from "react-beautiful-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Page } from "../../utils/types";
import { PageItemWrapper } from "../page-item-wrapper/PageItemWrapper";
import { PageItem } from "../page-item/PageItem";

interface SidebarProps {
  pages: Page[];
  currentPage: number;
  onPageChange: (index: number) => void;
  onAddPage: () => void;
  onDragEnd: (result: any) => void;
}

export const Sidebar = ({
  pages,
  currentPage,
  onPageChange,
  onAddPage,
  onDragEnd,
}: SidebarProps) => {
  return (
    <aside className="p-8 h-full w-64 border-r border-r-slate-200 shrink-0">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided: DroppableProvided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col"
            >
              {pages.map((page: Page, index) => (
                <Draggable key={page.id} draggableId={page.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={clsx(
                        snapshot.isDragging ? "opacity-50" : "opacity-100",
                        "transition-opacity mb-4"
                      )}
                    >
                      <PageItemWrapper
                        onClick={() => onPageChange(index)}
                        index={index}
                        active={index === currentPage}
                      >
                        <PageItem page={page} />
                      </PageItemWrapper>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <PageItemWrapper onClick={onAddPage}>
        <div className="text-4xl leading-none flex items-center justify-center text-slate-400 hover:text-blue-500">
          +
        </div>
      </PageItemWrapper>
    </aside>
  );
};

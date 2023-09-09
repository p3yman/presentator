import { useRef, useState } from "react";
import * as sanitizeHtml from "sanitize-html";
import { clsx } from "clsx";

interface EditableContentProps {
  id: string;
  content?: string;
  className?: string;
  placeholder?: string;
  alwaysShowPlaceholder?: boolean;
  editable?: boolean;
  onFocus?: () => void;
  onInput?: (content: string) => void;
  onBlur?: (content: string) => void;
  onKeyEnter?: (content: string) => void;
  onKeyDownOnEnd?: () => void;
  onKeyUpOnStart?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const EditableContent = ({
  id,
  content = "",
  className = "",
  placeholder,
  alwaysShowPlaceholder = true,
  editable = true,
  onFocus,
  onInput,
  onBlur,
  onKeyDown,
}: EditableContentProps) => {
  const editableRef = useRef<HTMLDivElement>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(
    content === "" &&
      (alwaysShowPlaceholder || document.activeElement === editableRef.current)
  );

  const handleOnFocus = () => {
    setShowPlaceholder(content === "");
    onFocus?.();
  };

  const handleOnInput = (e: React.FormEvent<HTMLDivElement>) => {
    setShowPlaceholder(e.currentTarget.innerHTML === "");
    onInput?.(e.currentTarget.innerHTML);
  };

  const handleOnBlur = (e: React.FormEvent<HTMLDivElement>) => {
    setShowPlaceholder(
      alwaysShowPlaceholder && e.currentTarget.innerHTML === ""
    );
    onBlur?.(sanitizeHtml(e.currentTarget.innerHTML));
  };

  return (
    <div
      id={`block-${id}`}
      ref={editableRef}
      contentEditable={editable}
      className={clsx(
        "focus-visible:outline-none focus-visible:ring-4",
        className,
        showPlaceholder &&
          "after:inline-block after:content-[attr(data-placeholder)] after:text-gray-300",
        editable && `cursor-text`
      )}
      data-placeholder={placeholder}
      onFocus={handleOnFocus}
      onInput={handleOnInput}
      onBlur={handleOnBlur}
      onKeyDown={onKeyDown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export interface DocumentSettings {
  font: string;
  bg: string;
  color: string;
}

export interface Page {
  id: string;
  h1: string;
  h2: string;
  content: string;
  bg: string;
  layout: string;
}

export interface Layout {
  page: Page;
  settings: DocumentSettings;
  editable?: boolean;
  onChange?: (page: Page) => void;
}

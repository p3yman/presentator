import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { faker } from "@faker-js/faker";
import { Layout } from "./components/layout/Layout";
import { DocumentSettings, Page } from "./utils/types";
import { Sidebar } from "./components/sidebar/Sidebar";
import { createPage } from "./utils/createPage";
import { PageEditor } from "./components/page-editor/PageEditor";

function App() {
  const [data, saveData] = useLocalStorage<{
    settings: DocumentSettings;
    pages: Page[];
  }>("data", {
    settings: {
      font: "Inter",
      bg: "#C63D2F",
      color: "#fff",
    },
    pages: Array.from({ length: 3 }, () =>
      createPage({
        h1: faker.company.buzzPhrase(),
        h2: faker.lorem.words(5),
        content: faker.lorem.text(),
        bg: faker.color.rgb(),
        layout: "theme-1",
      })
    ),
  });
  const [settings, setSettings] = useState<DocumentSettings>(data.settings);
  const [pages, setPages] = useState<Page[]>(data.pages);
  const [currentPage, setCurrentPage] = useState(0);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newPages = Array.from(pages);
    const [reorderedItem] = newPages.splice(result.source.index, 1);
    newPages.splice(result.destination.index, 0, reorderedItem);

    setPages(newPages);
  };

  useEffect(() => {
    saveData({
      settings,
      pages,
    });
  }, [settings, pages, saveData]);

  return (
    <Layout>
      <Sidebar
        pages={pages}
        currentPage={currentPage}
        onPageChange={(index) => setCurrentPage(index)}
        onAddPage={() => {
          setPages((pages) => [...pages, createPage()]);
          setCurrentPage(pages.length);
        }}
        onDragEnd={onDragEnd}
      />
      <PageEditor
        page={pages[currentPage]}
        settings={settings}
        onChange={(page) => {
          setPages((pages) =>
            pages.map((p, i) => (i === currentPage ? page : p))
          );
        }}
      />
    </Layout>
  );
}

export default App;

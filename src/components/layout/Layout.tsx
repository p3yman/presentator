interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="p-8 border-b border-b-slate-200">
        <h1>Presentor</h1>
      </header>
      <main className="grow flex w-full">{children}</main>
    </div>
  );
};

import "@/styles/globals.css";

export const metadata = {
  title: "Quotes",
  description: "Discover quotes from here on out",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;

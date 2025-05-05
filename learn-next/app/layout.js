export const metadata = {
  title: {
    template: "%s | Brandure",
    default: "Home | Brandure",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "red" }}>
          <h1>Header</h1>
        </header>
        <div>{children}</div>
        <footer style={{ background: "brown" }}>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}

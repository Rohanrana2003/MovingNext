export const metadata = {
  title: {
    default: "Services",
    // absolute: "Services",
  },
};
export default function layout({ children }) {
  return (
    <div>
      <h1>Constant Services Layout</h1>
      <div>{children}</div>
    </div>
  );
}

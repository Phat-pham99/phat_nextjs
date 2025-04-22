

export default function PublicLayout({ children }) {
  return (
    <div className="text-center">
        <h1 className="text-blue-800 size-10">This is Public route !</h1>
        <main>{children}</main>
    </div>
  );
}
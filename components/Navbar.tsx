export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">
        DriveEase
      </h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Cars</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
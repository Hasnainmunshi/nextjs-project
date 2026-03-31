export default function Loading() {
  return (
    <div className="max-w-md mx-auto p-6 space-y-2">
      <div className="skeleton h-6 w-1/2"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-1/3"></div>
    </div>
  );
}

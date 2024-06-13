export default function NotFound() {
  return (
    <div className="flex gap-4 flex-col items-center justify-center">
      <h1 className="text-6xl">404</h1>
      <h2 className="text-4xl">Page Not Found</h2>
      <a href="/" className="underline text-blue-500">
        Home page
      </a>
    </div>
  )
}

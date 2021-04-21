export default function PageTitle({ children }) {
  return (
    <h1 className="text-3xl font-bold leading-9 tracking-tight text-green-400 dark:text-gray-100 sm:text-4xl capitalize sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}

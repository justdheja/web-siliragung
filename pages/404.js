import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="h-screen bg-not-found flex flex-col items-center text-white justify-center">
      <div className="text-9xl font-bold">404</div>
      <div className="">Maaf tidak ditemukan</div>
      <Link href="/">
        <a className="p-1 px-2 font-semibold rounded bg-primary my-2">Home</a>
      </Link>
    </div>
  );
}
 
export default NotFound;
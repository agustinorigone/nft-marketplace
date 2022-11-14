/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="bg-black border-b p-6 flex justify-between items-center">
        <Link href="/">
          <p className="text-4xl font-bold text-pink-500 cursor-pointer">Tutiverse</p>
        </Link>
        <div className="flex">
          <Link href="/">
            <a className="mr-6 text-pink-500 font-bold">
              Explore
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500 font-bold">
              Create
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500 font-bold">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500 font-bold">
              My Listings
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
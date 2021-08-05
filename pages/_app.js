import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
	Router.events.on("routeChangeStart", () => {
		return (
		<div className="h-screen text-center text-2xl">Loading...</div>
	)})
  return (
		<Layout>
			<Head>
				{/* <meta
					name="description"
					content="Selamat datang di Website Desa Siliragung, Siliragung adalah sebuah kecamatan di Kabupaten Banyuwangi, Provinsi Jawa Timur, Indonesia. Kecamatan ini dibentuk pada tanggal 8 Juli 2004 dari Kecamatan Pesanggaran menurut Perda No. 33 Tahun 2004."
				/> */}
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp

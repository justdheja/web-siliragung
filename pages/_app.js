import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
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

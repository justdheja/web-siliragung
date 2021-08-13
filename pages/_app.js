import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
				page_path: url,
			});
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<Layout>
			<Head>
				{/* <meta
					name="description"
					content="Selamat datang di Website Desa Siliragung, Siliragung adalah sebuah kecamatan di Kabupaten Banyuwangi, Provinsi Jawa Timur, Indonesia. Kecamatan ini dibentuk pada tanggal 8 Juli 2004 dari Kecamatan Pesanggaran menurut Perda No. 33 Tahun 2004."
				/> */}
				<title>Siliragung</title>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏖</text></svg>"
				></link>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;

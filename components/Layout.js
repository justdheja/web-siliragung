import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
		<>
			<Head>
				<meta
					name="description"
					content="Selamat datang di Website Desa Siliragung, Siliragung adalah sebuah kecamatan di Kabupaten Banyuwangi, Provinsi Jawa Timur, Indonesia. Kecamatan ini dibentuk pada tanggal 8 Juli 2004 dari Kecamatan Pesanggaran menurut Perda No. 33 Tahun 2004."
				/>
				<title>Siliragung</title>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏖</text></svg>"
				></link>
				<meta
					property="og:image"
					content="https://images.unsplash.com/photo-1588693495725-5c72046dd3c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
				/>
				<meta
					name="twitter:image:src"
					content="https://images.unsplash.com/photo-1588693495725-5c72046dd3c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
				/>
        <meta name="keywords" content="siliragung, banyuwangi, jawa timur, bali, KKN PPM UGM 2021, Siliragung, Kesilir, Buluagung" />
        <meta name="keyphrases" content="Website Desa Siliragung, kecamatan Siliragung, kabupaten Banyuwangi, Desa Buluagung, Desa Kesilir, website KKN PPM UGM" />
        <meta name="classification" content="Website Desa, Website Pariwisate, Traveller's guide, Travel guide, Website Profil, Kecamatan Siliragung, Desa Siliragung, Desa Kesilir, Desa Buluagung" />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
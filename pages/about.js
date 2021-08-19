import Head from 'next/head';
import { Fade } from 'react-reveal';

const About = () => {
  return (
		<Fade bottom>
			<div>
				<Head>
					<title>About | Siliragung</title>
				</Head>
				<div className="pt-16 p-8 lg:p-20">
					<div className="min-h-screen">
						<h1 className="text-center dm-serif text-4xl mb-4">About</h1>
						<p className="text-justify m-auto md:w-4/12 mb-6">
							Siliragung adalah sebuah kecamatan di Kabupaten Banyuwangi,
							Provinsi Jawa Timur, Indonesia. Kecamatan ini dibentuk pada
							tanggal 8 Juli 2004 dari Kecamatan Pesanggaran menurut Perda No.
							33 Tahun 2004.
						</p>

						<h3 className="text-3xl dm-serif text-center my-2">
							Persebaran Budaya di Kecamatan Siliragung
						</h3>
						<iframe
							src="https://arcg.is/y9rim"
							className="w-full lg:w-10/12 m-auto"
							height={800}
							frameBorder="0"
						/>
					</div>
					<div className="min-h-screen">
						<h3 className="text-3xl dm-serif text-center my-2 mt-4">
							WebGIS UMKM Desa Buluagung
						</h3>
						<iframe
							src="https://arcg.is/emnHj0"
							className="w-full lg:w-10/12 m-auto"
							height={800}
							frameBorder="0"
						/>
					</div>
				</div>
			</div>
		</Fade>
	);
}
 
export default About;
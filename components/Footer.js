/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo-logo.webp';

const Footer = () => {
	return (
		<footer className="bg-white h-full p-8 lg:px-28 flex flex-col space-y-10">
			<div className="flex flex-col lg:flex-row justify-between">
				<div className="flex flex-col justify-center">
					<Link className="h-full" href="/">
						<a className="text-2xl dm-serif font-bold mb-4">siliragung</a>
					</Link>
					<Link className="h-full" href="/">
						<a className="text-lg ">Home</a>
					</Link>
					<Link className="h-full" href="/contents">
						<a className="text-lg ">Contents</a>
					</Link>
					<Link className="h-full" href="/about">
						<a className="text-lg ">About</a>
					</Link>
				</div>
				<div className="mt-4 lg:mt-0 flex flex-col lg:flex-row lg:space-x-8 lg:items-center">
					<div className="text-sm lg:text-lg max-w-sm text-justify">
						<h2 className="text-2xl dm-serif font-bold hidden lg:block">siliragung</h2>
						Siliragung adalah sebuah kecamatan di Kabupaten Banyuwangi, Provinsi
						Jawa Timur, Indonesia. Kecamatan ini dibentuk pada tanggal 8 Juli
						2004 dari Kecamatan Pesanggaran menurut Perda No. 33 Tahun 2004.
					</div>
					<div className="w-full md:w-56 h-56">
						<iframe
							width="100%"
							height="100%"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Siliragung+(Siliragung)&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						></iframe>
					</div>
				</div>
			</div>
			<div>
				<hr className="border-b-2 border-black" />
				<div className="flex flex-col lg:flex-row justify-between mt-2">
					<div className=" flex w-60">
						<Image src={logo} alt="logo kkn" />
					</div>
					<p className="text-gray-500">
						&copy; 2021 KKN PPM UGM Siliragung Banyuwangi
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

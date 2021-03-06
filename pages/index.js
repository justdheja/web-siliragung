/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import FacilityList from '../components/Facilities';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrollY(window.scrollY);
		});
		return window.addEventListener('scroll', () => {});
	}, [scrollY]);

	return (
		<>
			<div className="md:min-h-screen w-screen bg-home flex flex-col justify-ceter space-y-12">
				<Head>
					<title>Welcome | Siliragung</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<div className=" w-full h-screen py-36 m-auto flex justify-center items-center flex-col text-white space-y-24">
					<Fade bottom>
						<div>
							<div
								style={{
									transform: `translateY(${scrollY / 2.5}px)`,
								}}
							>
								<h3 className="text-xl font-semibold">Welcome to</h3>
								<h1 className=" text-6xl md:text-9xl dm-serif">Siliragung</h1>
							</div>
							<div
								className={
									scrollY > 100
										? 'hidden animate-bounce mt-20 text-white flex justify-center transition duration-300 ease-in-out'
										: 'animate-bounce mt-20 text-white flex justify-center transition duration-300 ease-in-out'
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 14l-7 7m0 0l-7-7m7 7V3"
									/>
								</svg>
							</div>
						</div>
					</Fade>
				</div>
			</div>
			<div className="min-h-screen bg-white py-12 lg:px-64 px-4">
				<Fade bottom>
					<FacilityList />
					<hr className=" border-b-2 border-gray-200 my-10" />
					<ImageGallery />
				</Fade>
			</div>
		</>
	);
}

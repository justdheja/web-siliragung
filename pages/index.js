import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Fade } from 'react-reveal'

export default function Home() {
	const [scrollY, setScrollY] = useState(0)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrollY(window.scrollY)
		})
		return window.addEventListener('scroll', () => {})
	}, [scrollY])

  return (
		<>
			<div className="md:min-h-screen w-screen bg-home py-36 flex flex-col justify-ceter space-y-12">
				<Head>
					<title>Welcome | Siliragung</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<div
					className=" w-full h-full m-auto flex justify-center items-center flex-col text-white space-y-24"
					style={{
						transform: `translateY(${scrollY/3}px)`,
					}}
				>
					<Fade bottom>
						<div>
							<h3 className="text-xl font-semibold">Welcome to</h3>
							<h1 className=" text-6xl md:text-9xl dm-serif">Siliragung</h1>
						</div>
					</Fade>
				</div>
				<div className="animate-bounce text-white flex justify-center">
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
			<div className="h-screen bg-white py-12 px-64">
				<Fade bottom>
					<div className="shadow-2xl rounded w-full p-4 bg-white relative overflow-hidden">
						
					</div>
				</Fade>
			</div>
		</>
	);
}

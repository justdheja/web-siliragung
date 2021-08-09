import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = ({ loading }) => {
	const [menuMobileOpen, setMenuMobileOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [scrolled, setScrolled] = useState(false);
	const router = useRouter();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrollY(window.scrollY);
			if (window.scrollY > 40) {
				setScrolled(true);
			}
			if (window.scrollY < 40) {
				setScrolled(false);
			}
		});
		return window.addEventListener('scroll', () => {});
	}, [scrollY]);

	const handleMenuMobile = () => {
		if (menuMobileOpen) {
			setMenuMobileOpen(false);
		} else {
			setMenuMobileOpen(true);
		}
	};

	return (
		<div>
			<div className=" fixed w-screen z-50">
				<nav
					className="transition duration-150"
				>
					<div
						className={
							scrolled || menuMobileOpen || router.pathname !== '/'
								? 'bg-white text-black transition duration-150 mx-auto px-8 lg:px-20'
								: 'bg-transparent text-white transition duration-150 mx-auto px-8 lg:px-20'
						}
					>
						<div className="flex items-center  justify-between h-16">
							<div className="w-full justify-between flex items-center">
								<Link className="flex-shrink-0" href="/">
									<a className="text-2xl dm-serif font-bold">siliragung</a>
								</Link>
								<div className="hidden md:block">
									<div className="flex items-baseline space-x-6 ">
										<Link className=" py-2 px-2 rounded-md text-sm" href="/">
											<a
												className={
													router.pathname == '/'
														? 'font-bold no-underline'
														: ' no-underline'
												}
											>
												Home
											</a>
										</Link>
										<Link
											className=" py-2 px-2 rounded-md text-sm  "
											href="/contents"
										>
											<a
												className={
													router.pathname == '/contents'
														? 'font-bold no-underline'
														: ' no-underline'
												}
											>
												Content
											</a>
										</Link>
										<Link
											className=" py-2 px-2 rounded-md text-sm  "
											href="/about"
										>
											<a
												className={
													router.pathname == '/about'
														? 'font-bold no-underline'
														: ' no-underline'
												}
											>
												About
											</a>
										</Link>
									</div>
								</div>
								<div className="-mr-2 flex md:hidden">
									<button
										className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-100"
										onClick={handleMenuMobile}
										type="button"
									>
										{menuMobileOpen ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 transition duration-100"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 transition duration-100"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M4 6h16M4 12h16m-7 6h7"
												/>
											</svg>
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						className={
							menuMobileOpen
								? 'md:hidden  bg-transparent transition duration-100 ease-in-out'
								: 'md:hidden hidden bg-transparent transition duration-100 ease-in-out'
						}
						onClick={handleMenuMobile}
					>
						<div className=" flex flex-col px-4 pt-2 pb-3 space-y-1 sm:px-3 bg-white space-y-2 ease-in transition duration-100">
							<Link className=" py-2 px-2 rounded-md text-sm" href="/">
								<a
									className={
										router.pathname == '/'
											? 'font-bold no-underline'
											: ' no-underline'
									}
								>
									Home
								</a>
							</Link>
							<Link
								className=" py-2 px-2 rounded-md text-sm  "
								href="/contents"
							>
								<a
									className={
										router.pathname == '/contents'
											? 'font-bold no-underline'
											: ' no-underline'
									}
								>
									Content
								</a>
							</Link>
							<Link className=" py-2 px-2 rounded-md text-sm  " href="/about">
								<a
									className={
										router.pathname == '/about'
											? 'font-bold no-underline'
											: ' no-underline'
									}
								>
									About
								</a>
							</Link>
						</div>
						<div
							className="h-screen bg-transparent"
							onClick={handleMenuMobile}
						></div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;

import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import ContentCard from '../components/ContentCard';

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const resArtikel = await client.getEntries({ content_type: 'artikel' });
	const resModul = await client.getEntries({ content_type: 'modul' });
	const resVideo = await client.getEntries({ content_type: 'video' });
	const resPoster = await client.getEntries({ content_type: 'poster' });

	return {
		props: {
			articles: resArtikel.items,
			modules: resModul.items,
			videos: resVideo.items,
			posters: resPoster.items,
		},
		revalidate: 1,
	};
};

const ContentList = ({ articles, modules, videos, posters }) => {
	const [searchKey, setSearchKey] = useState('');
	const [contents, setContents] = useState([]);
	const rawContents = [...articles, ...modules, ...videos, ...posters];
	let sortedContents = rawContents.sort(
		(a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt)
	);

	useEffect(() => {
		setContents(sortedContents);
		if (searchKey) {
			const content = sortedContents.filter((content) =>
				content.fields.title.toUpperCase().includes(searchKey.toUpperCase())
			);
			setContents(content);
		} else {
			setContents(sortedContents);
		}
	}, [searchKey]);

	return (
		<div>
			<div className="min-h-screen pt-16 p-8 lg:p-20">
				<div className="text-center my-2 mb-8">
					<h2 className="text-4xl m-auto inline-block mb-4 dm-serif">
						Content
					</h2>
					<div className=" relative mx-auto w-60 ">
						<input
							type="text"
							id="on-error-email"
							className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
							name="email"
							placeholder="Cari Judul"
							onChange={(e) => setSearchKey(e.target.value)}
							value={searchKey}
						/>
					</div>
				</div>

				<Fade bottom>
					{contents.length ? (
						<div className="flex flex-col justify-center lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4">
							{contents.map((content, index) => (
								<ContentCard key={index} content={content} />
							))}
						</div>
					) : (
						<p className="text-center">Maaf tidak ditemukan</p>
					)}
				</Fade>
			</div>
		</div>
	);
};

export default ContentList;

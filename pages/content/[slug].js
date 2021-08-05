import { createClient } from 'contentful';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
	const resArtikel = await client.getEntries({ content_type: 'artikel' });
	const resModul = await client.getEntries({ content_type: 'modul' });
	const resVideo = await client.getEntries({ content_type: 'video' });
	const resPoster = await client.getEntries({ content_type: 'poster' });

	const res = [
		...resArtikel.items,
		...resModul.items,
		...resVideo.items,
		...resPoster.items,
	];

	const paths = res.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params }) => {
	// const { items } = await client.getEntries({
	// 	'fields.slug': params.slug,
	// });
	const resArtikel = await client.getEntries({ content_type: 'artikel' });
	const resModul = await client.getEntries({ content_type: 'modul' });
	const resVideo = await client.getEntries({ content_type: 'video' });
	const resPoster = await client.getEntries({ content_type: 'poster' });

	const res = [
		...resArtikel.items,
		...resModul.items,
		...resVideo.items,
		...resPoster.items,
	];

	const content = res.filter((content) => content.fields.slug === params.slug);

	if (!content.length) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {
			content: content[0],
		},
		revalidate: 1,
	};
};

const ContentDetail = ({ content }) => {
	if (!content) {
		return <p className="text-center">Loading...</p>;
	}

	const getIdGoogleDrive = (link) => {
		const id = link.substring(
			link.lastIndexOf('/d/') + 3,
			link.lastIndexOf('/preview')
		);

		return id
	}

	return (
		<div className="p-8 pt-16 lg:px-72">
			<h1 className="text-4xl mb-6 dm-serif text-center">
				{content.fields.title}
			</h1>
			{content.fields.linkEmbedVideo || content.fields.linkEmbedGoogleDrive ? (
				<iframe
					src={
						content.fields.linkEmbedVideo
							? content.fields.linkEmbedVideo
							: content.fields.linkEmbedGoogleDrive
					}
					className="mx-auto w-8/12"
					height={content.fields.linkEmbedVideo ? 550 : 650}
					frameBorder="0"
				/>
			) : null}
			{content.fields.linkEmbedGoogleDrive && (
				<div className="text-center mt-10">
					<a
						href={`https://drive.google.com/u/2/uc?id=${getIdGoogleDrive(content.fields.linkEmbedGoogleDrive)}&export=download`}
						className="py-2 px-4 m-8 bg-primary text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg hover:shadow-lg"
						target="_blank"
						rel="noopener noreferrer"
					>Download</a>
				</div>
			)}
		</div>
	);
};

export default ContentDetail;

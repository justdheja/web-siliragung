/* eslint-disable @next/next/no-img-element */
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import { Fade } from 'react-reveal'
import { useRouter } from 'next/router';
import Head from 'next/head';

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
	const resArtikel = await client.getEntries({
		content_type: 'artikel',
		'fields.slug': params.slug,
	});
	const resModul = await client.getEntries({
		content_type: 'modul',
		'fields.slug': params.slug,
	});
	const resVideo = await client.getEntries({
		content_type: 'video',
		'fields.slug': params.slug,
	});
	const resPoster = await client.getEntries({
		content_type: 'poster',
		'fields.slug': params.slug,
	});

	const content = [
		...resArtikel.items,
		...resModul.items,
		...resVideo.items,
		...resPoster.items,
	];

	// const content = res.filter((content) => content.fields.slug === params.slug);

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

		return id;
	};

	const options = {
		renderNode: {
			[INLINES.HYPERLINK]: (node) => {
				if (node.data.uri.includes('youtube.com/embed')) {
					return (
						<span>
							<iframe
								title="Unique Title 002"
								src={node.data.uri}
								allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
								frameBorder="0"
								className="mx-auto my-1 mb-4 w-full"
								height={600}
								allowFullScreen
							></iframe>
						</span>
					);
				} else if (node.data.uri.includes('drive.google.com/file')) {
					return (
						<span>
							<iframe
								title="Unique Title 002"
								src={node.data.uri}
								allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
								frameBorder="0"
								className="mx-auto my-1 mb-4 w-full"
								height={600}
								allowFullScreen
							></iframe>
						</span>
					);
				} else {
					return (
						<a
							href={node.data.uri}
							target="_blank"
							className=" px-2 py-1 bg-primary rounded-lg text-white"
							rel="noreferrer"
						>
							{node.content[0].value}
						</a>
					);
				}
			},
		},
	};

	return (
		<Fade bottom>
			<div className="p-8 pt-16 lg:px-64">
				<Head>
					<title>{content.fields.title} | Siliragung</title>
				</Head>
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
						className="mx-auto w-full xl:w-9/12"
						height={content.fields.linkEmbedVideo ? 550 : 650}
						frameBorder="0"
					/>
				) : null}
				{content.fields.linkEmbedGoogleDrive && (
					<div className="text-center mt-10">
						<a
							href={`https://drive.google.com/u/2/uc?id=${getIdGoogleDrive(
								content.fields.linkEmbedGoogleDrive
							)}&export=download`}
							className="py-2 px-4 m-8 bg-primary text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg hover:shadow-lg"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download
						</a>
					</div>
				)}
				{content.fields.body && (
					<div className="w-8/12 m-auto">
						<img
							src={content.fields.thumbnail.fields.file.url}
							alt="thumbnail"
							className="max-h-72 w-full object-cover"
						/>
						<div className="">
							{documentToReactComponents(content.fields.body, options)}
						</div>
					</div>
				)}
			</div>
		</Fade>
	);
};

export default ContentDetail;

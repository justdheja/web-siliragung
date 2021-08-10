import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const ContentCard = ({ content }) => {
  const { title, thumbnail, slug } = content.fields;

	return (
		<div className="overflow-hidden shadow-xl mt-4 h-90 w-60 md:w-72 cursor-pointer m-auto inline-block">
			<Link href={'/contents/' + slug}>
				<a className="w-full block h-full">
					{content.fields.poster ? (
						<img
							alt="blog photo"
							src={'https:' + content.fields.poster[0].fields.file.url}
							className="max-h-48 w-full object-cover object-top"
						/>
					) : thumbnail ? (
						<img
							alt="blog photo"
							src={'https:' + thumbnail.fields.file.url}
							className="max-h-48 w-full object-cover object-top"
						/>
					) : (
						<img
							alt="blog photo"
							src="https://images.ctfassets.net/6pcl1zkgu2pg/1U76Mr8dQjeFcknycKwmEC/e20c3d644b34482c543ae4eb0db2ca7c/photo-1499750310107-5fef28a66643"
							className="max-h-48 w-full object-cover object-top"
						/>
					)}
					<div className="bg-white w-full p-4">
						<p className="text-gray-800 text-xl font-medium mb-2">{title}</p>
						<div className="flex items-center">
							<div className="flex flex-col justify-between text-sm">
								{content.fields.author && (
									<p className="text-gray-800 ">{content.fields.author}</p>
								)}
								<p className="text-gray-400 ">
									{new Date(content.sys.createdAt).toDateString()}
								</p>
							</div>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default ContentCard;

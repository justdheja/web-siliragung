const About = () => {
  return (
		<div>
			<div className="h-screen p-8 lg:p-20">
				<iframe
					src="https://www.arcgis.com/apps/instant/interactivelegend/index.html?appid=ca65ae4bd4544aeaa58e38b06e6fcdb9&center=114.1282,-8.5948&level=13"
					className="w-full"
					height={800}
					frameBorder="0"
				/>
			</div>
		</div>
	);
}
 
export default About;
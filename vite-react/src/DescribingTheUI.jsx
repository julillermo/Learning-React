function YourFirstComponent(){
	function Profile (){
		return (
			<img
				src="https://i.imgur.com/MK3eW3As.jpg"
				alt="Katherine Johnson"
   		/>
		);
	}



	return(
		<article>
			<h1>My First Component</h1>
			<ol>
				<li>Components: UI Building Blocks</li>
				<li>Defining a Component</li>
				<li>Using a Component</li>
			</ol>
			<Profile />
			<Profile />
			<Profile />
		</article>
	)
}

function DescribingTheUI (){
	return (
		<YourFirstComponent />
	)
}

export default DescribingTheUI

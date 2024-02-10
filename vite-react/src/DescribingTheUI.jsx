export function YourFirstComponent(){
	function Profile ({ spreadStyle }){
		return (
			<>
				<img
					src="https://i.imgur.com/MK3eW3As.jpg"
					alt="Katherine Johnson"
					/>
			</>
		);
	}


	const styling = {
		styleName : 'testStyle',
		theme: {
			backgroundColor: 'pink',
			color: 'black',
		}
	}


	return(
		<article>
			<b>My First Component</b>
			<ol style={{ 
				backgroundColor: 'black',
				color: 'pink' 
				}}>
				<li style={styling.theme}>Components: UI Building Blocks</li>
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

export default DescribingTheUI;

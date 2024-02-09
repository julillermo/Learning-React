import { useState } from "react";

function ThinkingReact(){


	// This function is just for pushing the details into the template
	// 	before returning them to be dispalayed.
	function ProductCategoryRow({ category }) {
		// Personally, if the component doens't really benefit from being factored out,
		//	it can just be directly part of the code. No need for a function.
		// This does make the code more organized, but there's more code as a result.
		// Also, DO NOT DECLARE COMPONENTS INSIDE OTHER COMPONENTS
		return(
			<tr>
				<th colSpan="2">
					{category}
				</th>
			</tr>
		)
	}



	// This function is just for pushing the details into the template
	// 	before returning them to be dispalayed.
	function ProductRow({ product }) {
		// This component makes more sense than ProductCategoryRow()
		//	because it has to make use of conditional statements.
		const name = product.stocked ? product.name : 
			<span style={{ color : 'red' }}> 
				{product.name}
			</span>;
			// color the item red if it's not in stock.

		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		)
	}



	function ProductTable({ products, filterText, inStockOnly}){
		const rows  = [];
		let lastCategory = null;

		products.forEach((product) => {
			if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ){
				// if the string chunk can't be found, skip over the item by not returning it
				return ;
			}

			if (inStockOnly && !product.stocked){
				// If we only want stocked items, but the item isn't stocked, skip over by not returning it
				return ;
			}

			// This would only work because the list we're handling is already arranged? I think so
			if (product.category !== lastCategory){
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category} /> 
				); // an HTML element is returned and then pushed to the list
			}

			rows.push(
				<ProductRow
					product={product}
					key={product.name} />
			); // an HTML element is returned and then pushed to the list

			lastCategory = product.category;
		});

		return(
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}



	function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
		return(
			<form>
				<input
					type="text"
					value={filterText} // FWIU, this means that it changes live with each keypress
					placeholder="Search..."
					onChange={(e) => onFilterTextChange(e.target.value)} // It also means it gets rerendered every keypress
					/>
					{/* change the value of the 'filterText state' owned by the FilterableProductTable component */}
					{/* 'filterText  state' is then used to manipulate what gets rendered in the ProductTable sub components */}

					{/* The 'e' stands for React event object, kind of like DOM events */}
					{/* From the Docs: the onChange fires immediately when an option is selected or when a change happnes*/}
				
				<label>
					<input
						type="checkbox"
						checked={inStockOnly} // FWIU, this means that it changes live with each keypress
						onChange={(e) => onInStockOnlyChange(e.target.checked)} // It also means that values are passed live
						/>
						{/* Why is this 'checked' instead of 'value'? Likely because it's binary rather than a string */}
						{/* This changes the binary 'inStockOnly state' owned by the FilterableProductTable component */}
						{/* the binary 'inStockOnly state' is then used to manipulate what gets rendered in the ProductTable sub components */}

						{/* The 'e' stands for React event object, kind of like DOM events */}
						{/* From the Docs: the onChange fires immediately when an option is selected */}
					{' '}{/* This is for extra space? Yes! */}
					Only show products in stock
				</label>
			</form>
		);
	}



	// For my use case, it might be clearer for me to arrange the components/functions where the
	//	larger enclosing functions are declared first ().
	// Nevermind. This backward declaration style of functions apparently incraseses compile time
	function FilterableProductTable({ products }){
		const [filterText, setFilterText] = useState(''); // These are custom variable names
		const [inStockOnly, setInStockOnly] = useState(false); // These are custom variable names

		return(
			<div>
				<SearchBar 
					filterText={filterText} 
					inStockOnly={inStockOnly} 
					onFilterTextChange={setFilterText} // We're passing the function that will be used by the search bar
					onInStockOnlyChange={setInStockOnly} // We're passing the function that will be used by the search bar
					/> 
				<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
						{/* includes <ProductCategoryRow /> */}
						{/* includes <ProductRow /> */}

					{/* The <ProductTable/> changes live based on the 'state' that also changes live */}
					{/* The 'states' are all shared in real-time */}
			</div> 
		);
	}
	

	/* Sample data */
	const PRODUCTS = [
		{category: "Fruits", price: "$1", stocked: true, name: "Apple"},
		{category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
		{category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
		{category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
		{category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
		{category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
	];



	/* When this entire React component is called, return an HTML like output */
	return(
		<FilterableProductTable products={PRODUCTS} />
	)
}

export default ThinkingReact
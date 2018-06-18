'use strict';
/*let answer, 
	xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
	answer = JSON.parse(xhr.responseText);
	ReactDOM.render(<Listing items={answer} />, document.getElementById('root'));
});
xhr.open('GET', 'https://neto-api.herokuapp.com/etsy');
xhr.send();*/

const Listing = function ({items}) {	
	let itemsList = items.map(item => {
		return (			
				<div key={item.listing_id} className="item">
					<div className="item-image">
						<a href={item.url}>
							<img src={item.MainImage.url_570xN} />
						</a>
					</div>
					<div className="item-details">
						<p className="item-title">{checkTitle(item.title)}</p>
						<p className="item-price">{checkCurrency(item.currency_code, item.price)}</p>
						<p className={`item-quantity ${checkQuantity(item.quantity)}`}> {item.quantity} left</p>
					</div>
				</div>
			
		);
	});

	return <div className="item-list">{itemsList}</div>;	
}

function checkTitle(title) {
	if (title.length > 50) return title.slice(0, 50) + '...';
	return title;
}

function checkCurrency(cur, price) {
	if (cur === 'USD') return `$${price}`;
	if (cur === 'EUR') return `€${price}`;
	return `${price} ${cur}`;
}

function checkQuantity(quantity) {
	if (quantity <= 10) return 'level-low';
	if (quantity <= 20) return 'level-medium';
	return 'level-high';
}

fetch('https://neto-api.herokuapp.com/etsy')
	.then(res => res.json())
	.then(res => {
		document.querySelector('.loading').style.display = 'none';
		return res;
	})
	.then(res => {
		ReactDOM.render(<Listing items={res} />, document.getElementById('root'))
	})
	.catch(error => console.log(error))
$(document).ready(function () {
	(function Geo() {
		$.ajax('https://ipapi.co/json')
			.then(function success(data) {
				country = data.country;
				city = data.city;
				if (country === 'RU') {
					if (city === 'St Petersburg') {
						$('#replace').replaceWith('Санкт-Петербурге')
					} else {
						$('#replace').replaceWith(data.city)
					}
				} else {
					$('#replace').replaceWith('Странах СНГ')
				}
			})
	}());
	$('.x_price_previous').replaceWith(function () {
		let date = new Date();
		date.setDate(date.getDate() + 2);
		let options = {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		};
		return date.toLocaleString('ru', options);
	});

	if (!localStorage.length) {
		localStorage.setItem('qual', $('.lastpack').html());
	}
	let store = localStorage.getItem('qual');
	$('.lastpack').html(store);

	function counter() {
		if (store > 7) {
			store -= 1;
			localStorage.setItem('qual', store);
		}
		$('.lastpack').html(store);
	}

	setInterval(counter, 15000);




});

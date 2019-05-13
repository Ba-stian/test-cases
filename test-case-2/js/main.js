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

});

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

    (function mask() {
        let phone = $("[name='phone']");
        let text = phone.attr('placeholder');
        phone.focus(function (e) {
            let target = $(e.target);
            target.prop('placeholder', '(000) 000 0000');
        });
        phone.blur(function (e) {
            let target = $(e.target);
            target.prop('placeholder', text);
            if (e.target.value.length <= 2) {
                this.value = '';
            }
        });
        phone.keypress(function (e) {
            let char = String.fromCharCode(e.which);
            if (!(/\d/.test(char)) && e.target.value > 11) {
                e.preventDefault();
            }
            let matrix = "+7 (___) ___ ____";
            let i = 0;
            let def = matrix.replace(/\D/g, "");
            let val = this.value.replace(/\D/g, "");
            if (def.length >= val.length) val = def;
            this.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
        })
    })();

});

// Exercice 1

$('.alert').click(function(){
	alert('Coucou');
});

// Exercice 2 
$('#change').click(function(){
	$(this).toggleClass('red');
});

// Exercice 3 

$('.verifyEmpty').click(function(){
	if($.trim($('.maybeEmpty').val()) === ''){
		alert('C\'est vide');
	}
});

// Exercice 4 

$('.changeImg').hover(function(){
	$(this).attr('src','data:image/jpeg;base64,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')
}, function(){
	$(this).attr('src','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGAAgAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgIDBAEHAP/EADYQAAIBAwMBBgQFBAEFAAAAAAECAwAEEQUSITEGEyJBUWEUMnGRgaGx0fAVI0LBJDRSYuHx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIEAwAF/8QAIBEAAgICAgMBAQAAAAAAAAAAAAECEQMhEjEEIlETBf/aAAwDAQACEQMRAD8A8tjTxdK0oorkSYNaVWvNbtkhpsolWGSYjxZ2qfT1rdYyyxOHUnbn5geajZRb7PHpIf0FUtIbObxjw1RGVJFmKFwsPvptvrSZgCx33kRws3sfRj69D50tzW7wSNHKhVlJBBGDxTJZzLsE8Mm5OpZW3ffzFfdoJY9Qs2vNu65hUuWGP7qKOc/+WBkeoBHpTZMXPa7MpRFVl9K6Iz1xWWTVgkiRpDneeD7Vb/UJIrhonXI9qx/CVCrGy/YcdKiVFXG/gWyFwyHu87ScedVQzxX91HBZ8yv5NwF9yfSg8EjnjaOLE0jqiKWZuAB51rFhHCc3BEr9e7XhR9T5/wA60VFotmndw+KRhh5TwT9PQe1Utb85zz55raMI41vbHx4rZlHduRHNDGYm4K7QMfT0oDd2xt7iWBjlonKE+uDij8pLTIirjxAADrQ/XgDrN7txgTMOPbikyS5Kw54caAjpzVJStTjxVWy8UEzAKomKuVeKs7rBNTRalUrFCGjI0xe2jTc8nIOflx1NY9fYW2EEgb0Yc4ohoU0dpq9u0o/tvmMn0zVHajTUs9ZXle7ZtwXPhII6VXBcooswTqNFOmalAUWOa2+Huy+3ejYST0NG7q1WIbIzyVweeORz+X+6usre0mtNndL3TKBiQZKt04NVyws0+dxKoAKqWhW7EvWrH4e8so7MKwY4455HGPtUrq0DzRspKsQNwx0wcZ+1FO0VjI3dQWmUfvdy8c+4H4gULvLxlto3mH/JhcxSY6HGDmus4qvFePs9D3K8SqN2eoGf/Q+9Fuz1kYn+KB2O8QXn3x+1DZ57iSRbK1RTFFGockdTgZz96btMtO+sEdI2ViBkD+fzFBsKRcYQ2HyWBHFYLyVkfYqgZ4Jphgte+tGR1JJXwkHp6mlTV7GWxuY0WRppHJJG4kCsMibKcUkuzZodsZLya5cbo7OJrhyP8to4H3xSu+XYs2STySafNSgkt+wQuJ1WO4lm7nwHGV8LYPr0NI+MCspqtEnkS5SMUq81UwrTIuaoZcdaVE9jHIlfIvlWgrkk1Db4qkg9AIOyoFZh8pyPwr6e4fV54p7t/k8KBancp/Zb6UoTXsySpHA5kdT0WvR8WqdmuNs9KtleKBRnGOp6ce/rUZY7wMZIIlwOQgPJ+9KvZ7WNd1KcWcXcyAsFIcYxnpU7u7uzeXRmvrpEgcgrB4CcfTk1Xao0oYNR7y67UaaIw6RHxqNuMZ6jmh3avspN/UZp4SRBOysgHk3Q5/KmLsBqjr2mttH1maO/iZGaynlKu8LAfKGGQQRTfqdkJr2aDB8M4CYOOCAfPy5P2rGUmh0hDs9Ek0vsbqk08Y+Kkcybm4KqSK2Wl81vp1iVt2kuJVDFE449ad+0x0/TOylzdavD8RGSFSPOC5zhVz74rzV+0Wu5aeNbGMLgdwsJ2xrzhS3rgH7HiipX2Fqh3toWMPiwm5eV9PtzSpqcE0Gto80X/EB8LbcCr4+3cNvbQ3N9E6vMnCr4lHPPOOelSTtRY66VhQMC/HKjwny+ldJfAoEds726kuorOYgQwIGjQHpu8z70t1t1qf4rUriUZGWxycngY/1WHBqSfZLJ7IMuapceVacVTIOaQWhoCZGK+7vFa0j45qBj9qlWkKyloQyHxDp0waTHsxa6hczR5LIcqpXgE0+ImOKVe0FvcR3jLHhVmGCMZqvxJ+1D43ss0prjT2+JEbpNncZYvl/H0poTTdN7RSHVIdU/pV5J/wBQDCJInP8A3AZBGfT1pa07TlbCXK3ezrvibCGjGnaTC96kdtOzBz8rLuz9do5q5qze0i3UtJ0/s/2h0u6ttYN5JHiWWVVwF9eB8vHkeeaZYu0s+pXUlykgjRvkBH51o03s/NMs9lcFGicHbJ8MybTyBjK88+przq+jv9B1Kew1HvBMG8BUcP8ASg5JaHimx37bX79qINJ0oTrCRL/ePluyAOPzoRfdjtZs5JoJZtNGAE+J+IABHunzZwTwAaP9mtEnTstc3er2UUl1MwNssrhWRcdTkjjPlWTVtC1ma2WW08bY/wAZQ4I8uQf1pbQWgTftYjRV0qyCvbW0fdrPNw0rkks2PLJ8vLjNK6wJYzxS2ys0MoIYnoCP90dS4n0pN9xZR/Ejhmmfep+mOn2ruq3lmYLZdMdo5ApaYqxAZzyeKDYHpWApBljg5qO32rW0xc/3EjfPntwfyqDKDyFAqSUtktmfFVOvnWnFQYUtnDYpGasVQTzWNZOa0xyjbmpp6QjJgDf0oD2qILRiMB5ByFA60bEgz7mlHtHcOt6sKN4pDjPoP5+/pW3grlkv4GC2dtmaGaMmZpWYcW0Z5z+1OGkavapGhjMYl8lXHP1Y9f0+vSk06VJZRd9FJ4G5mPVm9s+nrWvT4I7+eNY2y5I3YGNoHQfz1r1rplDVnqVnqbCzeRIn79x8ig8Z980p6jY6ve38dy8YYoSy7nyc/Xy60Q0lNYsuShkXoFPXB9KZ4dQEUe+6sJDtXAAUHJqeaV2jbHOtMu0A6rd2gjmSVBEfE0jdP3ojqnwcNmRePnwnnA3n6YwelK+t9tb2OKE6fbiKFT4y3U48vbypS1DVLufbcPcF5beYx7m53I3y8evFBJ9BbvZqv9O03uZL9bNRHvxC0jlxKfPCnnjzpduo8ZPCY/xxRHU7ySBTd3Ehc4BkhcY3DycAcA/oR5UN3G6ja4WUvGeQ37/z/Yp+Hq0ZT2jOBUs1BsqarMvNQsnJk+Kq3PNcL81BmpRkHRJWiN+KHq2TWiMmppsRmhpMGlrXreSZjdRRh3i5A/SmAgkUBnv0tdQKS52E8rnj7VV/PkuTDDst7OdoAIzbXIB3ZGGxRewt4oJ+8SZ4ZnbKLgbDQi7srK9h77TjsvBz4jgChzT61Zr3Mtq02Twev6V6dFB69Yaq8MipdKJpANz7TnjyruodoXcCCO2dSWG3eMZFeY6Tdaxud44Zoiw8bsfL0GaIKdY1CNXBdgG4ORkA1i8asewt3E9+syXs620TjO8YOD/8qL3On6RA7QypdOYDuLHxKyjjj8KTdSstctbkR5chiOjZH41ZY6BI0on1W52KQQVz54p0gWcj1W41e97qBGclwCp6lW4PHtwab5NDXs/pscN4MTud2DlgD5UHsdR0zSd0VoB30YxvcZb8Kjf63d6pIguH3jA6eXArTQDLcjYzKAQAelUKCTmtkx3yD3Az9qiYwB0rzM3pJonfZlbg1WwJ5rQ65qqTwrSJnI//2Q==')
})

// Exercice 5 

$('.move').animate({
	'width' : '+=200',
	'height': '+=200'
}, 1000);

// Exercice 6 

$('.appendTo').click(function(){
	$('.append').append('TOTO');
});

// Exercice 7 

$('form').submit(function(e){
	e.preventDefault();
	alert('Formulaire envoyé (presque)');
});


// Exercice 8 

setTimeout(function(){
	$('.getOut').fadeOut();
},2000);


$.get('http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=2de143494c0b295cca9337e1e96b00e0',function(data){
	$('.compteur').text(data.main.temp);
});

$('.compteur').html('<strong>COUCOU</strong>');























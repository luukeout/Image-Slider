var photos = ["http://i.imgur.com/zlTyybQb.jpg", "http://i.imgur.com/hWDF9DXb.jpg", "http://i.imgur.com/HbETGwsb.jpg"];




var intervalID = window.setInterval(photos, 3000);

function createSlideshow () {
	photos.forEach(function (photo) {
		$('.jumbotron').append("<img src=" + photo +"/>")
	});
};

createSlideshow();

function initMap() {
	let charlotte = {lat: 35.22286, lng: -80.83796}

	let map = new google.maps.Map(document.getElementById('map'), {
  		center: charlotte,
 		zoom: 12
	});

	marketData.forEach(features => {
		let marker = new google.maps.Marker({
			position: features.cords,
			map: map,
//			title: features.title,
			icon: features.icon
		});
		let infowindow = new google.maps.InfoWindow({
			content: features.info
		});
 		marker.addListener('click', () => {
			infowindow.open(map, marker);
 		});
/*
		marker.addListener('mouseover', () => {
			infowindow.open(map, marker);
 		});
		marker.addListener('mouseout', () => {
			infowindow.close();
 		});
*/
	});
}

var currentImg = new Array();

window.onload = function() {

	for (var i = 0; i < imagesScr.length; i++) {
		currentImg.push(0);
	}

	buts = document.getElementsByClassName("but");

	for (var i = 0; i < buts.length; i++) {
		buts[i].addEventListener("click", function(e) {
			
			sendedElem = e.target;
			if (e.target.className == "navigation") {
				sendedElem = e.target.parentNode;
			}
			parent = sendedElem.parentNode;
			sliderLocation = parent.id;
			
			sldLocation = sliderLocation.substring(3, sliderLocation.length + 1);

			if (sendedElem.id == "leftBut") {
				currentImg[sldLocation - 1]--;
				if (currentImg[sldLocation - 1] < 0) {
					currentImg[sldLocation - 1] = imagesScr[sldLocation - 1].length - 1;
				}
			}

			if (sendedElem.id == "rightBut") {
				currentImg[sldLocation - 1]++;
				if (currentImg[sldLocation - 1] > imagesScr[sldLocation - 1].length - 1) {
					currentImg[sldLocation - 1] = 0;
				}
			}
			
			imgElement = document.getElementById(sliderLocation).getElementsByTagName("img")[1];
			
			var state = 1;
				delay = 200;
			
			imgElement.classList.add("hide");
			itrvl = setInterval(function() {
				switch (state) {
					case 1: state = 2;
							imgElement.src = "images/" + imagesScr[sldLocation - 1][currentImg[sldLocation - 1]];
							imgElement.classList.remove("hide");
							imgElement.classList.add("preShow");
							break;
					case 2: state = 3;
							imgElement.classList.remove("preShow");
							imgElement.classList.add("show");
							break;
					case 3: state = 1;
							imgElement.classList.remove("show");
							clearInterval(itrvl);
							break;
				}
			}, delay);			
		});
	}	
};
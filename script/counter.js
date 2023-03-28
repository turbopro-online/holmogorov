var res = 130500000000;

	setInterval(function () {
		step = 3;
		i = 0;
		outRes = "";
		res = res + Math.round(Math.random()*1000000);
		resString = String(res);
		for(k = 0; k < resString.length/3; k++) {
			for(; i < step; i++) {
				outRes = outRes + resString[i];
				
			}
			outRes = outRes + " ";
			step = step + 3;
		}
		outRes = outRes + "$"

		document.getElementById("forCalc").innerHTML = outRes;		
	
	}, 1000);
function $$(elem) {
	return document.getElementById(elem);
}
class FilterLib {
	gray(img, can) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			var arr = new Array();
			arr[0] = dat1[i];
			arr[1] = dat1[i + 1];
			arr[2] = dat1[i + 2];
			arr = arr.sort(function(a, b) {
				return a - b;
			});
			dat1[i] = arr[0];
			dat1[i + 1] = arr[0];
			dat1[i + 2] = arr[0];			
		}

		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}

	strange (img, can) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			dat1[i] = dat1[i + 1];
			dat1[i + 1] = dat1[i + 2];
			dat1[i + 2] = dat1[i];
		}
		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}
	invert(img, can) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			dat1[i] = 255 - dat1[i];
			dat1[i + 1] = 255 - dat1[i + 1];
			dat1[i + 2] = 255 - dat1[i + 2];		
		}
		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}
	cold(img, can) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			dat1[i] = dat1[i];
			dat1[i + 1] = dat1[i + 1];
			dat1[i + 2] = dat1[i + 2] + 100;
		}
		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}
	hot(img, can) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			dat1[i] = dat1[i] + 100;
			dat1[i + 1] = dat1[i + 1];
			dat1[i + 2] = dat1[i + 2];
		}
		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}
	bluey(img, can) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			if (dat1[i] <= 100 && dat1[i + 1] <= 100 && dat1[i + 2] <= 100) {
				dat1[i] = 0;
				dat1[i + 1] = 0;
				dat1[i + 2] = 255;
			}
		}
		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}
	dark(img, can) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			dat1[i] = dat1[i] - 30;
			dat1[i + 1] = dat1[i + 1] - 30;
			dat1[i + 2] = dat1[i + 2] - 30;
			
		}
		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}
	light(img, can) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			dat1[i] = dat1[i] + 30;
			dat1[i + 1] = dat1[i + 1] + 30;
			dat1[i + 2] = dat1[i + 2] + 30;
			
		}
		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}
	sepia(img, can) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			dat1[i] = 30 + dat1[i];
			dat1[i + 1] = 50 + dat1[i + 1];
			dat1[i + 2] = dat1[i + 2] - 40;
			
		}
		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}
	brightness(img, can, p) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			dat1[i] = ((parseFloat(p)/100) *  dat1[i]);
			dat1[i + 1] = ((parseFloat(p)/100) * dat1[i + 1]);
			dat1[i + 2] = ((parseFloat(p)/100) * dat1[i + 2]);
			
		}
		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");	
	}
	patch(img, can, p) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			if (dat1[i] >= 100 && dat1[i + 1] >= 100 && dat1[i + 2] >= 100) {
				dat1[i] = dat1[i] - 100;
				dat1[i + 1] = dat1[i + 1] - 100;
				dat1[i + 2] = dat1[i + 2] - 100;
			}
		}

		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");	
	}
	contrast(img, can, p) {
		var img = img;
		var can1 = can;

		var ctx1 = can1.getContext("2d");
		ctx1.drawImage(img, 0, 0, 200, 200);

		var rgb1 = ctx1.getImageData(0, 0, 200, 200);
		var dat1 = rgb1.data;
		
		for (let i = 0, n = dat1.length; i < n; i +=4) {
			if (dat1[i] <= 10 && dat1[i + 1] <= 10 && dat1[i + 2] <= 10) {
				dat1[i] = dat1[i] - ((parseFloat(p)/100) * 80);
				dat1[i + 1] = dat1[i + 1] - ((parseFloat(p)/100) * 80);
				dat1[i + 2] = dat1[i + 2] - ((parseFloat(p)/100) * 80);
			}
		}

		ctx1.putImageData(rgb1, 0, 0);
		return can1.toDataURL().replace(/data:image\/.*\,/, "").replace(/\s{1}/g, "+");
	}
	pushFile(encoded, location) {
		var xhttp;
		if (XMLHttpRequest) {
			xhttp = new XMLHttpRequest();
		}
		else {
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var formdata = new FormData();
		formdata.append("file", encoded);
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				if (this.responseText != "error") {
					return this.responseText;
				}
				else {
					console.log('upload_failed!');
				}
			}
		}
		xhttp.open('POST', location, true);
		xhttp.send(formdata);
	}
}
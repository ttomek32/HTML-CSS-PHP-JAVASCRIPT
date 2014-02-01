/*
 * License:CC BY-NC-SA 3.0 PL
 * 
 * Author: Tomasz "Thomas Martin" Lyduch
 * Email: mechatronik32@gmail.com
 * Date: 24.01.2014 | v1
*/

	var Year = (new Date).getFullYear();
	
	// Count 1
	var L1 = 0;
	function changel1(x){
	if (x == 1){document.getElementById('brand1').value = ++L1;}else{document.getElementById('brand1').value = --L1;}
	if (L1 == -1){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-White.png)';L1 = 9;return out();}
	if (L1 == 0){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Black.png)';return out();}
	if (L1 == 1){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Brown.png)';return out();}
	if (L1 == 2){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Red.png)';return out();}
	if (L1 == 3){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Orange.png)';return out();}
	if (L1 == 4){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Yellow.png)';return out();}
	if (L1 == 5){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Green.png)';return out();}
	if (L1 == 6){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Blue.png)';return out();}
	if (L1 == 7){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Purple.png)';return out();}
	if (L1 == 8){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Grey.png)';return out();}
	if (L1 == 9){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-White.png)';return out();}
	if (L1 == 10){document.getElementById('brand1').style.backgroundImage = 'url(./img/L1/L1-Black.png)';L1 = 0;return out();}
	}
	
	// Count 2
	var L2 = 0;
	function changel2(y){
	if (y == 1){document.getElementById('brand2').value = ++L2;}else {document.getElementById('brand2').value = --L2;}
	if (L2 == -1){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-White.png)';L2 = 9;return out();}
	if (L2 == 0){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Black.png)';return out();}
	if (L2 == 1){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Brown.png)';return out();}
	if (L2 == 2){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Red.png)';return out();}
	if (L2 == 3){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Orange.png)';return out();}
	if (L2 == 4){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Yellow.png)';return out();}
	if (L2 == 5){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Green.png)';return out();}
	if (L2 == 6){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Blue.png)';return out();}
	if (L2 == 7){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Purple.png)';return out();}
	if (L2 == 8){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Grey.png)';return out();}
	if (L2 == 9){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-White.png)';return out();}
	if (L2 == 10){document.getElementById('brand2').style.backgroundImage = 'url(./img/L2/L2-Black.png)';L2 = 0;return out();}
	}
	
	// Count Multiplication
	var L3 = 0;
	var M = 1;
	function changel3(z){
	if (z == 1){document.getElementById('brand3').value = ++L3;}else {document.getElementById('brand3').value = --L3;}
	if (L3 == -1){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Gold.png)';L3 = 9;M=0.1;return out();}
	if (L3 == 0){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Black.png)';M=1;return out();}
	if (L3 == 1){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Brown.png)';M=10;return out();}
	if (L3 == 2){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Red.png)';M=100;return out();}
	if (L3 == 3){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Orange.png)';M=1000;return out();}
	if (L3 == 4){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Yellow.png)';M=10000;return out();}
	if (L3 == 5){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Green.png)';M=100000;return out();}
	if (L3 == 6){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Blue.png)';M=1000000;return out();}
	if (L3 == 7){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Purple.png)';M=10000000;return out();}
	if (L3 == 8){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Silver.png)';M=0.01;return out();}
	if (L3 == 9){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Gold.png)';M=0.1;return out();}
	if (L3 == 10){document.getElementById('brand3').style.backgroundImage = 'url(./img/L3/L3-Black.png)';L3 = 0;M=1;return out();}
	}
	
	// Count Tolerance
	var L4 = 0;
	var T = 20;
	function changel4(q){
	if (q == 1){document.getElementById('brand4').value = ++L4;}else {document.getElementById('brand4').value = --L4;}
	if (L4 == -1){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Gold.png)';L4=11;T=5;return out();}
	if (L4 == 0){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Black.png)';T=20;return out();}
	if (L4 == 1){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Brown.png)';T=1;return out();}
	if (L4 == 2){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Red.png)';T=2;return out();}
	if (L4 == 3){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Orange.png)';T=3;return out();}
	if (L4 == 4){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Yellow.png)';T=0.1;return out();}
	if (L4 == 5){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Green.png)';T=0.5;return out();}
	if (L4 == 6){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Blue.png)';T=0.25;return out();}
	if (L4 == 7){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Purple.png)';T=0.1;return out();}
	if (L4 == 8){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Grey.png)';T=0.05;return out();}
	if (L4 == 9){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-None.png)';T=20;return out();}
	if (L4 == 10){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Silver.png)';T=10;return out();}
	if (L4 == 11){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Gold.png)';T=5;return out();}
	if (L4 == 12){document.getElementById('brand4').style.backgroundImage = 'url(./img/L4/L4-Black.png)';L4=0;T=20;return out();}
	}
	
	//Rsistor calculator	
	function out(){
		var O;
		var N = L1+""+L2;
		var Mu = N*M;
		
		if (M >= 1e5){
			Mu /= 1e6;
			O = " Mohm";
		} else {
			if (M >= 1e2){
				Mu /= 1e3;
				O = " kohm";
			} else {
				if (M >= 1){
					O = " ohm";
				} else {
					if (M == 0.01){
						O = " ohm";
						Mu = Mu.toFixed(2);
					} else {
						O = " ohm";
						Mu = Mu.toFixed(1);
					}
				}
			}
		}

	document.getElementById('output').innerHTML=Mu+O+", &plusmn"+T+"%";
	}
	
	
/*  Author: Tomasz "Thomas Martin" Lyduch  */
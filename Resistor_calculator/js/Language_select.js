/*
 * License:CC BY-NC-SA 3.0 PL
 * 
 * Author: Tomasz "Thomas Martin" Lyduch
 * Email: mechatronik32@gmail.com
 * Date: 31.01.2014 | v1
*/

	if ('localStorage' in window) {
		var x = localStorage.getItem('language');
		language(x);
	} else {
		x = 'gb';
	};
	
function language(x){

	if (x == 'gb'){
		// ENG
		Name_j="Resistor Color Decoder";
		Output_j="Choose a color";
		Symbols_j="Symbols";
		Gold_j="Gold";
		Silver_j="Silver";
		None_j="None";
		More_j="More!";
		Help_j="Info";
		Menu_j="Please, do not steal... :(";
		copyright_date = "Copyright &copy 2014-"+Year+" Tomasz \"Thomas Martin\" Łyduch, All Rights Reserved.";
		help_txt = "The program for reading the values ​​of the resistors.\nThe page itself does NOT use cookies!\n\nIf you found a bug, report it!";
		
		Text_j="1.8em";
		Help_sj="1.7em";
		
		document.getElementById("germany").className = document.getElementById("germany").className.replace(/\bflag select_flag\b/,'')
		document.getElementById("poland").className = document.getElementById("poland").className.replace(/\bflag select_flag\b/,'')
		document.getElementById("germany").className += "flag none_select_flag";
		document.getElementById("poland").className += "flag none_select_flag";
		document.getElementById("gb").className += "flag select_flag";
		
		if ('localStorage' in window) {
		localStorage.setItem('language', 'gb');}

	}else
	if (x == 'de'){
		// DE
		Name_j="Widerstandsfarb Decoder ";
		Output_j="Wählen Sie eine Farbe";
		Symbols_j="Symbols";
		Gold_j="Gold";
		Silver_j="Silber";
		None_j="Mangel";
		More_j="Mehr!";
		Help_j="Info";
		Menu_j="Bitte nicht stehlen... :(";
		copyright_date = "Copyright &copy 2014-"+Year+" Tomasz \"Thomas Martin\" Łyduch, Alle Rechte vorbehalten.";
		help_txt = "Das Programm zum Lesen der Werte der Widerstände.\nDie Seite selbst keine Cookies!\n\nWenn Sie einen Fehler finden, melden Sie es!";
		
		Text_j="1.8em";
		Help_sj="1.7em";
		
		document.getElementById("gb").className = document.getElementById("gb").className.replace(/\bflag select_flag\b/,'')
		document.getElementById("poland").className = document.getElementById("poland").className.replace(/\bflag select_flag\b/,'')
		document.getElementById("gb").className += "flag none_select_flag";
		document.getElementById("poland").className += "flag none_select_flag";
		document.getElementById("germany").className += "flag select_flag";
		
		if ('localStorage' in window) {
		localStorage.setItem('language', 'de');}
		
	}else
	if (x == 'pl'){
		// POL
		Name_j="Dekoder Kolorów Rezystora";
		Output_j="Wybierz kolor";
		Symbols_j="Symbole";
		Gold_j="Złoty";
		Silver_j="Srebny";
		None_j="Brak";
		More_j="Więcej!";
		Help_j="Info";
		Menu_j="Proszę, nie kradnij... :(";
		copyright_date="Copyright &copy 2014-"+Year+" Tomasz \"Thomas Martin\" Łyduch, Wszelkie prawa zastrzeżone.";
		help_txt = "Program do odczytywania wartości z rezystorów.\nSama strona NIE używa ciasteczek!\n\nJeśli znalazłeś błąd, zgłoś to!";
		
		Text_sj="1.5em";
		Help_sj="1em";
		
		document.getElementById("germany").className = document.getElementById("germany").className.replace(/\bflag select_flag\b/,'')
		document.getElementById("gb").className = document.getElementById("gb").className.replace(/\bflag select_flag\b/,'')
		document.getElementById("germany").className += "flag none_select_flag";
		document.getElementById("gb").className += "flag none_select_flag";
		document.getElementById("poland").className += "flag select_flag";
		
		if ('localStorage' in window) {
		localStorage.setItem('language', 'pl');}
	}
	
	document.getElementById('Name').innerHTML=Name_j;
	document.getElementById('output').innerHTML=Output_j;
	document.getElementById('legendname').innerHTML=Symbols_j;
	document.getElementById('gold_n').innerHTML=Gold_j;
	document.getElementById('silver_n').innerHTML=Silver_j;
	document.getElementById('none_n').innerHTML=None_j;
	document.getElementById('morename').innerHTML=More_j;
	document.getElementById('helpname').innerHTML=Help_j;
	document.getElementById('footer').innerHTML=copyright_date;
	
	document.getElementById('morename').style.fontSize=Text_sj;
	//document.getElementById('helpname').hover.fontSize=Help_sj;
}

	/*if ('localStorage' in window) {
		// save
		localStorage.setItem('language', 'pl');
		// load
		var language = localStorage.getItem('language');
	}*/

var Year = (new Date).getFullYear();
	copyright_date = "Copyright &copy 2014-"+Year+" Tomasz \"Thomas Martin\" Łyduch, All Rights Reserved.";
	document.getElementById('footer').innerHTML=copyright_date;
	
/*  Author: Tomasz "Thomas Martin" Lyduch  */
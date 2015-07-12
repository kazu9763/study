var jpURL = new Array(
	"ダミー",
	"http://pori2.net/",
	"http://pori2.net/js/index.html",
	"http://pori2.net/saku2/index.html"
	);

function selectNavi() {
	var num;
	num = document.navi.contentes.selectedIndex;

	if (num != 0) location.href = jpURL[num];
}

function formWrite(){
	document.write('<form name="navi">');
	document.write('<select name="contents" onchange="selectNavi()">');
	document.write('<option>コンテンツ一覧</option>');
	document.write('<option>HOME</option>');
	document.write('<option>JavaScript入門</option>');
	document.write('<option>さくさくHP作り</option>');
	document.write('</select>');
	document.write('</form>');
}
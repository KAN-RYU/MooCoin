// クッキーを取得する
function getCookie(){
	var array = document.cookie.split("; ");
	var str = "";
	for(var i=0;i<array.length;i++){
		if( array[i].substr(0,"kabuka=".length) == "kabuka=" ){
			str = array[i].substr("kabuka=".length);
			break;
		}
	}
	var pricesText = str.split(",");
	kabuka.p0.value  = !pricesText[0]  || !(pricesText[0]-0)  ? "" : pricesText[0]  - 0;
	kabuka.p1.value  = !pricesText[1]  || !(pricesText[1]-0)  ? "" : pricesText[1]  - 0;
	kabuka.p2.value  = !pricesText[2]  || !(pricesText[2]-0)  ? "" : pricesText[2]  - 0;
	kabuka.p3.value  = !pricesText[3]  || !(pricesText[3]-0)  ? "" : pricesText[3]  - 0;
	kabuka.p4.value  = !pricesText[4]  || !(pricesText[4]-0)  ? "" : pricesText[4]  - 0;
	kabuka.p5.value  = !pricesText[5]  || !(pricesText[5]-0)  ? "" : pricesText[5]  - 0;
	kabuka.p6.value  = !pricesText[6]  || !(pricesText[6]-0)  ? "" : pricesText[6]  - 0;
	kabuka.p7.value  = !pricesText[7]  || !(pricesText[7]-0)  ? "" : pricesText[7]  - 0;
	kabuka.p8.value  = !pricesText[8]  || !(pricesText[8]-0)  ? "" : pricesText[8]  - 0;
	kabuka.p9.value  = !pricesText[9]  || !(pricesText[9]-0)  ? "" : pricesText[9]  - 0;
	kabuka.p10.value = !pricesText[10] || !(pricesText[10]-0) ? "" : pricesText[10] - 0;
	kabuka.p11.value = !pricesText[11] || !(pricesText[11]-0) ? "" : pricesText[11] - 0;
	kabuka.p12.value = !pricesText[12] || !(pricesText[12]-0) ? "" : pricesText[12] - 0;
	return;
}

// クッキーを設定する
function setCookie(){
	var expires = new Date();	// 現在日時
	expires.setTime( expires.getTime() - ( ( ( expires.getHours() * 60 + expires.getMinutes() ) * 60 + expires.getSeconds() + 1 ) * 1000 + expires.getMilliseconds() ) + ( 8 - expires.getDay() ) * 1000*60*60*24 );	// 次の日曜23:59:59まで保存
	var str = "kabuka=";
	str += !kabuka.p0.value  || !(kabuka.p0.value-0)  ? "," : (kabuka.p0.value-0)  + ",";
	str += !kabuka.p1.value  || !(kabuka.p1.value-0)  ? "," : (kabuka.p1.value-0)  + ",";
	str += !kabuka.p2.value  || !(kabuka.p2.value-0)  ? "," : (kabuka.p2.value-0)  + ",";
	str += !kabuka.p3.value  || !(kabuka.p3.value-0)  ? "," : (kabuka.p3.value-0)  + ",";
	str += !kabuka.p4.value  || !(kabuka.p4.value-0)  ? "," : (kabuka.p4.value-0)  + ",";
	str += !kabuka.p5.value  || !(kabuka.p5.value-0)  ? "," : (kabuka.p5.value-0)  + ",";
	str += !kabuka.p6.value  || !(kabuka.p6.value-0)  ? "," : (kabuka.p6.value-0)  + ",";
	str += !kabuka.p7.value  || !(kabuka.p7.value-0)  ? "," : (kabuka.p7.value-0)  + ",";
	str += !kabuka.p8.value  || !(kabuka.p8.value-0)  ? "," : (kabuka.p8.value-0)  + ",";
	str += !kabuka.p9.value  || !(kabuka.p9.value-0)  ? "," : (kabuka.p9.value-0)  + ",";
	str += !kabuka.p10.value || !(kabuka.p10.value-0) ? "," : (kabuka.p10.value-0) + ",";
	str += !kabuka.p11.value || !(kabuka.p11.value-0) ? "," : (kabuka.p11.value-0) + ",";
	str += !kabuka.p12.value || !(kabuka.p12.value-0) ? ""  : (kabuka.p12.value-0);
	str += "; expires=" + expires.toGMTString();
	document.cookie = str;
	return;
}

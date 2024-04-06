function LoadNAVBAR() {
    const allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        var el = allElements[i];
        var navpath = el.getAttribute("nav-include-path");
        if (navpath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                    LoadNAVBAR();

                }
            }
            xhttp.open("GET", navpath, true);
            xhttp.send();
            return;

        }


    }

}

function LoadFOOTER() {
    const allElements = document.getElementsByTagName('*'); // 태그이름으로 문서의 모든 요소를 가져온다

    // 가져온 요소의 개수만큼 반복문을 돈다
    for (var i = 0; i < allElements.length; i++) {
        var el = allElements[i];                                // 가져온 요소를 el 변수에 할당한다
        var footerpath = el.getAttribute("footer-include-path"); // 이 요소에서 "footer-include-path"속성이 있으면 가져와 footerpath 변수에 할당한다
        if (footerpath) {                                               // 만약, 변수 footerpath에 값이 있으면 if문을 수행한다
            var xhttp = new XMLHttpRequest();           // 새로운 XMLHttpRequest 객체를 생성하고, 해당 객체의 참조값을 변수 xhttp에 할당한다
            xhttp.onreadystatechange = function () {                // XMLHttpRequest 객체의 readyState 속성이 변경될 때마다 호출된다
                if (this.readyState == 4 && this.status == 200) {           // this.readyState와 this.status는 해당 XMLHttpRequest 객체의 상태를 나타내고, 이 값이 각각 4, 200이면 if문을 수행한다
                    el.innerHTML = this.responseText;                       // XMLHttpRequest 객체가 받은 텍스트를 사용하여 el의 내용을 설정한다
                    el.removeAttribute("footer-include-path");  // el에서 "footer-include-path" 속성을 제거한다. 이미 footer를 로드한 요소가 다시 로드되지 않도록 한다
                    LoadFOOTER();                                           // 다른 요소에서도 footer를 로드할 수 있도록 한다

                }
            }
            xhttp.open("GET", footerpath, true);            // XMLHttpRequest 객체를 사용하여 서버로 GET 요청을 보내는 역할. footerpath는 요청 리소스의 경로. true는 비동기 요청
            xhttp.send();                                                 // 요청을 서버로 보낸다
            return;

        }


    }
}
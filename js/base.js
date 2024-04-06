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
        var el = allElements[i]; // 가져온 요소를 el 변수에 할당한다
        var footerpath = el.getAttribute("footer-include-path"); // 이 요소에서 "footer-include-path"속성이 있으면 가져와 footerpath 변수에 할당한다
        if (footerpath) {                                               // 만약, 변수 footerpath에 값이 있으면 if문을 수행한다
            var xhttp = new XMLHttpRequest();           // 새로운 XMLHttpRequest 객체를 생성하고, 해당 객체의 참조값을 변수 xhttp에 할당한다
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    el.removeAttribute("footer-include-path");
                    LoadFOOTER();

                }
            }
            xhttp.open("GET", footerpath, true);
            xhttp.send();
            return;

        }


    }
}
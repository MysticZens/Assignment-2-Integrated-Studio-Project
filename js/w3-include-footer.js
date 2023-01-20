includeFooter();

function includeFooter() {
    var tag, index, a, file, xhttp;
    tag = document.getElementsByTagName("*");
    for (index = 0; index < tag.length; index++) {
        if (tag[index].getAttribute("w3-include-footer")) {
            a = tag[index].cloneNode(false);
            file = tag[index].getAttribute("w3-include-footer");
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    a.removeAttribute("w3-include-footer");
                    a.innerHTML = xhttp.responseText;
                    tag[index].parentNode.replaceChild(a, tag[index]);
                    includeFooter();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}
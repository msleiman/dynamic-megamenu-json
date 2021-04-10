var obj = new XMLHttpRequest();
obj.onload = function () {
    var data = JSON.parse(obj.responseText);
    var menuItems = '';
        menuItems += '<ul id="nav">';

    for (var a = 0; a < data.length; a++) {
        menuItems += '<li id="nav-1">';
        menuItems += '<h2>' + '<a>' + data[a].label + '</a>' + '</h2>';
        menuItems += '<ul id="nav-2">';
        var childA = data[a].child
        if(childA && Array.isArray(childA)) {
            for (var b = 0; b < childA.length; b++) {
                menuItems += '<li' + ' ' + 'data="' + childA[b].content
                menuItems += '"'+ 'id="navitem"'
                menuItems += 'onclick="showdata(this)"' + '>';
                menuItems += childA[b].label
                menuItems += '<ul id="nav-3">'
        var childB = data[a].child[b].child;
        if(childB && Array.isArray(childB)) {
                  for (var c = 0; c < childB.length; c++) {
                    menuItems += '<li' + ' '
                    menuItems += 'onclick="showdata(this)"'
                    menuItems += 'data="' + childB[c].content + '"'
                    menuItems += 'id="navitem"'
                    menuItems += '' + '>'
                    menuItems += childB[c].label;

                  }
                }
                menuItems += "</ul>"
            menuItems += '</li>';
        }
        }

        menuItems += '</ul>';
        menuItems += '</li>';
    }

    menuItems += '</ul>';
    document.getElementById('nav').innerHTML = menuItems;
};

function showdata(e) {
   navItemData = e.getAttribute("data");
   document.getElementById("box").innerHTML = navItemData;
}



obj.open('GET', 'test.json', true);
obj.send();


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((reg) => {
    console.log('[ServiceWorker] Registered');
  }).catch((err) => {
    console.error('[ServiceWorker] failed: ', err)
  });
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let pp = getCookie("pp");
try {
let bsAlert = new  bootstrap.Toast(document.getElementById("privacypolicy"));

if (pp == "") {
    bsAlert.show();
document.getElementById("accpt").onclick = function() {
  bsAlert.hide();
  setCookie("pp", "pp", 365);
}
}

} catch (err) {}


function isSearchPage() {
  if (typeof isSearch === 'undefined') {
    return false;
  }
  return isSearch;
}

let theme = getCookie("pa");
if (theme == "pa" && !isSearchPage()) {
  updateTheme();
  document.getElementById("theme").setAttribute('style', 'fill: white');
}

function changeTheme() {
  let theme = getCookie("pa");
  updateTheme();
  if ((theme == "" || theme == "pb" ) && !isSearchPage()) {
      setCookie("pa", "pa", 365);
      document.getElementById("theme").setAttribute('style', 'fill: white');
  } else {
    setCookie("pa", "pb", 365);
    document.getElementById("theme").setAttribute('style', 'fill: black');
  }
}

/*
doesnt need anymore but comment out just incase i need it back 
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    window.history.replaceState(null, null, window.location.pathname);
    clearInterval(stateCheck);
  }
}, 100);
*/

try {
  
let isShow = true;
qwe111.addEventListener("click", function() {
    if (isShow) {
        isShow = false;
        qwe.style.background = 'url("/images/chevron-up.svg")';
    } else {
        isShow = true;
        qwe.style.background = 'url("/images/chevron-down.svg")';
    }
});
} catch (er) {}

var mrepol742 = "                                               \n" +
"                                    \"\"#    mmmmmm    mm   mmmm \n" +
" mmmmm   m mm   mmm   mmmm    mmm     #        #\"   m\"#  \"   \"# \n" +
" # # #   #\"  \" #\"  #  #\" \"#  #\" \"#    #       m\"   #\" #      m\" \n" +
" # # #   #     #\"\"\"\"  #   #  #   #    #      m\"   #mmm#m   m\"   \n" +
" # # #   #     \"#mm\"  ##m#\"  \"#m#\"    \"mm   m\"        #  m#mmmm \n" +
"                      #                                         \n" +
                      "                                          \n" +
"                      ";

console.log(mrepol742, '\nHello World,\n\nCool to see you here!\nWe hope you find what you are looking for.\nThis site is open source https://github.com/mrepol742/mrepol742.github.io if you have new ideas, changes or if you found a bug let me know.\n\nHave a bugless day ahead!\n-mrepol742\n\n');
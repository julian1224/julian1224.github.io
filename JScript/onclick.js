
function loadDoc() {
  var e = document.getElementById("selectme");
  var indexstr = e.options[e.selectedIndex].value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("info").innerHTML = this.responseText;
    }
  };


  switch(indexstr){
    case "home":
    document.getElementById('page').innerHTML = "Home";
    document.getElementById('redirect__button').innerHTML = "Let's see more about me.";
    xhttp.open("GET", "Include/txt_source_home.txt", true);
    xhttp.send();
    break;
    case "procsim":
    document.getElementById('page').innerHTML = "Proc Sim";
    document.getElementById('redirect__button').innerHTML = "Let's see the proc sim";
    xhttp.open("GET", "Include/txt_source_procsim.txt", true);
    xhttp.send();
    break;
    case "trumped":
    document.getElementById('page').innerHTML = "The Wall";
    document.getElementById('redirect__button').innerHTML = "Let's see the Wall";
    xhttp.open("GET", "Include/txt_source_trumped.txt", true);
    xhttp.send();
    break;
    case "pendo":
    document.getElementById('page').innerHTML = "My Band";
    document.getElementById('redirect__button').innerHTML = "Let's see myBand";
    xhttp.open("GET", "Include/txt_source_pendo.txt", true);
    xhttp.send();
    break;
    default:
    document.getElementById('redirect__button').innerHTML = "Let's see... Nothing?";
    console.log("Error. Variable unknown.");
    break;
  }
}

function reference(){
  document.title = "Mr. Happy";
}

function reDirect(){
  var e = document.getElementById("selectme");
  var indexstr = e.options[e.selectedIndex].value;


  console.log(indexstr);
  loadDoc();
  switch(indexstr) {
    case "home":
    location.href="CV.html";
    break;
    case "procsim":
    alert("WIP: not finished. Don't get your hopes up.");
    window.open(
    'https://23669.hosts.ma-cloud.nl/TheFlashbulb/procsim/', '_blank' // <- This is what makes it open in a new window.
    );
    break;
    case "trumped":
    window.open(
    'https://23669.hosts.ma-cloud.nl/p1.1/proj/Wall/wall.php', '_blank' // <- This is what makes it open in a new window.
    );
    break;
    case "pendo":
    window.open(
    'http://23669.hosts.ma-cloud.nl/p1.1/proj/MyBand/index.php?page=home', '_blank' // <- This is what makes it open in a new window.
    );
    break;
  }
  }

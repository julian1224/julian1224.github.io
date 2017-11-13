

  function goElsewhere() {


    var e = document.getElementById("selectme");
    var indexstr = e.options[e.selectedIndex].value;


}

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
    document.getElementById('page').innerHTML = "home";
    xhttp.open("GET", "Include/txt_source_home.txt", true);
    xhttp.send();
    break;
    case "procsim":
    document.getElementById('page').innerHTML = "proc sim";
    xhttp.open("GET", "Include/txt_source_procsim.txt", true);
    xhttp.send();
    break;
    case "trumped":
    document.getElementById('page').innerHTML = "the wall";
    xhttp.open("GET", "Include/txt_source_trumped.txt", true);
    xhttp.send();
    break;
    case "pendo":
    document.getElementById('page').innerHTML = "My Band";
    xhttp.open("GET", "Include/txt_source_pendo.txt", true);
    xhttp.send();
    break;
    default:
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

//  goElsewhere();
  console.log(indexstr);
  loadDoc();
  switch(indexstr) {
    case "home":
    location.href="about.html";
    break;
    case "procsim":
  //  location.href="External/procsim/index.html";
  alert("WIP: not finished. No redirection for now.")
    break;
    case "trumped":
    location.href="https://23669.hosts.ma-cloud.nl/p1.1/proj/Wall/wall.php";
    break;
    case "pendo":
  // location.href="myband";
    break;
  }

  }

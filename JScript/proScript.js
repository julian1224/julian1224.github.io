var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   document.getElementById("jojoAction").innerHTML = this.responseText;
  }
};

var newInfobox = document.getElementById("prompt");
newInfobox.style.display = "none";
var clickaway = document.getElementById("clickaway");
clickaway.style.display = "none";
clickaway.addEventListener("click", closePrompt);

for (i = 0; i<6; i++) {
var view = "view" + i;
var read = "read" + i;
//
document.getElementById(view).addEventListener("click", viewBit);
document.getElementById(read).addEventListener("click", readBit);
  }

  function viewBit(){

    console.log(this.id);

    if (this.id == "view0"){
      //procsim
      window.open('https://23669.hosts.ma-cloud.nl/TheFlashbulb/procsim/', '_blank');
    };

    if (this.id == "view1"){
      //thewall
      window.open('https://23669.hosts.ma-cloud.nl/p1.1/proj/Wall/wall.php', '_blank');
    };

    if (this.id == "view2"){
      //myband
      window.open('http://23669.hosts.ma-cloud.nl/p1.1/proj/MyBand/index.php?page=home', '_blank');
    };

    if (this.id == "view3"){
      //museme
      window.open('http://23669.hosts.ma-cloud.nl/TheFlashbulb/museMe/', '_blank');
    };

    if (this.id == "view4"){
      //parallax
      window.open('http://23669.hosts.ma-cloud.nl/TheFlashbulb/FRO/parallax/', '_blank');
    };

    if (this.id == "view5"){
      //oldportfolio
      window.open('index1.html', '_blank');
    };
  }
  //
  function readBit(){
    console.log("clicked read");
    if (this.id == "read0"){
      xhttp.open("GET", "Include/txt_source_procsim.txt", true);
      xhttp.send();
      newInfobox.style.display = "initial";
      clickaway.style.display = "initial";
    };
    if (this.id == "read1"){
      xhttp.open("GET", "Include/txt_source_trumped.txt", true);
      xhttp.send();
      newInfobox.style.display = "initial";
      clickaway.style.display = "initial";
    };
    if (this.id == "read2"){
      xhttp.open("GET", "Include/txt_source_pendo.txt", true);
      xhttp.send();
      newInfobox.style.display = "initial";
      clickaway.style.display = "initial";
    };
    if (this.id == "read3"){
      xhttp.open("GET", "Include/txt_source_MUSE.txt", true);
      xhttp.send();
      newInfobox.style.display = "initial";
      clickaway.style.display = "initial";
    };
    if (this.id == "read4"){
      xhttp.open("GET", "Include/txt_source_slider.txt", true);
      xhttp.send();
      newInfobox.style.display = "initial";
      clickaway.style.display = "initial";
    };
    if (this.id == "read5"){
      xhttp.open("GET", "Include/txt_source_myportfolio.txt", true);
      xhttp.send();
      newInfobox.style.display = "initial";
      clickaway.style.display = "initial";
    };
  }
  //
    function closePrompt(){
      newInfobox.style.display = "none";
      clickaway.style.display = "none";
    }

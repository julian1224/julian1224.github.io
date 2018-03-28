

var newInfobox = document.getElementById("prompt");
newInfobox.style.display = "none";

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
      window.open('https://23669.hosts.ma-cloud.nl/TheFlashbulb/procsim/', '_blank');
    } else {
      console.log("idk");
    };
  }
  function readBit(){
    console.log("clicked read");
    readIndex = this.id;
    if (readIndex = 0){};
    if (readIndex = 1){};
    if (readIndex = 2){};
    if (readIndex = 3){};
    if (readIndex = 4){};
    if (readIndex = 5){};
  }

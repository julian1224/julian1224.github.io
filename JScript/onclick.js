

  function goElsewhere() {


    var e = document.getElementById("selectme");
    var indexstr = e.options[e.selectedIndex].value;

  switch(indexstr) {
      case "home":
        document.getElementById('headerstr').innerHTML = 'About me:';
        document.getElementById('page').innerHTML = "Home/about";
        document.getElementById('para1').innerHTML =
          "This is me. I am Link. <br>" +
          "I aspire to work hard writing code in PHP or JS. <br>" +
          "As a creative person, I spend a lot of time listening to music and drawing art.";

        document.getElementById('para2').innerHTML = "I like to code in Javascript because it doesn't require an internet connection. <br>" +
          "The stuff I make are more applications than anything else because of this. <br>" +
          "It doesn't mean, however, that I can't write PHP. <br><br>" +
          "I am a big fan of colours and references. <br> You will find plenty of both, in my work.";

        document.getElementById('infobox__img').src = "Include/headshot1.png";
  break;
      case "procsim":
        document.getElementById('headerstr').innerHTML = 'About Proc Simulator:';
        document.getElementById('page').innerHTML = 'Proc Simulator';
        document.getElementById('para1').innerHTML =
          "I started this project for myself. <br>" +
          "This application sets two sets of items with their own properties against each other, <br>" +
          "calculating the odds and returning which ones did and did not proc.";

        document.getElementById('para2').innerHTML =
          "Short for 'Programmed Random Occurence', <br> " +
          "It refers to the triggering of effects, whether the occurence is random or not. <br> " +
          "When these effects trigger or 'process', they are said to 'proc'. <br>" +
          "The rate of occurence for random effects is termed the 'Proc Rate'. This is what my program intends to simulate.";

        document.getElementById('infobox__img').src = 'Include/shot1.png';
  break;
  default:
  console.log("error, nothing selected");
  break;
  //
  //      case "name":
        // document.getElementById('headerstr').innerHTML = '';
        // document.getElementById('page').innerHTML = '';
        // document.getElementById('para1').innerHTML = '';
        // document.getElementById('para2').innerHTML = '';
        // document.getElementById('infobox__img').src = '';
  // break;
  //     case :
  //
  // break;
    }


}
function reference(){
  document.title = "Mr. Happy";
}

function reDirect(){
  var e = document.getElementById("selectme");
  var indexstr = e.options[e.selectedIndex].value;

  goElsewhere();
  console.log(indexstr);

  switch(indexstr) {
    case "home":
    location.href="index.html";
    break;
    case "procsim":
  //  location.href="";
  alert("WIP: not finished. No redirection for now.")
    break;
  }

  }

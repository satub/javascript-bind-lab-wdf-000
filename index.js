
var digitalClock = {
  time: Math.round(Date.now()/1000),
  startTicking: function(){
    this.time = Math.round(Date.now()/1000);
    setInterval(() => {
      // debugger;
      this.time = Math.round(Date.now()/1000);
      // console.log(this.time);
    }, 1000);
  }
}

function generateRegex(word){
  var rex = new RegExp(`\\b${word}\\b`,'ig');
  return rex;
}

function censor(noneOfThisSass, toBeSanitized){
  if (noneOfThisSass){
    return toBeSanitized.replace(generateRegex(noneOfThisSass), "BLEEP");
  } else {
  return toBeSanitized.replace(generateRegex(this), "BLEEP");
  }
}
var violenceCensor = censor.bind('violence', null);

var drugsCensor = censor.bind('drugs', null);

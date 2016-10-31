
var digitalClock = {
  time: Math.round(Date.now()/1000),
  startTicking: function(){

    setInterval(() => {

      /// If you want to keep the time accurate:
      // this.time = Math.round(Date.now()/1000);

      /// Start timer; NB: if you wait between the initialization and starting to tick, your
      /// clock will have fallen behind
      this.time++;

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

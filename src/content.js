checkSjit();

async function checkSjit(){
  var i=0;
  while(i++<10){
    setTimeout(function(){removeIt();}, 1000);
    await sleep(500);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function removeIt(){
  var fs = document.getElementsByTagName('iframe');
  for (var i = 0; i < fs.length; i++) {
    var s =  fs[i].attributes.src;
    var v = s ? s.value : '';
    if(v.indexOf('https://ogs.google.com/u/0/widget/callout')==0)
    fs[i].parentElement.remove();
	}
}
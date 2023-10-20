let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,
    progressEndValue = 90,
    speed = 50;
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent= `${progressStartValue}%`
    console.log(progressStartValue)
    if(progressStartValue <= 35)
    {
        circularProgress.style.background = `conic-gradient(#00ff00 ${progressStartValue * 3.6}deg , #ededed 0deg)`;
    }
    else if(progressStartValue > 35 && progressStartValue < 55)
    {
        circularProgress.style.background = `conic-gradient(#ffa400 ${progressStartValue * 3.6}deg , #ededed 0deg)`;
    }
    else{
        circularProgress.style.background = `conic-gradient(#ff0000 ${progressStartValue * 3.6}deg , #ededed 0deg)`;
    }
    if(progressStartValue==progressEndValue)
    {
        clearInterval(progress);
    }
}, speed);

const gaugeElement1 = document.querySelector(".gauge__body1");
const gaugeElement2 = document.querySelector(".gauge__body2");
const gaugeElement3 = document.querySelector(".gauge__body3");
const gaugeElement4 = document.querySelector(".gauge__body4");
const gaugeElement5 = document.querySelector(".gauge__body5");
const ppmElement = document.querySelector(".ppm");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1.01) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )} ppm`;
  if(value > 0.5 && value < 0.75)
  {
    gauge.querySelector(".gauge__fill").style.background=`#ffa400`;
  }
  else if(value > 0.75)
  {
    gauge.querySelector(".gauge__fill").style.background=`#ff0000`;
  }
}
let v = 0;
let p2 = setInterval(() => {
    setGaugeValue(gaugeElement1, v);
    setGaugeValue(gaugeElement2, v);
    setGaugeValue(gaugeElement3, v);
    setGaugeValue(gaugeElement4, v);
    setGaugeValue(gaugeElement5, v);
    v = v + 0.01;
    console.log(v);
    if(v>=0.81)
    {
        clearInterval(p2);
    }
}, speed);
let bp = 0;
// ppm range - 
let pp =setInterval(() => {
    bp = Math.random() * 100;
    if(bp>=60 && bp<=101)
    {
        ppmElement.textContent= `${Math.round(bp)} BPM`;
    }
    
    if(bp >=101)
    {
        clearInterval(pp);
    }
}, speed);
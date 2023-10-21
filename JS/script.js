
let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");
let progressStartValue = 95,
    progressEndValue = 10,
    speed = 500;
let progress = setInterval(() => {
    // progressStartValue--;
    progressStartValue = 100;
    progressValue.textContent= `${progressStartValue}%`
    console.log(progressStartValue)
    if(progressStartValue <= 35)
    {
        circularProgress.style.background = `conic-gradient(#ff0000 ${progressStartValue * 3.6}deg , #ededed 0deg)`;
    }
    else if(progressStartValue > 35 && progressStartValue < 55)
    {
        circularProgress.style.background = `conic-gradient(#ffa400 ${progressStartValue * 3.6}deg , #ededed 0deg)`;
    }
    else{
        circularProgress.style.background = `conic-gradient(#00ff00 ${progressStartValue * 3.6}deg , #ededed 0deg)`;
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
let sp = 500;
function setGaugeValue(gauge, value,gas) {
  if (value < 0 || value > 1.01) {
    return;
  }
  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  if(gas=="methane")
  {
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
      value * 150000
    )} ppm`;
  }
  if(gas=="co")
  {
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
      value * 200
    )} ppm`;
  }
  if(gas=="hs")
  {
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
      value *500
    )} ppm`;
  }
  if(gas=="sd")
  {
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
      value *100
    )} ppm`;
  }
  if(gas=="amm")
  {
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
      value *300
    )} ppm`;
  }
  
  if(value <= 0.5)
  {
    gauge.querySelector(".gauge__fill").style.background=`#00ff00`;
  }
  else if(value > 0.5 && value < 0.75)
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
    
    v = Math.random();
    r = Math.random();
    s = Math.random();
    t = Math.random();
    u = Math.random();
    console.log(v);
    // setGaugeValue(gaugeElement1, v ,"methane");
    if(v>0.05 && v<0.08)
    {
        setGaugeValue(gaugeElement1, v ,"methane");
    }
    if(r>0.05 && r<0.08)
    {
      setGaugeValue(gaugeElement2, r,"co");
    }
    if(s>= 0.02 & s<=0.04)
    {
      setGaugeValue(gaugeElement3, s,"hs");
    }
    if(t>=0.01 && t<=0.021)
    {
      setGaugeValue(gaugeElement4, t , "sd");
    }
    if(u>=0.06 && u<=0.09)
    {
      setGaugeValue(gaugeElement5, u , "amm");
    }
}, 20);
let bp = 0;
// ppm range - 
sam = 100;
let pp =setInterval(() => {
    bp = Math.random() * 100;
    if(bp>=70 && bp<=80)
    {
        ppmElement.textContent= `${Math.round(bp)} BPM`;
    }
    
    // if(bp >=101)
    // {
    //     clearInterval(pp);
    // }
}, sam);
// Get the water element and water level span
const waterElement = document.getElementById("water");
const waterLevelSpan = document.getElementById("waterLevel");

// Set the initial water level (in meters)
let waterLevel = 0;

// Update the water level and display
function updateWaterLevel() {
    waterElement.style.height = `${(waterLevel / 10) * 100}%`;
    waterLevelSpan.textContent = 10 - waterLevel;
}

// Example: Increment the water level by 1 meter every 2 seconds (for demonstration)
setInterval(() => {
    // if (waterLevel < 10) {
    //     waterLevel++;
        waterLevel = 1;
    // waterLevel = Math.round(Math.random() * 10);
        updateWaterLevel();
    
},2000);
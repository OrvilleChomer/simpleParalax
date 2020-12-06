/***************************************************************************

   simpleParallax.js
   
   Author:   Orville Chomer
   
   Simple Paralax for web page.
   A non-accurate (just going for relatively good looking),
   very easy to use library for adding paralax effect to your web page.
   
   
   

 ***************************************************************************/
const simpleParalax = new SimpleParallax();

function SimpleParallax() {
  const simpleParallax = this
  const MAX_MOVEMENT = 80;
  const EDGE_THICKNESS = Math.floor(MAX_MOVEMENT / 2);
  
  let layersByIndex = [];
    
  let nPivotLayer = -1;
  
  
  
  simpleParallax.addLayer = function(nInpZindex) {
    try {
      const layer = {};
      layer.idx = layersByIndex.length;
      let nZIndex = layer.idx + 1;
      
      if (typeof nInpZindex === "number") {
        nZIndex = nInpZindex;
      } // end if
      
      layer.zIndex = nZIndex
      
      const layerNd = document.createElement('div');
      layerNd.style.zIndex = nZIndex+"";
      layerNd.style.position = "absolute";
      layerNd.style.left = (-EDGE_THICKNESS)+"px"
      layerNd.style.top = (-EDGE_THICKNESS)+"px"
      
      
      
      document.body.appendChild(layerNd);
      
      layer.domNode = layerNd;
      
      layersByIndex.push(layer)
      
      
      
    } catch(err) {
      logErr(err)
    } // end of try/catch block
    
  } // end of simpleParalax.addLayer()
  
  
  function domContentLoaded(evt) {
    try {
      window.addEventListener("resize", resizeLayers)
      document.addEventListener("mousemove", handleMouseMovement);
    } catch(err) {
      logErr(err)
    } // end of try/catch
    
  } // end of domContentLoaded()
  
  
  function resizeLayer(layer) {
    try {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const layerNd = layer.domNode;
      layerNd.style.width = (w+MAX_MOVEMENT)+"px"
      layerNd.style.height = (h+MAX_MOVEMENT)+"px"
      
    } catch(err) {
      logErr(err)
    } // end if try/catch
    
    
  } // end of resizeLayer()
  
  
  
  function resizeLayers(evt) {
    try {
      const nMax = layersByIndex.length;
      
      for (let n=0;n<nMax;n++) {
        const layer = layersByIndex[n];
        resizeLayer(layer);
      } // next n
      
    } catch(err) {
      logErr(err)
    } // end of try/catch block
    
  } // end of resizeLayers()
  
  
  function handleMouseMovement(evt) {
    const el = evt.srcElement || evt.originalTarget;
    const x = evt.pageX;
    const y = evt.pageY;
    
  } // end of handleMouseMovement()
  
  
  function doParallaxEffect(el, x, y) {
    try {      
      if (layersByIndex.length <2) {
        return; // not enough layers to do a paralax effect
      } // end if
      
    } catch(err) {
      logErr(err)
    } // end of try/catch
    
  } // end of doParallaxEffect()
  
  
   /*************************************************************************
    *************************************************************************/	
    function logErr(err) {
        console.group();
        console.error(err.message)
        console.error("line: "+err.line)
        console.groupEnd();
    } // end of logErr()
  
  
  window.addEventListener('DOMContentLoaded', domContentLoaded);
  
} // end of SimpleParallax() Constructor

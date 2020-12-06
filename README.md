# simpleParallax
Simple Parallax JavaScript Library


 Simple Parallax for web page.
   A non-accurate (just going for relatively good looking),
   very easy to use library for adding paralax effect to your web page.
   Users will see the 
   
   Add the following line to your web page:
   
      <script src="simpleParallax.js"></script>
   
   To add a paralax layer:
   
      const myNewLayer = simpleParallax.addLayer()
      
   Add your visual content to the layer:
  
      myNewLayer.domNode.innerHTML = "<b>Hello World</b>"
      
   You should add to your page a bare minimum of 3 layers to get any useful effect.

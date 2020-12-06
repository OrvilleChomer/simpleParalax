# simpleParalax
Simple Paralax JavaScript Library


 Simple Paralax for web page.
   A non-accurate (just going for relatively good looking),
   very easy to use library for adding paralax effect to your web page.
   
   Add the following line to your web page:
   
      <script src="simpleParalax.js"></script>
   
   To add a paralax layer:
   
      const myNewLayer = simpleParalax.addLayer()
      
   Add your visual content to the layer:
  
      myNewLayer.domNode.innerHTML = "<b>Hello World</b>"
      
   You should add to your page a bare minimum of 3 layers to get any useful effect.

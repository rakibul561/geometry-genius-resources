/**
 * objective : get base , height of a traingle.calculate the area by using the provided .add then display the area.
 * step-1 : get base value of the traingle 
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get vaule from the input field
 * steo-5: convert the vaule to a number.use parseFloat
 */


function calculate() {
   /* get traingle base value */
   const triangleBaseInput = document.getElementById('traingle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText)
   console.log(base);

   const traingleHeight = document.getElementById('triangle-height');
   const traingleHeighttext = traingleHeight.value;
   const height = parseFloat(traingleHeighttext)
   console.log(height);

   const area = 0.5 * base * height;
   console.log('area of the traingle is : ', area);


   // display traingle area 


   const traingleAreaSpan = document.getElementById('trainglre-area');
   traingleAreaSpan.innerText = area;

}
export const methods = {

    convert : function (number, fromBase, toBase) {
        // Convert the number from the fromBase to decimal
        const decimalNumber = parseInt(number, fromBase);
      
        // Convert the decimal number to the toBase
        const convertedNumber = decimalNumber.toString(toBase);
      
        return convertedNumber;
      },



      take : function(element) {
        // Use html2canvas to take a screenshot of the element
        html2canvas(document.getElementById(element), this.options)
          .then(canvas => {
            // Create an image element and set the screenshot as its source
            const img = new Image();
            img.src = canvas.toDataURL();
            this.image = img.src ;
            // Append the image element to the document
            const link = document.createElement("a");
            link.download = "image.png";
            link.href = img.src;
            link.click();
          });
      },


      dis: function(){
        let n = this.number ;
        let base = (this.selectedFruit == 'Binary')*2 +
        (this.selectedFruit == 'Octal')*8 +  
        (this.selectedFruit == 'Hex')*16 || 2 ;
        this.baseTo = base ;
        let arr = [] ;
        while((n >= 1)){
        arr.push([n,base,n % base ]);
        n = Math.floor(n / base);
        }

        this.solved = arr ;
      },


      fsh: function(){
        alert();
      }


     

}
      
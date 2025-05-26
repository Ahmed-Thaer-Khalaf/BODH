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
        html2canvas(document.getElementById(element), this.options) // this.options is from data.js
          .then(canvas => {
            // Create an image element and set the screenshot as its source
            const img = new Image();
            img.src = canvas.toDataURL();
            this.image = img.src ; // Storing the image data, though not directly used for download
            
            // Create a link to trigger the download
            const link = document.createElement("a");
            
            // Generate descriptive filename - this.selectedFruit will be in Arabic.
            // .toLowerCase() might not be ideal for Arabic but is harmless here as OS handles filenames.
            const filename = `conversion_${this.number}_to_${this.selectedFruit.toLowerCase()}.png`;
            link.download = filename;
            
            link.href = img.src;
            link.click();
          });
      },


      dis: function(){
        // Input validation
        const numStr = String(this.number).trim();
        if (numStr === '') {
            this.inputError = ''; // Clear error if input is empty
            this.solved = [];
            return;
        }

        // Regex to check if the input is a valid integer (positive, negative, or zero)
        if (!/^-?\d+$/.test(numStr)) {
            this.inputError = "يرجى إدخال عدد صحيح صالح (أرقام فقط، يمكن أن تبدأ بـ -).";
            this.solved = [];
            return;
        }
        
        this.inputError = ''; // Clear error if input is valid

        let n = parseInt(numStr, 10); 
        
        if (n < 0) {
             this.inputError = "يرجى إدخال عدد موجب لعرض خطوات القسمة.";
             this.solved = []; 
             return; 
        }

        // Updated baseMap with Arabic keys
        const baseMap = {
            'ثنائي': 2,
            'ثماني': 8,
            'سداسي عشري': 16
        };
        let base = baseMap[this.selectedFruit] || 2; 
        this.baseTo = base;
        
        let arr = [] ;
        let currentN = n; 

        if (currentN === 0) { 
            arr.push([0, base, 0]);
        } else {
            while((currentN >= 1)){
                arr.push([currentN, base, currentN % base ]);
                currentN = Math.floor(currentN / base);
            }
        }

        this.solved = arr ;
      },


      fsh: function(){
        alert();
      }
}

export const data = {

    message: 'Hello Vue!',
    number: '',
    inputError: '', 
    baseFrom : "10",
    baseTo : "2",
    image: '',
    tage: '10', // This is the subscript for the input number, should remain '10' (decimal)
    options : {
        backgroundColor	: null, 
        scale : Math.max(window.devicePixelRatio || 1, 2), 
        useCORS: true 
    },

    backgroundColor:{
        hex: "#ff0000",
        binary:"#00ff00",
        decimal: "#0000ff",
    },

    solved : [] ,
    
    // Translated fruits array and default selection
    fruits: ['ثنائي', 'ثماني', 'سداسي عشري'], 
    selectedFruit: 'ثنائي', 
    
};


//--------------------------------------forEach--------------------------------------------//


function printElement(elem, index, array) {
    console.log(`index: ${index}, elem: ${elem}`);
}

    Array.prototype.forEach2  = function(callback, thisArr){
    let array = this;
    
    if(arguments.length>1) array= thisArr;
    
    if (array==null) throw new Error();
    
    const obj = Object(array);
    
    if(typeof callback !== 'function') throw new Error('Argument is not a function');
    
    
    for(let i =0; i<obj.length; i++){
        if(i in obj) callback(array[i], i, array);
    }
}

const array = [1,2,3,4];

array.forEach2(printElement);
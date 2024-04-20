//-----------------------------------------------Filter  -----------------------------------------------------
 

function isEven(elem) {
    return elem % 2===0;
}
 
 Array.prototype.filter2  = function(callback, thisArr){
    let array = this;
    
    if(arguments.length>1) array= thisArr;
    
    if (array==null) throw new Error();
    
    const obj = Object(array);
    
    if(typeof callback !== 'function') throw new Error('Argument is not a function');
    
    const newArr = [];
    
    for(let i =0; i<array.length; i++){
        if(i in obj) if(callback(array[i], i, array)) newArr.push(array[i]);
    }
   return newArr;
}

console.log([1, 2, 3].filter2(isEven, [3, 6, , , 10]));

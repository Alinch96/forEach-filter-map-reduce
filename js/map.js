//---------------------------------------------------- Map --------------------------------------------------
 function multiplyByIndex (elem, index){
    return elem *index;
}
 
 Array.prototype.map2  = function(callback, thisArr){
    let array = this;
    
    if(arguments.length>1) array= thisArr;
    
    if (array==null) throw new Error();
    
    const obj = Object(array);
    
    if(typeof callback !== 'function') throw new Error('Argument is not a function');
    
    const newArr = [];
    
    for(let i =0; i<obj.length; i++){
        if(i in obj) newArr[i] = callback(array[i], i, array);
    }
   return newArr;
}

console.log([1, 2, , , 3].map2(multiplyByIndex));
//----------------------------------------Reduce------------------------------------------------//

function add (accamulator, elem){
    return accamulator + elem;
}
 
    Array.prototype.reduce2  = function(callback, initialValue){
    let array = this;
   
    if (array==null) throw new Error();
   
    if(typeof callback !== 'function') throw new Error('Argument is not a function');
    
    const obj = Object(array);
    let i = 0;
    let result;
    
    if(arguments.length>1) {
        result = initialValue;
    } else {
       result= array[i]; //result = array[0]
       i++; //0+1 = 1
    }
    
    if(i> array.length) throw new Error();
    
    for(; i<obj.length; i++){
        if(i in obj) result = callback(result, array[i], i, array);
    }
   return result;
}

console.log([].reduce2(add, 0));


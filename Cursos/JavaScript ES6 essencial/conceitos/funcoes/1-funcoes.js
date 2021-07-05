function getName(){
    return 'Isaque de Araújo';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
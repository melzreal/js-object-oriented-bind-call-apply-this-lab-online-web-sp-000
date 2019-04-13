//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  justInvoke.call(fn, thisValue, arg);
}

function setThisWithApply(fn, thisValue, args){

}

function returnNewFunctionOf(functionToBeCopied, thisValue){

}

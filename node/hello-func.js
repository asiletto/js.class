function say(something){
 console.log(something);
}

function exec(funct, val){
 funct(val);
}

exec(say, 'Hello world!');

let str1="ababa";
a="";

for(var i=(str1.length-1);i>=0;i--){

    a+=str1[i];
}
if(a==str1){
    console.log("its palindrom");
}
else{
    console.log("its not palindrom");
}
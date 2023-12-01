var store='';
for(var i=1;i<=5;i++)
{
    for(var space=5;space>i;space--)
    {
        store+=' ';

    }
    for(var j=1;j<(i*2);j++)
    {
        store+='*';
    }
    store+='\n'

}

for(var k=4;k>0;k--)
{
   for(var space2=4;space2>=k;space2--)
   {
    store+=' ';
   }
    for(var l=1;l<k*2;l++)
    {
        store+='*';
    }

    store+='\n';


}

console.log(store)

var obj = {
    name:"hiren",
    gender:"male",
    mobile:[1234512345,4567812345,987456123],
    address:{
        city:'Rajkot',
        area:'pedakroad',
        pincode:360003
    }
}

console.log(obj);
console.log(obj.name);
delete obj.gender
obj.email="hiren@gmail.com"
console.log(obj.email);

console.log(obj.gender);
console.log(obj.mobile[1]);


for(i in obj){
    console.log(`key is ${i} value is ${obj[i]}`);
    
}

for(i=0;i<=2;i++){
    console.log(obj.mobile[i]);

    
}
var arr={
    "name":"John",
    "age": "23",
    "year":"2018"
}
// FOR LOOP
for(var i=0;i<arr.length;i++){
    console.log(arr[i].name+" "+arr[i].age+" "+arr[i].year);
}

//FOR IN LOOP
for(var key in arr ){
    console.log(key,arr[key]);
}
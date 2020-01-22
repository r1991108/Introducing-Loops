var todos=[
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy",
];

for (var i=0; i<todos.length; i++){
    console.log("for: " +todos[i]);
}

var todo= todos[0];
var i=0;
while(i<todos.length){
    console.log("while: " +todos[i]);
    i++;
}

var todo= todos[0];
var i=0;
do{
    console.log("do while: "+ todos[i]);
    i++;
}while(i<todos.length);

todos.forEach(function(todos){
    console.log("forEach: "+todos);
})
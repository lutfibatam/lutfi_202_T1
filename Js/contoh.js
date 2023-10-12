<html>
    <head>
        <style>
/* Style the element with the id "myHeader" */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* Style all elements with the class name "city" */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
} 
<!-- An element with a unique id -->
<h1 id="myHeader">My Cities</h1>

<!-- Multiple elements with same class -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
        </style>
    </head>
<body> 
<script>
    const person = {
    fullName: function() {
    return this.firstName + " " + this.lastName;
    }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
} 
function myFunction(){
    document.getElementById("demo").style.fontSize = "25px"; 
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";        
  } 
<button type="button" onclick="myFunction()">Click Me!</button> 
document.getElementById("demo").innerHTML = person.fullName.apply(person1); 
</script>

</body>
</html>
<script>
  export let name;
  export let greeting = "Hello"

  function changeGreeting(){
   if(greeting === "Hello"){
    greeting = "Bye"
   }else{
    greeting = "Hello"
   }
  }
</script>


<h1 on:click={changeGreeting} on:keydown={changeGreeting}>{greeting} {name}</h1>

<style>
  h1{
    color:powderblue;
    user-select:none;
  }
</style>
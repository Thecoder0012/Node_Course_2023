<script>
  let myColor = "#000000";

  import io from 'socket.io-client';
  const socket = io("http://localhost:8080");

  function handleClick(){
    console.log(myColor);
    socket.emit("A client chose a color", {data: myColor})
  }

</script>

<input id="colorInput" type="color" bind:value={myColor}>
<button on:click={handleClick}>Send</button>




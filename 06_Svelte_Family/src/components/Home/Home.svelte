<script>

    import { fridgeMessages } from "../../store/fridgeMessages.js";

     function eraseFridgeMessages() {
        fridgeMessages.set([]);
    }

    function addFridgeMessages(){
        fridgeMessages.set(["Goodmorning"]);
    }

</script>

<h5>{$fridgeMessages}</h5>
<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>


<h5>{$fridgeMessages}</h5>
<button on:click={addFridgeMessages}>Add Fridge Messages</button>


<slot></slot>


<p>------------------------</p>
<p>|
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
     Welcome         
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    |</p>
<p>------------------------</p>


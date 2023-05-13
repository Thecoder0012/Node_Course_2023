<script>
    import Bird from "./Bird.svelte";
     let birdIndex = 0;
    const birds = ["Pigeon","Crow","Eagle"];
    const birdEmojis = ["🐦"];
    let favoriteBird = birds[birdIndex]


    function changeBird(){
        birdIndex = (birdIndex + 1) % birds.length;
        favoriteBird = birds[birdIndex];
    }
</script>

<div on:click={changeBird}>
<Bird  name={birds[0]} emoji={birdEmojis[0]}/>
</div>

<h2>All birds</h2>

{#each birds as bird}
        <Bird name={bird}/>
{/each}
<script>
    import {BASE_URL,USERNAME} from "../../stores/globalStore.js";
    let username = "";

    async function registerUser(){
        fetch($BASE_URL + "/register",{
            method: "POST",
            credentials: "include",
            body: JSON.stringify({username}),
            headers:{"Content-Type": "application/json"}
        })
    }
</script>

<h1>Register page</h1>

<input placeholder="username" bind:value={username}>
<button on:click={registerUser}>Register now</button>
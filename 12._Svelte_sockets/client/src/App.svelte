<script>
  import Colors from "./pages/Colors/Colors.svelte";
  import Register from "./pages/Colors/Register.svelte";
  import {BASE_URL,USERNAME} from "./stores/globalStore.js";
  import {onMount} from "svelte";

  onMount(async () => {
    const response = await fetch(BASE_URL + "/users/me",
    {
      credentials: "include"
    });
    const result = await response.json();
    USERNAME.set(result.data);
  })
</script>


{#if $USERNAME}
  <Colors />
{:else}
  <Register />
{/if}

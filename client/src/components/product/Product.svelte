<script>
import { onMount } from "svelte";
import { synthURL } from "../../store/productData.js";

export let products = [];

onMount(async () => {
    const res = await fetch(`http://localhost:3000/api/synths`);
    const { data: productArray } = await res.json();
    products = productArray;
});

function addToCart(){

}

</script>

<div class="products">
	{#each products as product}
    <tr>
        <td>{product.productName}</td>
        <td>Price: {product.price}</td>
        <td>{product.description}</td>
        <td><button class="addToCart" on:click={addToCart}> Buy </button></td>
    </tr>
    {/each}
</div>

<style>
    * {
    border : solid 1px pink;
    }
</style>
<script>
    import { onMount } from "svelte";
    import { synthURL, cartItems, amountOfItems } from "../../store/productData.js";
    
    export let products = [];
    
    onMount(async () => {
        const res = await fetch(synthURL);
        const { data: productArray } = await res.json();
        products = productArray;
    });
    
    
    const addToCart = (product) => {
            cartItems.update(items => [...items, product]);
            }
     
    
    </script>
    
    <div class="products">
        {#each products as product}
        <tr>
            <td>{product.productName}</td>
            <td>Price: {product.price}</td>
            <td>{product.description}</td>
            <td><button class="addToCart" on:click={() => addToCart(product)}> Buy </button></td>
        </tr>
        {/each}
    </div>
    
    <style>
        * {
        border : solid 1px pink;
        }
    </style>
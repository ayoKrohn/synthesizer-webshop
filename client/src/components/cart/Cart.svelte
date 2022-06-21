<script>
    import {cartItems, amountOfItems} from "../../store/store.js";
   
   
</script>
   
<div class="shopping-cart">
{#each $cartItems as item}
<tr>
    <td>{item.productName}</td>
    <td>Price: {item.price}</td>
    <td>{item.description}</td>
   <td>{$amountOfItems}</td>
</tr>
{/each} 
</div>
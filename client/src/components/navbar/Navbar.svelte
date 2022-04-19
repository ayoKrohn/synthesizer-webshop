<script>
	import { Router, Link, Route } from "svelte-navigator";
	

</script>
<Router>
	<nav>
		<Link to="/">Home</Link>
        <Link to="/synths">Synths</Link> 
		<Link to="/drummachines">Drum machines</Link>
		<Link to="/about">About</Link>
		<Link to="/login">Login</Link>
		<Link to="/cart"><img class="cart" src="images/shopping-cart.png" alt="Cart" /></Link>
	</nav>
</Router>	

<style>
	nav {
		position: relative;
		width: 100%;
		background-color: rgb(116, 242, 73);			
	}

	img {
	
  left: 10%;
  top: 10%;
  width: 10%;
  height: auto;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
	
</style>
<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "../../pages/home/Home.svelte";
	import Synths from "../../pages/synths/Synths.svelte";
	import About from "../../pages/about/About.svelte";
	import Login from "../../pages/login/Login.svelte";
	import ShoppingCart from "../../pages/shopping-cart/shoppingCart.svelte";


</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
        <Link to="/synths">Synths</Link> 
		<Link to="/about">About</Link>
		<Link to="/login">Login</Link>
		<Link to="/cart"><img class="cart" src="images/shopping-cart.png" alt="Cart" /></Link>
	</nav>
	<div>
		<Route path="/" component={Home}></Route>
        <Route path="/synths" component={Synths}></Route>
		<Route path="/about" component={About}></Route>
		<Route path="/login" component={Login}></Route>
		<Route path="/cart" component={ShoppingCart}></Route> 
	</div>	
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
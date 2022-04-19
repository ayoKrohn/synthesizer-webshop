<script>
import { Router, Route, Link } from "svelte-navigator";
import Navbar from "./components/navbar/Navbar.svelte";
import Home from "./pages/home/Home.svelte";
import Synths from "./pages/synths/Synths.svelte";
import Drummachines from "./pages/drummachines/drummachines.svelte";
import About from "./pages/about/About.svelte";
import Login from "./pages/login/Login.svelte";


</script>

<Navbar/>

<Router>
		<Route path="/" component={Home}></Route>
        <Route path="/synths" component={Synths}></Route>
		<Route path="/drummachines" component={Drummachines}></Route>
		<Route path="/about" component={About}></Route>
		<Route path="/login" component={Login}></Route> 
</Router>

<style>
	
</style>
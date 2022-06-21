<script>
    import { Router, Route, Link } from "svelte-navigator";
    import Navbar from "./components/navbar/Navbar.svelte";
    import { SvelteToast } from '@zerodevx/svelte-toast';
    
    
    const options = {
        theme: {
          "--toastBackground": "#48BB78"
    },
    };
    
    </script>
    
    <Navbar/>
    <SvelteToast {options} />
   
    <style>
        
    </style>
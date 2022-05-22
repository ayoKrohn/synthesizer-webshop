<script>
  import { navigate } from "svelte-navigator";
  import { loginURL, signupURL } from "../../store/productData.js";
  import { toast } from "@zerodevx/svelte-toast";

  let user = {};
  let newUser = {}; 
  let errMsg = "";

  const login = async () => {
    const res = await fetch(loginURL, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });

    errMsg = res.text();
    if (res.status === 200) {
      toast.push("YES! Your credentials were approved for login");
      navigate("/", { replace: true });
    } else {
      toast.push("OBS! You credentials were not correct, try again!", {
        theme: {
          "--toastBackground": "#F56565",
          "--toastBarBackground": "#C53030",
        },
      });
    }  
  };

  const signup = async () => {
    const res = await fetch(signupURL, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newUser),
    });
    
    //toastr.success('Have fun storming the castle!', 'Miracle Max Says')
  };

</script>

<div class="login">
<h1>Login</h1>
<label for="email">Email</label>
<input placeholder="Email" name="email"  bind:value={user.email}>

<label for="password">Password</label>
<input type="password" placeholder="password" name="password" bind:value={user.password}>
<button type="submit" on:click={login}>Login</button>
</div>

<h3> or </h3>

<div class="signup">
<h1>Signup</h1>
<label for="email">Email</label>
<input placeholder="Email" name="email" bind:value={newUser.email}>
    
<label for="password">Password</label>
<input type="password" placeholder="password" name="password" bind:value={newUser.password}>
<button type="submit" on:click={signup}>Sign Up</button>
</div>



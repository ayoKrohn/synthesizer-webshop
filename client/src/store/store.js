import { readable } from "svelte/store";
import { writable } from "svelte/store";

export const synthURL = "http://localhost:3000/api/synths";

export const loginURL = "http://localhost:3000/api/users/login";

export const signupURL = "http://localhost:3000/api/users/signup";

export const amountOfItems = writable(0);

export const cartItems = writable([]);

export const loggedInUser = writable(null);


//vi henter en bruger i db 
export const fetchUser = async (userData) => {
    const options = makeOptions("POST", userData);
    const res = await fetch(loginURL, options);
   // const user = await res.json()
    //console.log(user);
    console.log(res);
    return res;
    }

    /*if (res.ok) {
        console.log(res);
        toast.push("YES! Your credentials were approved for login");
      navigate("/", { replace: true });
    
    } else {
        toast.push("OBS! You credentials were not correct, try again!", {
            theme: {
              "--toastBackground": "#F56565",
              "--toastBarBackground": "#C53030",
            },
          }); */

//generisk metode der indsætter options
export const makeOptions = (method, body) => {
    const opt = {
    method: method,
    mode: "cors", //tillader cors
    credentials: "include", //læs op    
    headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      },
    };
    if (body) { //hvis der er en body som i post kald, sender vi body med
        opt.body = JSON.stringify(body);
        // console.log(opt.body);
    } 
    return opt;
} 


    




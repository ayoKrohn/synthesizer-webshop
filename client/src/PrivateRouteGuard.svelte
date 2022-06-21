<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { loggedInUser } from "./store/store.js";

	const navigate = useNavigate();
	const location = useLocation();

	$: if (!$loggedInUser) {
		navigate("/login", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if $loggedInUser}
	<slot />
{/if}
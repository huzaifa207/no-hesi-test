<script lang="ts">
	import { BASE_URL } from "$env/static/private";

	const google = () => {
		window.open(`${BASE_URL}/auth/google/api`, '_self');
	};

	const discord = () => {
		window.open(`${BASE_URL}/auth/discord/api`, '_self');
	};
</script>

<div class="flex min-h-screen flex-col gap-4 items-center justify-center">
	<h1 class="text-purple-900 font-black text-3xl">NoHesi Test Auth</h1>
	<div class="flex justify-center gap-4">
		<button
			class="border border-gray-700 rounded-md px-4 py-2 font-semibold text-white bg-red-600 hover:bg-red-500"
			on:click={google}>Google</button
		>
		<button
			on:click={discord}
			class="border border-gray-700 rounded-md px-4 py-2 font-semibold text-white bg-blue-900 hover:bg-blue-800"
			>Discord</button
		>
	</div>

	<div class="flex justify-between items-center border border-gray-700 rounded-md p-6 gap-10">
		<form method="POST" action="?/login" class="flex flex-col gap-4">
			<h2 class="text-center font-bold text-purple-900 text-2xl">Login</h2>
			<div class="flex flex-col gap-1">
				<label for="email" class="font-medium text-xs">Email</label>
				<input
					type="email"
					name="email"
					id="login-email"
					required
					class="border border-gray-500 rounded-sm px-3 py-1"
				/>
			</div>

			<div class="flex flex-col gap-1">
				<label for="password" class="font-medium text-xs">Passowrd</label>
				<input
					type="password"
					name="password"
					id="login-password"
					required
					class="border border-gray-500 rounded-sm px-3 py-1"
				/>
			</div>

			<button
				type="submit"
				class="rounded-md px-4 py-2 font-semibold text-white bg-purple-700 hover:bg-purple-600"
				>Login</button
			>
		</form>
		<div class="flex flex-col items-center">
			<div class="w-[1px] h-8 bg-gray-300" />
			<p
				class="font-semibold text-gray-400 rounded-full p-1 border border-gray-300 bg-gray-100 w-8 h-8 flex items-center justify-center"
			>
				OR
			</p>
			<div class="w-[1px] h-8 bg-gray-300" />
		</div>

		<form method="POST" action="?/register" class="flex flex-col gap-4">
			<h2 class="text-center font-bold text-purple-900 text-2xl">Signup</h2>
			<div class="flex flex-col gap-1">
				<label for="username" class="font-medium text-xs">Username</label>
				<input
					type="text"
					name="username"
					id="signup-username"
					required
					class="border border-gray-500 rounded-sm px-3 py-1"
				/>
			</div>
			<div class="flex flex-col gap-1">
				<label for="email" class="font-medium text-xs">Email</label>
				<input
					type="email"
					name="email"
					id="signup-email"
					required
					class="border border-gray-500 rounded-sm px-3 py-1"
				/>
			</div>

			<div class="flex flex-col gap-1">
				<label for="password" class="font-medium text-xs">Passowrd</label>
				<input
					type="password"
					name="password"
					id="signup-password"
					required
					class="border border-gray-500 rounded-sm px-3 py-1"
				/>
			</div>

			<button
				type="submit"
				class="rounded-md px-4 py-2 font-semibold text-white bg-purple-700 hover:bg-purple-600"
				>Signup</button
			>
		</form>
	</div>
</div>

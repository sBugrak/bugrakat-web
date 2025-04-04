import { component$, useSignal } from '@builder.io/qwik';
import { Form, Link } from '@builder.io/qwik-city';

export default component$(() => {
    const username = useSignal('');
    const email = useSignal('');
    const password = useSignal('');
    const confirmPassword = useSignal('');

    return (
        <section class="container mx-auto py-8 max-w-md">
            <h2 class="text-3xl font-bold mb-6 text-center">Register</h2>
            <Form class="space-y-4">
                <div>
                    <label for="username" class="block text-sm font-medium mb-1">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username.value}
                        onInput$={(e) => (username.value = (e.target as HTMLInputElement).value)}
                        class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Choose a username"
                        required
                    />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email.value}
                        onInput$={(e) => (email.value = (e.target as HTMLInputElement).value)}
                        class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password.value}
                        onInput$={(e) => (password.value = (e.target as HTMLInputElement).value)}
                        class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Create a password"
                        required
                    />
                </div>
                <div>
                    <label for="confirm-password" class="block text-sm font-medium mb-1">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword.value}
                        onInput$={(e) => (confirmPassword.value = (e.target as HTMLInputElement).value)}
                        class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Register
                </button>
            </Form>
            <p class="mt-4 text-center">
                Already have an account?{' '}
                <Link href="/enter" class="nav-link text-sky-500 hover:underline">
                    Enter Here
                </Link>
            </p>
        </section>
    );
});
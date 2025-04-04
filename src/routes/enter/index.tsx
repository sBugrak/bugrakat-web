import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Form, Link } from '@builder.io/qwik-city';

export default component$(() => {
    const email = useSignal('');
    const password = useSignal('');
    const showPassword = useSignal(false);

    useVisibleTask$(() => {
        const loginEmail = localStorage.getItem('loginEmail');
        const loginPassword = localStorage.getItem('loginPassword');

        if (loginEmail) email.value = loginEmail;
        if (loginPassword) password.value = loginPassword;
    });

    return (
        <section class="container mx-auto py-8 max-w-md">
            <h2 class="text-3xl font-bold mb-6 text-center">Login</h2>
            <Form class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email.value}
                        onInput$={(e) => {
                            email.value = (e.target as HTMLInputElement).value;
                            localStorage.setItem('loginEmail', email.value);
                        }}
                        class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div class="relative">
                    <label for="password" class="block text-sm font-medium mb-1">Password</label>
                    <input
                        type={showPassword.value ? 'text' : 'password'}
                        id="password"
                        value={password.value}
                        onInput$={(e) => {
                            password.value = (e.target as HTMLInputElement).value;
                            localStorage.setItem('loginPassword', password.value);
                        }}
                        class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="button"
                        onClick$={() => (showPassword.value = !showPassword.value)}
                        class="absolute right-2 transform translate-y-1/4 text-xl"
                    >
                        {showPassword.value ? '😎' : '👁️'}
                    </button>
                </div>
                <button
                    type="submit"
                    class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Login
                </button>
            </Form>
            <p class="mt-4 text-center">
                Don't have an account?{' '}
                <Link href="/register" class="nav-link text-sky-500 hover:underline">Register Here</Link>
            </p>
        </section>
    );
});
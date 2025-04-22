import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <main className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50">
                <h1 className="text-4xl font-bold mb-8">Welcome to HavenLane </h1>
                <div className="bg-indigo-100 border border-gray-200 shadow-md p-6 mb-8 max-w-xl">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Feel free to take your time exploring —<br />
                        browse through our collection at your own pace,<br />
                        and discover pieces that truly resonate with your style.
                    </p>
                </div>

                <div className="flex space-x-4">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="btn btn-primary"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="btn btn-soft"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <footer className="mt-12 text-sm text-gray-500">
                    Laravel v{laravelVersion} · PHP v{phpVersion}
                </footer>
            </main>
        </>
    );
}

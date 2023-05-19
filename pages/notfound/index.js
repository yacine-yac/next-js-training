import   Link  from "next/link";

export default function notFound() {
    return (
        <div>
            <h1>
                Page Not Found
            </h1>
            <Link href="/">Back Home</Link>
        </div>
    );
} 
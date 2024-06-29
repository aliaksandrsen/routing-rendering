import Link from 'next/link';

export default function MainHeader() {
  return (
    <div>
      <h1>MainHeader</h1>
      <Link href="/">Home</Link>
      <Link href="/news">News</Link>
    </div>
  );
}

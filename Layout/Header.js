// components/Layout/Header.js
import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
    <h1 className="text-xl">To-Do List App</h1>
    <nav>
      <Link href="/"><a className="mr-4">Home</a></Link>
      <Link href="/settings"><a>Settings</a></Link>
    </nav>
  </header>
);

export default Header;

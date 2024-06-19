import { Outlet } from 'react-router-dom';

import { Link } from '~/router';

export default function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

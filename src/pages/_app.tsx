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

        <section>
          <hr />
          <p>⚛️ A minimal React + Vite + TypeScript starter template with 📁 file-based routing.</p>
          <p>Use this template from <a href="https://github.com/up2dul/rvtgb" target="_blank" rel="noreferrer">GitHub</a>.</p>
        </section>
      </main>
    </>
  );
}

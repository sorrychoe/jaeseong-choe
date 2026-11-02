import React, { useSyncExternalStore } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'cv', label: 'CV' },
  { id: 'research', label: 'Research' },
  { id: 'development', label: 'Development' },
];

// next/link changes the hash with pushState, which doesn't fire hashchange;
// typing a hash into the URL fires only hashchange. Listen for both.
function subscribeToHash(callback) {
  window.addEventListener('hashchange', callback);
  Router.events.on('hashChangeComplete', callback);
  Router.events.on('routeChangeComplete', callback);
  return () => {
    window.removeEventListener('hashchange', callback);
    Router.events.off('hashChangeComplete', callback);
    Router.events.off('routeChangeComplete', callback);
  };
}

export function useActiveTab() {
  const hash = useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash.slice(1),
    () => ''
  );
  return TABS.some((tab) => tab.id === hash) ? hash : TABS[0].id;
}

export function TabLink(props) {
  return <Link {...props} onClick={() => window.scrollTo(0, 0)} />;
}

function Navbar() {
  const activeTab = useActiveTab();
  const isHome = useRouter().pathname === '/';
  const Name = isHome ? 'h1' : 'p';

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <Name className={styles.name}>Jaeseong Choe</Name>
        </Link>
        <nav aria-label="Main">
          <ul className={styles.list}>
            {TABS.map((tab) => (
              <li key={tab.id}>
                <TabLink
                  href={`/#${tab.id}`}
                  className={styles.link}
                  aria-current={isHome && tab.id === activeTab ? 'page' : undefined}
                >
                  {tab.label}
                </TabLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

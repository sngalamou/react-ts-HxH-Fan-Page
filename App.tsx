import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="app"> 
    <header className="Header">HxH</header>
    <div className="HolyGrailLayout">
        <main className="MainContent">Main Content</main>
        <nav className="SideNav">
          <ul>
            <li>Home</li>
            <li>Episodes</li>
            <li>Forums</li>
            <li>User Accounts</li>
          </ul>
        </nav>
        <aside className="Sidebar">Sidebar</aside>
      </div>
      <footer className="Footer">Footer</footer>
         
    </div>
    
  );
}

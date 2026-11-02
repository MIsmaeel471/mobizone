export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} MobiZone Mobile Shop. Built with React.js</p>
        <small>Prices and specifications shown are sample values for demonstration only.</small>
      </div>
    </footer>
  );
}

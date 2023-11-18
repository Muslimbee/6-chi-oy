export default function Navbar({ isSigning, setSigning }) {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">Logo</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Sign in</li>
        <li className="nav-item">
          <button onClick={() => setSigning(!isSigning)}>Sign In</button>
        </li>
      </ul>
    </div>
  );
}

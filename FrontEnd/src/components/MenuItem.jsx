import { Link } from "react-router-dom";

export default function MenuItem({ to, children }) {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
}
// NavigationItem.js
import Link from 'next/link';

const NavigationItem = ({ href, label }) => (
  <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">
    <Link href={href}>{label}</Link>
  </li>
);

export default NavigationItem;

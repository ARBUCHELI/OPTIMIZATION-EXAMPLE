import { Link } from 'react-router-dom';
import './styles.css';

export const Home = () => {
  return (
    <div className='container'>
      <h1>Advanced React: Optimization Examples</h1>
      <p className='home-description'>
        Get started by clicking the links to each example:
      </p>
      <ul className='home-list'>
        <li>Example 1: Introduction</li>
        <li>
          <Link to='/exercises/2'>Example 2: Memoizing Values</Link>
        </li>
        <li>
          <Link to='/exercises/3'>Example 3: Memoizing Components</Link>
        </li>
        <li>
          <Link to='/exercises/4'>Example 4: Memoizing Functions</Link>
        </li>
        <li>
          <Link to='/exercises/5'>Example 5: Code Splitting Modules</Link>
        </li>
        <li>
          <Link to='/exercises/6'>Example 6: Code Splitting Components</Link>
        </li>
        <li>
          <Link to='/exercises/7'>Example 7: Suspense</Link>
        </li>
        <li>Example 8: Review</li>
      </ul>
    </div>
  );
};

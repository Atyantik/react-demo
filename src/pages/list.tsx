import { FC } from 'react';
import { Head, Link } from '@reactpwa/core';

const List: FC = () => (
  <>
    <Head>
      <title>Style guide</title>
    </Head>
    <div className="container" style={{ paddingBottom: '40px' }}>
      <br />
      <h1 className="h2">Demo</h1>
      <ul>
        <li>
          <Link to="/home/">Home</Link>
        </li>
      </ul>
    </div>
  </>
);

export default List;

import { Outlet } from '@reactpwa/core';
import { FC } from 'react';

const Shell: FC = () => (
  <div>
    <header><i>Header</i></header>
    <Outlet />
    <footer><i>Footer</i></footer>
  </div>
);

export default Shell;

import { Outlet } from '@reactpwa/core';
import { FC } from 'react';
import { Footer } from './footer';
import { Header } from './header';

const Shell: FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Shell;

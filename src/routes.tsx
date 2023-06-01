import { Routes } from '@reactpwa/core';
import { PageLoader } from '@components/page-loader';
import { computeCssVariables } from '@utils/css-vars.util';
import '@resources/css/styles.scss';

const routes: Routes = async (args) => {
  const { addToHeadPreStyles } = args;
  /**
   * Add root variables in head before the
   * stylesheets are loaded.
   */
  addToHeadPreStyles(
    <style
      id="css-variables"
      key="site-css-variables"
      dangerouslySetInnerHTML={{
        __html: `:root{${computeCssVariables}}`,
      }}
    />,
  );

  return [
    {
      path: '',
      element: () => import('@pages/list'),
    },

    {
      path: '/',
      element: () => import('@components/shell'),
      children: [
        {
          path: 'home',
          element: () => import('@pages/home'),
          skeleton: PageLoader,
        },
      ],
    },
  ];
};

export default routes;

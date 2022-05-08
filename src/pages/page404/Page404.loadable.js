import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const LoadableComponent = Loadable({
  loader: () => import('./Page404.component'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const Page404 = props => <LoadableComponent {...props} />;

Page404.displayName = 'Page404';

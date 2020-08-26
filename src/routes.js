import Home from 'pages/Home';

export default [
  {
    path: ['/:id', '/'],
    exact: true,
    cache: false,
    component: Home,
    sagasToRun: [],
    title: 'Home',
  },
];

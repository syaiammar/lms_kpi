export default {
  items: [
    {
      name: 'Home',
      url: '/dashboard',
      icon: 'icon-home',
    },
    {
      name: 'Key Metrics',
      url: '/base',
      icon: 'cui-file',
      children: [
        {
          name: 'Executive Summary',
          url: '/base/executive',
          icon: '',
        },
        {
          name: 'Income Statment',
          url: '/base/income',
          icon: '',
        },
        {
          name: 'Daily Revenue',
          url: '/base/breadcrumbs',
          icon: '',
        },
        {
          name: 'Daily Traffic Volume',
          url: '/base/cards',
          icon: '',
        },
        {
          name: 'Average Vehicle KM',
          url: '/base/carousels',
          icon: '',
        },
        {
          name: 'Full Route Equivalente',
          url: '/base/collapses',
          icon: '',
        },
        {
          name: 'Accident',
          url: '/base/dropdowns',
          icon: '',
        },
        {
          name: 'Traffic Classification',
          url: '/base/forms',
          icon: '',
        },
        {
          name: 'Financial Summary',
          url: '/base/jumbotrons',
          icon: '',
        },
        {
          name: 'Cashflow',
          url: '/base/list-groups',
          icon: '',
        },
        {
          name: 'Balance Sheet',
          url: '/base/navs',
          icon: '',
        },
      ],
    },
    {
      name: 'KPI',
      url: '/Report',
      icon: 'cui-cursor',
      children: [
    {
      name: 'Corporate',
      url: '/corp',
      icon: '',
    },
    {
      name: 'Divisi',
      url: '/settings',
      icon: '',
    },
    {
      name: 'Departement',
      url: '/base/dept',
      icon: '',
    },
  ],
},
    {
      name: 'Operational Data',
      url: '/Settings',
      icon: 'cui-people',
    },
       {
      name: 'Upload Data',
      url: '/upload',
      icon: 'cui-chart',
      children: [
        {
          name: 'Input Metrics',
          url: '/corp',
          icon: '',
        },
        {
          name: 'Input Data Oprational',
          url: '/settings',
          icon: '',
        },
      ]
    },
            {
          name: 'Calendar of Events',
          url: '/Widgets',
          icon: 'icon-calendar',
        },
        {
          name: 'Settings',
          url: '/setingan',
          icon: 'icon-settings',
        },
  ],
};

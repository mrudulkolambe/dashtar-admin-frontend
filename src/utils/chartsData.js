export const doughnutLegends = [
  { title: 'Fresh Vegetable', color: 'bg-green-500' },
  { title: 'Cooking Essentials', color: 'bg-blue-500' },
  { title: 'Drinks', color: 'bg-orange-500' },
  { title: 'Organic Food', color: 'bg-indigo-500' },
];

export const lineLegends = [
  { title: 'Organic', color: 'bg-teal-600' },
  { title: 'Paid', color: 'bg-purple-600' },
];

export const barLegends = [
  { title: 'Fresh Vegetable', color: 'bg-green-500' },
  { title: 'Cooking Essentials', color: 'bg-blue-500' },
  { title: 'Drinks', color: 'bg-orange-500' },
  { title: 'Organic Food', color: 'bg-indigo-500' },
];

export const pieLegends = [
  { title: 'Organic', color: 'bg-teal-600' },
  { title: 'Paid', color: 'bg-purple-600' },
];

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [35, 30, 15, 20],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ['#10B981', '#3B82F6', '#F97316', '#0EA5E9'],
        label: 'Dataset 1',
      },
    ],
    labels: ['Fresh Vegetable', 'Cooking Essentials', 'Drinks', 'Organic Food'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
};

export const lineOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Organic',
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#0694a2',
        borderColor: '#0694a2',
        data: [43, 48, 40, 54, 67, 73, 70],
        fill: false,
      },
      {
        label: 'Paid',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#7e3af2',
        borderColor: '#7e3af2',
        data: [24, 50, 64, 74, 52, 51, 65],
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
  legend: {
    display: false,
  },
};

export const barOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Fresh Vegetable',
        backgroundColor: '#10B981',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [15, 35, 45, 40, 70, 85, 90],
      },
      {
        label: 'Cooking Essentials',
        backgroundColor: '#3B82F6',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [5, 25, 50, 35, 24, 32, 84],
      },
      {
        label: 'Drinks',
        backgroundColor: '#F97316',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [10, 45, 52, 74, 33, 50, 70],
      },
      {
        label: 'Organic Food',
        backgroundColor: '#0EA5E9',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [20, 35, 30, 74, 33, 40, 70],
      },
    ],
  },
  options: {
    responsive: true,
  },
  legend: {
    display: false,
  },
};

export const pieOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: '# of Votes',
        data: [30, 45, 50, 45, 42, 55],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
  legend: {
    display: false,
  },
};

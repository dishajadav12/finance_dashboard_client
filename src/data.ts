export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Dashboard",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1312451456/photo/business-woman-at-office-stock-photo.jpg?s=612x612&w=0&k=20&c=1L7yTeY2VcQpm7NgmwHj6rKudVkc0skMAH7Ot5T2oZo=",
    username: "Khushi Sharma",
    email: "khashi@gmail.com",
    amount: "3668",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2kBY2c7QGP9kx0A_fcIDRMmmLZt5_nklOg&usqp=CAU",
    username: "Isha Dahia",
    email: "Isha@gmail.com",
    amount: "3256",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1036079862/photo/i-have-all-the-determination-to-succeed-big.jpg?s=612x612&w=0&k=20&c=AJGXyAarUUDQbgh_LhuqfHXeZQtGZy9P-y7KMb5jkAo=",
    username: "Devanshi Jadav",
    email: "devanshi@gmail.com",
    amount: "2998",
  },
  {
    id: 4,
    img: "https://as2.ftcdn.net/v2/jpg/05/73/43/47/1000_F_573434786_u5oTtQo07UomjUEkpx8OP57jwDW8nZDL.jpg",
    username: "Shivani pandya",
    email: "shivani@gmail.com",
    amount: "2512",
  },

];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Income",
  number: "2,50,000",
  dataKey: "users",
  chartData: [
    { name: "2000", users: 90000 },
    { name: "2005", users: 35000 },
    { name: "2010", users: 40000 },
    { name: "2015", users:  60000},
    { name: "2020", users: 80000 },
    { name: "present", users: 250000 },
  ],
};


export const chartBoxProduct = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Balance",
  number: "56432",
  dataKey: "revenue",
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total savings",
  number: "238",
  dataKey: "products",
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Expence",
  number: "2.6",
  dataKey: "expence",
  chartData: [
    { name: "Sun", expence: 400 },
    { name: "Mon", expence: 600 },
    { name: "Tue", expence: 500 },
    { name: "Wed", expence: 700 },
    { name: "Thu", expence: 400 },
    { name: "Fri", expence: 500 },
    { name: "Sat", expence: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Monthly Expence (Week vise)",
  color: "#8884d8",
  dataKey: "expense",
  chartData: [
    {
      name: "week1",
      expense: 4000,
    },
    {
      name: "week2",
      expense: 3000,
    },
    {
      name: "week3",
      expense: 2000,
    },
    {
      name: "week4",
      expense: 2780,
    },
    {
      name: "week5",
      expense: 1890,
    },

  ],
};

export const barChartBoxVisit = {
  title: "Yearly Expence",
  color: "#98FB98",
  dataKey: "expence",
  chartData: [
    {
      name: "Sun",
     expence: 14000,
    },
    {
      name: "Mon",
     expence: 13000,
    },
    {
      name: "Tue",
     expence: 12000,
    },
    {
      name: "Wed",
     expence: 12780,
    },
    {
      name: "Thu",
     expence: 11890,
    },
    {
      name: "Fri",
     expence: 15390,
    },
    {
      name: "Sat",
     expence: 13490,
    },    {
      name: "Tue",
     expence: 12000,
    },
    {
      name: "Wed",
     expence: 12780,
    },
    {
      name: "Thu",
     expence: 14890,
    },
    {
      name: "Fri",
     expence: 20390,
    },
    {
      name: "Sat",
     expence: 23490,
    },
  ],
};


export const singleUser = {
  id: 1,
  title: "Disha Jadav",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L3LikQv4W3Qt71mWHAd5HAptpY2UoZe0mg&usqp=CAU",
  info:{
    username: "disha12",
    fullname: "Disha Vijaysinh Jadav",
    email: "disha@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "debited", color: "#82ca9d" },
      { name: "credited", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        debited: 4000,
        credited: 5400,
      },
      {
        name: "Mon",
        debited: 3000,
        credited: 3098,
      },
      {
        name: "Tue",
        debited: 2000,
        credited: 3800,
      },
      {
        name: "Wed",
        debited: 2780,
        credited: 3908,
      },
      {
        name: "Thu",
        debited: 1890,
        credited: 4800,
      },
      {
        name: "Fri",
        debited: 2390,
        credited: 3800,
      },
      {
        name: "Sat",
        debited: 3490,
        credited: 4300,
      },
    ],
  },
  activities: [
    {
      text: "You have spent highest 30000 INR in one day.",
      time: "3 day ago",
    },
    {
      text: "Most transactions have been done in the last month",
      time: "1 week ago",
    },
    {
      text: "Khushi Sharma owes 45000 INR",
      time: "2 weeks ago",
    },
    {
      text: "Your expence has been decreased in this week compared to the previous week.",
      time: "2 months ago",
    },
  ],
};

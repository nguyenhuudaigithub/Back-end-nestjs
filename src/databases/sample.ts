export const ADMIN_ROLE = 'SUPER_ADMIN';
export const USER_ROLE = 'NORMAL_USER';

export const INIT_PERMISSIONS = [
  {
    _id: {
      $oid: '648ab6d3fa16b294212e4033',
    },
    name: 'Create User',
    apiPath: '/api/v1/users',
    method: 'POST',
    module: 'USERS',
    createdAt: {
      $date: '2023-06-15T06:59:31.898Z',
    },
    updatedAt: {
      $date: '2023-06-15T06:59:31.898Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ab6fdfa16b294212e403d',
    },
    name: 'Get User with paginate',
    apiPath: '/api/v1/users',
    method: 'GET',
    module: 'USERS',
    createdAt: {
      $date: '2023-06-15T07:00:13.364Z',
    },
    updatedAt: {
      $date: '2023-06-15T07:00:13.364Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ab719fa16b294212e4042',
    },
    name: 'Update User',
    apiPath: '/api/v1/users/:id',
    method: 'PATCH',
    module: 'USERS',
    createdAt: {
      $date: '2023-06-15T07:00:41.934Z',
    },
    updatedAt: {
      $date: '2023-06-15T07:00:41.934Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad4a6dafdb9754f40b850',
    },
    name: 'Update a Profile',
    apiPath: '/api/v1/profile/:id',
    method: 'PATCH',
    module: 'PROFILE',
    createdAt: {
      $date: '2023-06-15T09:06:46.085Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:06:46.085Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad622dafdb9754f40b89f',
    },
    name: 'Fetch roles with paginate',
    apiPath: '/api/v1/roles',
    method: 'GET',
    module: 'ROLES',
    createdAt: {
      $date: '2023-06-15T09:13:06.618Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:13:06.618Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad630dafdb9754f40b8a6',
    },
    name: 'Fetch role by id',
    apiPath: '/api/v1/roles/:id',
    method: 'GET',
    module: 'ROLES',
    createdAt: {
      $date: '2023-06-15T09:13:20.853Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:13:20.853Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad650dafdb9754f40b8b0',
    },
    name: 'Delete a Role',
    apiPath: '/api/v1/roles/:id',
    method: 'DELETE',
    module: 'ROLES',
    createdAt: {
      $date: '2023-06-15T09:13:52.798Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:13:52.798Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ab728fa16b294212e4047',
    },
    name: 'Delete User',
    apiPath: '/api/v1/users/:id',
    method: 'DELETE',
    module: 'USERS',
    createdAt: {
      $date: '2023-06-15T07:00:56.274Z',
    },
    updatedAt: {
      $date: '2023-06-15T07:00:56.274Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ab750fa16b294212e404c',
    },
    name: 'Upload Single File',
    apiPath: '/api/v1/files/upload',
    method: 'POST',
    module: 'FILES',
    createdAt: {
      $date: '2023-06-15T07:01:36.923Z',
    },
    updatedAt: {
      $date: '2023-06-15T07:01:36.923Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad5aedafdb9754f40b886',
    },
    name: 'Fetch Permission with paginate',
    apiPath: '/api/v1/permissions',
    method: 'GET',
    module: 'PERMISSIONS',
    createdAt: {
      $date: '2023-06-15T09:11:10.914Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:11:10.914Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad5c5dafdb9754f40b88b',
    },
    name: 'Fetch permission by id',
    apiPath: '/api/v1/permissions/:id',
    method: 'GET',
    module: 'PERMISSIONS',
    createdAt: {
      $date: '2023-06-15T09:11:33.234Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:11:33.234Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad640dafdb9754f40b8ab',
    },
    name: 'Update Role',
    apiPath: '/api/v1/roles/:id',
    method: 'PATCH',
    module: 'ROLES',
    createdAt: {
      $date: '2023-06-15T09:13:36.836Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:13:36.836Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad499dafdb9754f40b84b',
    },
    name: 'Get a profile by id',
    apiPath: '/api/v1/profile/:id',
    method: 'GET',
    module: 'PROFILE',
    createdAt: {
      $date: '2023-06-15T09:06:33.697Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:06:33.697Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad4ccdafdb9754f40b859',
    },
    name: 'Get Profile with paginate',
    apiPath: '/api/v1/profile',
    method: 'GET',
    module: 'PROFILE',
    createdAt: {
      $date: '2023-06-15T09:07:24.175Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:07:24.175Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad4d9dafdb9754f40b85e',
    },
    name: 'Delete a Profile',
    apiPath: '/api/v1/profile/:id',
    method: 'DELETE',
    module: 'PROFILE',
    createdAt: {
      $date: '2023-06-15T09:07:37.896Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:07:37.896Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad5d4dafdb9754f40b890',
    },
    name: 'Update a permission',
    apiPath: '/api/v1/permissions/:id',
    method: 'PATCH',
    module: 'PERMISSIONS',
    createdAt: {
      $date: '2023-06-15T09:11:48.081Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:11:48.081Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad5ebdafdb9754f40b895',
    },
    name: 'Delete a permission',
    apiPath: '/api/v1/permissions/:id',
    method: 'DELETE',
    module: 'PERMISSIONS',
    createdAt: {
      $date: '2023-06-15T09:12:11.323Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:12:11.323Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ab6e7fa16b294212e4038',
    },
    name: 'Get User by Id',
    apiPath: '/api/v1/users/:id',
    method: 'GET',
    module: 'USERS',
    createdAt: {
      $date: '2023-06-15T06:59:51.041Z',
    },
    updatedAt: {
      $date: '2023-06-15T06:59:51.041Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad488dafdb9754f40b846',
    },
    name: 'Create a Profile',
    apiPath: '/api/v1/profile',
    method: 'POST',
    module: 'PROFILE',
    createdAt: {
      $date: '2023-06-15T09:06:16.508Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:06:16.508Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad59adafdb9754f40b881',
    },
    name: 'Create a permission',
    apiPath: '/api/v1/permissions',
    method: 'POST',
    module: 'PERMISSIONS',
    createdAt: {
      $date: '2023-06-15T09:10:50.946Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:10:50.946Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '648ad613dafdb9754f40b89a',
    },
    name: 'Create Role',
    apiPath: '/api/v1/roles',
    method: 'POST',
    module: 'ROLES',
    createdAt: {
      $date: '2023-06-15T09:12:51.974Z',
    },
    updatedAt: {
      $date: '2023-06-15T09:12:51.974Z',
    },
    isDeleted: false,
    deletedAt: null,
    __v: 0,
  },
  {
    _id: {
      $oid: '66b5aba302e29b0816a8d127',
    },
    name: 'Create Blog',
    apiPath: '/api/v1/blogs',
    method: 'POST',
    module: 'BLOG',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-09T05:39:47.028Z',
    },
    updatedAt: {
      $date: '2024-08-09T05:42:38.704Z',
    },
    __v: 0,
    updateBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
  },
  {
    _id: {
      $oid: '66b5adba02e29b0816a8d137',
    },
    name: 'Delete blog',
    apiPath: '/api/v1/blogs/:id',
    method: 'DELETE',
    module: 'BLOG',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-09T05:48:42.422Z',
    },
    updatedAt: {
      $date: '2024-08-09T05:48:42.422Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '66b5add402e29b0816a8d140',
    },
    name: 'Update Blog',
    apiPath: '/api/v1/blogs/:id',
    method: 'PATCH',
    module: 'BLOG',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-09T05:49:08.291Z',
    },
    updatedAt: {
      $date: '2024-08-09T05:49:08.291Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '66b5adf902e29b0816a8d149',
    },
    name: 'Fetch blog with paginate',
    apiPath: '/api/v1/blogs',
    method: 'GET',
    module: 'BLOG',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-09T05:49:45.242Z',
    },
    updatedAt: {
      $date: '2024-08-09T05:49:45.242Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '66b5ae2a02e29b0816a8d152',
    },
    name: 'Fetch blog by seo',
    apiPath: '/api/v1/blogs/read/:seo',
    method: 'GET',
    module: 'BLOG',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: true,
    deletedAt: {
      $date: '2024-08-10T06:41:18.541Z',
    },
    createdAt: {
      $date: '2024-08-09T05:50:34.595Z',
    },
    updatedAt: {
      $date: '2024-08-10T06:41:18.543Z',
    },
    __v: 0,
    updateBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    deletecBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
  },
  {
    _id: {
      $oid: '66b6189ae4d9f475ce7d56b6',
    },
    name: 'Get blogs by id',
    apiPath: '/api/v1/blogs/:id',
    method: 'GET',
    module: 'BLOG',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-09T13:24:42.118Z',
    },
    updatedAt: {
      $date: '2024-08-09T13:24:42.118Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '66b71683908a88145162b564',
    },
    name: 'Fetch blog admin with paginate',
    apiPath: '/api/v1/blogs/admin',
    method: 'GET',
    module: 'BLOG',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-10T07:28:03.980Z',
    },
    updatedAt: {
      $date: '2024-08-10T07:28:03.980Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '66b89c5bc8469ce0d8bf08b3',
    },
    name: 'Fetch send admin with paginate',
    apiPath: '/api/v1/send',
    method: 'GET',
    module: 'SEND',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-11T11:11:23.546Z',
    },
    updatedAt: {
      $date: '2024-08-11T11:11:23.546Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '66b89c86c8469ce0d8bf08bc',
    },
    name: 'Get send by id',
    apiPath: '/api/v1/send/:id',
    method: 'GET',
    module: 'SEND',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-11T11:12:06.150Z',
    },
    updatedAt: {
      $date: '2024-08-11T11:12:06.150Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '66b89c98c8469ce0d8bf08c5',
    },
    name: 'Delete send',
    apiPath: '/api/v1/send/:id',
    method: 'DELETE',
    module: 'SEND',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-11T11:12:24.556Z',
    },
    updatedAt: {
      $date: '2024-08-11T11:12:24.556Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '66b89cc9c8469ce0d8bf08ce',
    },
    name: 'Create Send',
    apiPath: '/api/v1/send',
    method: 'POST',
    module: 'SEND',
    createBy: {
      _id: '66a9f347af87167693588d54',
      email: 'admin@gmail.com',
    },
    isDeleted: false,
    deletedAt: null,
    createdAt: {
      $date: '2024-08-11T11:13:13.956Z',
    },
    updatedAt: {
      $date: '2024-08-11T11:13:13.956Z',
    },
    __v: 0,
  },
];

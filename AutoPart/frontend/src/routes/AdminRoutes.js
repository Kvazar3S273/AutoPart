import React from 'react';

//const ListUsers = React.lazy(() => import("../components/admin/users/List"));
//const MainAdminPage = React.lazy(() => import("../components/admin"));
const ListUsers = React.lazy(() => import("../components/userlist"));
const EditUser = React.lazy(() => import("../components/userlist/Edit/index"));
const DeleteUser = React.lazy(() => import("../components/userlist/Delete"));

const adminRoutes = [
    //{ path: '/admin/users/list', exact: true, name: 'Користувачі', component: ListUsers  }
    //{ path: '/admin', exact: true, name: 'Головна', component: MainAdminPage  }
    { path: '/admin/user', exact: true, name: 'Користувачі', component: ListUsers },
    { path: '/admin/user/edit/:id', name: 'Редагувати', component: EditUser },
    { path: '/admin/user/delete/:id', exact: true, name: 'Видалити', component: DeleteUser }
];
export default adminRoutes;
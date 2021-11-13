import React from 'react';

const ListUsers = React.lazy(() => import("../components/userlist"));
const EditUser = React.lazy(() => import("../components/userlist/Edit/index"));
const DeleteUser = React.lazy(() => import("../components/userlist/Delete"));

const adminRoutes = [
    { path: '/admin/user', exact: true, name: 'Користувачі', component: ListUsers },
    { path: '/admin/user/edit/:id', name: 'Редагувати', component: EditUser },
    { path: '/admin/user/delete/:id', exact: true, name: 'Видалити', component: DeleteUser }
];
export default adminRoutes;
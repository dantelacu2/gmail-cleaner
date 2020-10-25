import DeletedItems from "./containers/DeletedItems";
import FlaggedItems from "./containers/FlaggedItems";

const dashboardRoutes = [
    {
        name: 'Flagged Items',
        path: '/dashboard/flaggedItems',
        component: FlaggedItems,
    },
    {
        name: 'Deleted Items',
        path: '/dashboard/deletedItems',
        component: DeletedItems,
    }
];

export { dashboardRoutes };
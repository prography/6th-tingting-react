// icons
import Dashboard from '@material-ui/icons/Dashboard';
import PhotoList from '@material-ui/icons/PhotoLibrary';
import CardList from '@material-ui/icons/AssignmentInd';
import ReportList from '@material-ui/icons/Report'; 
// icon 정렬 + css 필요

// pages
import DashboardPage from "./pages/DashboardPage";
import PhotoListPage from "./pages/PhotoListPage";
import CardListPage from "./pages/CardListPage";
import ReportListPage from "./pages/ReportListPage";

const dashboardRoutes = [
    {
        name : 'Dashboard',
        icon : Dashboard,
        path : '/dashboard',
        layout : '/admin',
        component : DashboardPage
    }, 
    {
        name : 'PhotoList',
        icon : PhotoList,
        path : '/photos',
        layout : '/admin',
        component : PhotoListPage
    },
    {
        name : 'CardList',
        icon : CardList,
        path : '/cards',
        layout : '/admin',
        component : CardListPage
    },
    {
        name : 'ReportList',
        icon : ReportList,
        path : '/reports',
        layout : '/admin',
        component : ReportListPage
    }
]

export default dashboardRoutes;
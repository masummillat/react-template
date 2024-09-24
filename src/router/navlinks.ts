
import DashboardIcon from "@assets/images/icons/Dashboard.svg?react";
import RadioIcon from "@assets/images/icons/Radio.svg?react";
import CalendarIcon from '@assets/images/icons/Calendar.svg?react'

interface NavLinkProps {
    to: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string;
    }>;
    label: string;
}

export const navlinks: NavLinkProps[] = [
    {
        to: '/',
        icon: DashboardIcon,
        label: 'Dashboard'
    },
    {
        to: '/fall-detection',
        icon: RadioIcon,
        label: 'Fall Detection'
    },
    {
        to: '/calendar',
        icon: CalendarIcon,
        label: 'Calendar'
    },{
        to: '/profile',
        icon: CalendarIcon,
        label: 'Profile'
    },
    
]
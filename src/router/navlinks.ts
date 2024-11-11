
import DashboardIcon from "@assets/images/icons/Dashboard.svg?react";
import RadioIcon from "@assets/images/icons/Radio.svg?react";
import CalendarIcon from '@assets/images/icons/Calendar.svg?react';
import MessageIcon from '@assets/images/icons/Message.svg?react';
import ChartIcon from '@assets/images/icons/Chart.svg?react';
import IntegrationIcon from '@assets/images/icons/Integration.svg?react';
import SettingsIcon from '@assets/images/icons/Settings.svg?react';
import HeadphoneIcon from '@assets/images/icons/Headphone.svg?react';




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
        to: '/appointment',
        icon: CalendarIcon,
        label: 'Appointment'
    },{
        to: '/message',
        icon: MessageIcon,
        label: 'Message'
    },
    {
        to: '/overview',
        icon: ChartIcon,
        label: 'Overview'
    }
    
]
export const navlinks2: NavLinkProps[] = [
    {
        to: '/integration',
        icon: IntegrationIcon,
        label: 'Integrations'
    },
    {
        to: '/settings',
        icon: SettingsIcon,
        label: 'Settings'
    },
    {
        to: '/help-and-support',
        icon: HeadphoneIcon,
        label: 'Help & Support'
    }
    
]
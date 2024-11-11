import { PopoverContentProps, StepType } from "@reactour/tour";
import TourBody from "./TourBody";

export const tourSteps: StepType[] = [
  {
    selector: ".left-nav",
    content: (props: PopoverContentProps) => (
      <TourBody
        {...props}
        title="Navigation Panel"
        content="Navigate with simplicity! Use the left panel to swiftly access essential features and manage your Cline dashboard efficiently."
      />
    ),
  },
  {
    selector: ".upgrade",
    content: (props: PopoverContentProps) => (
      <TourBody
        {...props}
        title="Upgrade"
        content="Unlock more features and enhance your experience with an upgrade! Access advanced options and get the most out of your Cline wearable."
      />
    ),
  },
  {
    selector: ".collapsible-menu",
    content: (props: PopoverContentProps) => (
      <TourBody
        {...props}
        title="Collapsible Menu"
        content="Minimize for clarity! Collapse the left menu to show only icons, freeing up space for a cleaner, more focused dashboard."
      />
    ),
  },
  {
    selector: ".search",
    content: (props: PopoverContentProps) => (
      <TourBody
        {...props}
        title="Accessibility Settings"
        content="Find what you need instantly! Use the search feature to quickly access health data, reminders, and more."
      />
    ),
  },
  {
    selector: ".comfort-experience",
    content: (props: PopoverContentProps) => (
      <TourBody
        {...props}
        title="Accessibility Settings"
        content="Customize your experience for comfort! Adjust font size and switch between light or dark mode to suit your visual preferences."
      />
    ),
  },
  {
    selector: ".notification",
    content: (props: PopoverContentProps) => (
      <TourBody
        {...props}
        title="Notification"
        content="Stay informed with real-time updates! Manage your notifications to receive important health alerts, reminders, and insights tailored to you."
      />
    ),
  },
  {
    selector: ".profile",
    content: (props: PopoverContentProps) => (
      <TourBody
        {...props}
        title="Profile settings"
        content="Manage your personal details and preferences with ease. Keep your profile up to date for a personalized Cline experience."
      />
    ),
  },
  // ...
];

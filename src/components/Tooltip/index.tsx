import * as RadixTooltip from "@radix-ui/react-tooltip";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface TooltipProps {
  content: React.ReactNode;
  triggerClass?: string;
  contentClass?: string;
}

const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
  children,
  content,
  triggerClass,
  contentClass,
}) => (
  <RadixTooltip.Provider delayDuration={0}>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger className={clsx(["w-full", triggerClass])}>
        {children}
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        {content && (
          <RadixTooltip.Content
            side="right"
            align="end"
            className={clsx([
              "bg-white dark:bg-[#111827] p-2 px-3 rounded-md",
              contentClass,
            ])}
          >
            <RadixTooltip.Arrow className="fill-white dark:fill-[#111827]" />
            {content}
          </RadixTooltip.Content>
        )}
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);

export default Tooltip;

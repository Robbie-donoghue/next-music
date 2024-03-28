// index.jsx
"use client";
import * as React from "react";
import * as Popover from "@radix-ui/react-popover";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger>More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="flex block align-content: center display: block">
        This was Kendrick's second studio album after section .80, and featured
        a different sound to the previous album, self titled as a 'short film by
        Kendrick Lemar', the album tackles his upbringing in Compton, rife with
        gang culture
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;

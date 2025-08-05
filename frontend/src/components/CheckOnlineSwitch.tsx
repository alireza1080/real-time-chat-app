"use client";

import { useId, useState } from "react";

import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

const CheckOnlineSwitch = () => {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={setChecked}
        aria-label="Toggle switch"
      />
      <Label htmlFor={id} className="text-sm font-medium">
        Only online contacts
      </Label>
    </div>
  );
};

export default CheckOnlineSwitch;

import { IconButton, Icons } from "@storybook/components";
import {
  memo,
  //  useEffect
} from "react";

export const ADDON_ID = "versionMmanager";

export const Tool = memo(function MyAddonSelector() {
  // const [globals, updateGlobals] = useGlobals();
  // const api = useStorybookApi();

  // const isActive = [true, "true"].includes(globals[PARAM_KEY]);

  // const toggleMyTool = useCallback(() => {
  //   updateGlobals({
  //     [PARAM_KEY]: !isActive,
  //   });
  // }, [isActive]);

  // useEffect(() => {
  //   api.setAddonShortcut(ADDON_ID, {
  //     label: "Toggle Addon [8]",
  //     defaultShortcut: ["8"],
  //     actionName: "myaddon",
  //     showInMenu: false,
  //     action: toggleMyTool,
  //   });
  // }, [toggleMyTool, api]);

  return (
    <IconButton
      key={ADDON_ID}
      active={true}
      title="Apply outlines to the preview"
      //onClick={toggleMyTool}
      placeholder={"Hello"}
    >
      <Icons icon="lightning" />
    </IconButton>
  );
});

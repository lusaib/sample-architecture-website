import { useCallback, useState } from "react";

type ToggleReturnTypes = {
  isOpen: (arg: string) => boolean;
  toggle: (arg: string) => void;
};

/**
 * Toggle hook to return the toggle state for a component.
 * This hook can handle even if there is multiple toggle state in the function
 * @returns {object} - An object containing the function to get the toggle value and toggle function.
 *             {function(string | number): boolean} - isOpen function to return the toggle value according to the id passed.
 *             {function(string | number): boolean}  - Toggle function to handle the toggling accoring to the id
 */
const useToggle = (): ToggleReturnTypes => {
  const [toggles, setToggles] = useState<{ [key: string]: boolean }>({});

  const toggle = (toggleId: string) => {
    setToggles((prevState) => ({
      ...prevState,
      [toggleId]: !prevState[toggleId],
    }));
  };

  const isOpen = useCallback(
    (toggleId: string):boolean => {
      return toggles[toggleId] || false;
    },
    [toggles]
  );

  return {
    isOpen,
    toggle,
  };
};

export default useToggle;

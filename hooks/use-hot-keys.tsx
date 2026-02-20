import React from "react";

/**
 * useHotKeys - Hook to handle hot keys
 * @param keys - The keys to listen for
 * @param callback - The callback to call when the keys are pressed
 */
export const useHotKeys = (keys: string[], callback: () => void) => {
	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (keys.includes(e.key) && !e.metaKey && !e.ctrlKey && !e.altKey) {
				if (
					(e.target instanceof HTMLElement && e.target.isContentEditable) ||
					e.target instanceof HTMLInputElement ||
					e.target instanceof HTMLTextAreaElement ||
					e.target instanceof HTMLSelectElement
				) {
					return;
				}

				e.preventDefault();
				callback();
			}
		};

		document.addEventListener("keydown", down);

		return () => document.removeEventListener("keydown", down);
	}, [keys, callback]);
};

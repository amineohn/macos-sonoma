export const setButtonWidth = (
  buttonElements: HTMLCollection,
  indices: number[],
  size: number
) => {
  indices.forEach((index) => {
    if (buttonElements[index]) {
      (buttonElements[index] as HTMLElement).style.width = `${size}em`;
    }
  });
};

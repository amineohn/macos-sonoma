interface DockButtonProps {
  item: DockButton;
  index: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: (index: number) => void;
  onClick: (item: DockButton) => void;
}
export function DockButton({
  item,
  index,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: DockButtonProps) {
  return (
    <button
      key={item.title}
      className="w-16 align-bottom p-2"
      style={{ transition: "all ease .2s" }}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
      onClick={() => onClick(item)}
    >
      <img alt="dock icon" className="select-none w-full" src={item.logo} />
    </button>
  );
}

export function Button({
  index,
  image,
  label,
}: {
  index: number;
  image: string;
  label: string;
}) {
  return (
    <div key={index} className="flex flex-col items-center">
      <img src={`/static/images/${image}`} className="w-16 h-16" />
      <span className="text-white text-xs font-medium mt-2">{label}</span>
    </div>
  );
}

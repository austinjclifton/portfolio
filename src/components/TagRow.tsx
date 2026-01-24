// components/TagRow.tsx
type Props = {
  tags: readonly string[];
  small?: boolean;
};

export default function TagRow({ tags, small = false }: Props) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-full bg-black/5 font-medium ${
            small
              ? "px-3 py-1 text-xs"
              : "px-4 py-2 text-sm"
          } text-[rgba(var(--accent),0.85)]`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

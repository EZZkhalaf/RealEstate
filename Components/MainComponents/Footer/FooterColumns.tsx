interface FooterColumnsInterface {
  title: string;
  elements: any;
}
const FooterColumns: React.FC<FooterColumnsInterface> = ({
  title,
  elements,
}) => {
  const items: string[] = elements?.blocks?.map(
    (block: any) => block.data.text as string
  );
  return (
    <div className="flex flex-col gap-2 text-white">
      <h1 className="text-white font-bold text-xs lg:text-sm">{title}</h1>
      <div className="grid grid-cols-1 gap-1">
        {items?.map((e, index) => (
          <a
            href={"any"}
            target="_blank"
            key={index}
            className="text-gray-400 text-xs lg:text-sm"
          >
            {e}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterColumns;

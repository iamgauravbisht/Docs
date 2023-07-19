function RowCard({ title, description, img }) {
  return (
    <div className="flex flex-col gap-2  m-1">
      <div className="relative w-32 h-44 border border-gray-400 p-2 cursor-pointer">
        <img src={img} alt="docFirstpage" className="w-full h-full" />
      </div>
      <small className="font-semibold leading-4">{title}hi</small>
      <small className="font-semibold text-gray-400">{description} hello</small>
    </div>
  );
}

export default RowCard;

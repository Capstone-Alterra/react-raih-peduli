function TableHeader({ hasAction, heading, children }) {
  return (
    <>
      <div className="flex h-16 px-8 gap-3 items-center border-b-[1px]">
        <h3 className="text-lg font-bold text-[#293066]">{heading}</h3>
        {hasAction && (
          <>
            <div className="h-[2px] w-5 bg-[#293066] rounded"></div>
            {/* If has action define your action at children*/}
            {children}
          </>
        )}
      </div>
    </>
  );
}

export default TableHeader;

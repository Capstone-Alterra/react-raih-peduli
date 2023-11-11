function Header({ titleHeader }) {
  return (
    <div className="flex flex-col">
      <div className=" flex w-full h-20 bg-white drop-shadow-md justify-between">
        <h3 className="font-semibold text-2xl p-6">{titleHeader}</h3>
        <h3 className="font-light text-base p-8">Accounts/Edit User</h3>
      </div>
    </div>
  );
}

export default Header;

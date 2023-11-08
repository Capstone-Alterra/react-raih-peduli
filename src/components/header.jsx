import React from "react";

function Header(props) {
  const {titleHeader} = props;
  return (
    <div className="p-7">
      <div className="flex flex-col">
        <div className=" flex flex-row w-full h-20 bg-white rounded-md drop-shadow-xl justify-between">
          <h3 className="font-semibold text-2xl p-6">{titleHeader}</h3>
          <h3 className="font-light text-base p-8">Accounts/Edit User</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;

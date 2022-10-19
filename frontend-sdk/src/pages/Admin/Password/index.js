import React, { useState } from "react";
import ChangePassword from "./changePassword";

const Password = () => {
  const TabMenuItems = [
    {
      text: "Change Password",
      tab: <ChangePassword />,
      // link: "/Password/add",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <section className="">
      <div className="h-fit bg-gray px-8 pt-8">
        <p className="text-lg uppercase tracking-wider mb-8">PASSWORD</p>
        <header className="flex">
          {TabMenuItems.map((item, idx) => {
            return (
              <button
                onClick={() => setSelected(idx)}
                key={idx}
                style={
                  selected === idx
                    ? {
                        WebkitBoxShadow: "2px -2px 25px 0px rgba(0,0,0,0.2)",
                        MozBoxShadow: "2px -2px 25px 0px rgba(0,0,0,0.2)",
                        boxShadow: "2px -2px 25px 0px rgba(0,0,0,0.2)",
                        clipPath:
                          "polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)",
                      }
                    : {}
                }
                className={`${
                  selected === idx &&
                  "bg-white rounded-t-lg box-border  font-semibold"
                } px-6 py-4`}
              >
                <p className="">{item.text}</p>
              </button>
            );
          })}
        </header>
      </div>
      {TabMenuItems[selected].tab}
    </section>
  );
};

export default Password;
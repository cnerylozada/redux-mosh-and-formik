import React from "react";

const LayoutPage = () => {
  const arrayData = [
    {
      title: "section 1",
      content:
        "Content 1 dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "section 2",
      content:
        "Content 2 dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "section 3",
      content:
        "Content 3 dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <menu-tabs tab-list={JSON.stringify(arrayData)}></menu-tabs>
      </div>
      <menu-accordion content-list={JSON.stringify(arrayData)}></menu-accordion>
    </div>
  );
};

export default LayoutPage;

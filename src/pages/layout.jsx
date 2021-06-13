import React, { useEffect, useRef, useState } from "react";

const LayoutPage = () => {
  const modalBox = useRef(null);
  const [isModalBoxOpen, setIsModalBoxOpen] = useState(false);

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

  useEffect(() => {
    if (isModalBoxOpen) {
      modalBox.current.addEventListener("modalState", ({ detail }) =>
        setIsModalBoxOpen((_) => (_ = !!detail))
      );
    }
  }, [isModalBoxOpen]);

  return (
    <div>
      <p>
        <tool-tip message="Para mas informacion puede visitar el enlace: right">
          Tooltip right direction
        </tool-tip>
      </p>
      <p style={{ textAlign: "center" }}>
        <tool-tip message="Lo mas top qweqeqweqweqweqw" direction="top">
          Tooltip top direction
        </tool-tip>
      </p>
      <p style={{ textAlign: "center" }}>
        <tool-tip
          message="Para mas informacion puede visitar el enlace: left"
          direction="left"
        >
          Tooltip left direction
        </tool-tip>
      </p>
      <p style={{ textAlign: "center" }}>
        <tool-tip
          message="Para mas informacion puede visitar el enlace: right"
          direction="bottom"
        >
          Tooltip bottom direction
        </tool-tip>
      </p>

      {isModalBoxOpen && <modal-box ref={modalBox}></modal-box>}
      <p>
        <button onClick={() => setIsModalBoxOpen((_) => !_)}>
          Open modal-box
        </button>
      </p>

      <div style={{ marginBottom: "1rem" }}>
        <menu-tabs tab-list={JSON.stringify(arrayData)}></menu-tabs>
      </div>
      <menu-accordion content-list={JSON.stringify(arrayData)}></menu-accordion>
    </div>
  );
};

export default LayoutPage;

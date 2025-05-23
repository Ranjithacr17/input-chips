import { useState } from "react";

const ChipInputs = () => {
  const [fieldValue, setFieldValue] = useState("");
  const [chipValue, setchipValue] = useState([]);

  const onChangeInput = (e) => {
    if (e.target.value) setFieldValue(e.target.value);
  };

  const onClickEnter = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() !== "") {
        const value = [];
        value.push({ id: new Date().getTime(), title: e.target.value });
        setchipValue([...chipValue, ...value]);
      } else {
        alert("Please enter valid value");
      }

      setFieldValue("");
    }
  };

  const handleCancel = (id) => {
    const filteredChip = chipValue.filter((chip) => {
      return id !== chip.id;
    });
    setchipValue(filteredChip);
  };

  return (
    <div>
      <h1 className="">Input Chips</h1>
      <input
        type="text"
        onChange={onChangeInput}
        value={fieldValue}
        onKeyDown={onClickEnter}
      />
      {chipValue.map((value, i) => {
        return (
          <div className="chip-card">
            <div className="chip" key={i}>
              <div>{value.title}</div>
              <div onClick={() => handleCancel(value.id)}>❌</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChipInputs;

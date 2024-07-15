"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(""); // State để lưu kết quả

  const appendToDisplay = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const clearDisplay = () => {
    setDisplay("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(display);
      setDisplay(`${display} = ${calculatedResult}`); // Hiển thị phép tính và kết quả
      setResult(calculatedResult.toString()); // Lưu kết quả vào state
    } catch (e) {
      setDisplay("Error");
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="item">
            <input type="text" value={display} readOnly />
          </div>
          <div className="item">
            <button onClick={clearDisplay}>AC</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("+/-")}>+/-</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("%")}>%</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("/")}>/</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("7")}>7</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("8")}>8</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("9")}>9</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("*")}>X</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("4")}>4</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("5")}>5</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("6")}>6</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("-")}>-</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("1")}>1</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("2")}>2</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("3")}>3</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay("+")}>+</button>
          </div>
          <div className="item zero">
            <button onClick={() => appendToDisplay("0")}>0</button>
          </div>
          <div className="item">
            <button onClick={() => appendToDisplay(".")}>.</button>
          </div>
          <div className="item">
            <button onClick={calculateResult}>=</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .calculator {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .container {
          margin-top: 100px;
          width: 600px;
          background-color: bisque;
          font-size: 40px;
          padding: 20px;
          border-radius: 10px;
        }
        button {
          width: 100%;
          height: 100px;
          border: 1px solid #ddd;
          font-size: 30px;
        }
        .item:first-child {
          grid-column: 1 / span 4;
        }
        .item.zero {
          grid-column: 1 / span 2; /* Gộp hai cột lại cho nút "0" */
        }
        input {
          width: 100%;
          height: 100px;
          border: 1px solid #ddd;
          pointer-events: none;
          font-size: 40px;
          text-align: right;
          padding-right: 10px;
        }
      `}</style>
    </>
  );
}

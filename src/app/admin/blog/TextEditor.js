import React, { useEffect, useRef } from "react";
import styles from "./com.module.css";

const TextEditor = ({ value, onChange, className }) => {
  const outputRef = useRef(null);

  useEffect(() => {
    const buttons = document.getElementsByClassName(styles.toolBtn);
    for (let btn of buttons) {
      btn.addEventListener("click", () => {
        const cmd = btn.dataset["command"];
        if (cmd === "createlink") {
          const url = prompt("Enter the link here: ", "http://");
          document.execCommand(cmd, false, url);
        } else {
          document.execCommand(cmd, false, null);
        }

        // Trigger onChange after a command is executed
        if (onChange) {
          onChange(outputRef.current.innerHTML);
        }
      });
    }
  }, [onChange]);

  const handleInput = () => {
    if (onChange) {
      onChange(outputRef.current.innerHTML);
    }
  };

  useEffect(() => {
    // Set initial value when the component mounts or when value changes
    if (outputRef.current && value !== outputRef.current.innerHTML) {
      outputRef.current.innerHTML = value;
    }
  }, [value]);

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <ul className={styles.toolList}>
          <li>
            <button type="button" data-command="justifyLeft" className={styles.toolBtn}>
              <i className="fas fa-align-left"></i>
            </button>
          </li>
          <li>
            <button type="button" data-command="justifyCenter" className={styles.toolBtn}>
              <i className="fas fa-align-center"></i>
            </button>
          </li>
          <li>
            <button type="button" data-command="bold" className={styles.toolBtn}>
              <i className="fas fa-bold"></i>
            </button>
          </li>
          <li>
            <button type="button" data-command="italic" className={styles.toolBtn}>
              <i className="fas fa-italic"></i>
            </button>
          </li>
          <li>
            <button type="button" data-command="underline" className={styles.toolBtn}>
              <i className="fas fa-underline"></i>
            </button>
          </li>
          <li>
            <button type="button" data-command="insertOrderedList" className={styles.toolBtn}>
              <i className="fas fa-list-ol"></i>
            </button>
          </li>
          <li>
            <button type="button" data-command="insertUnorderedList" className={styles.toolBtn}>
              <i className="fas fa-list-ul"></i>
            </button>
          </li>
          <li>
            <button type="button" data-command="createlink" className={styles.toolBtn}>
              <i className="fas fa-link"></i>
            </button>
          </li>
        </ul>
      </div>
      <div
        ref={outputRef}
        id="output"
        className={`${styles.output} ${className}`}
        contentEditable="true"
        onInput={handleInput}
        suppressContentEditableWarning={true}
      ></div>
    </div>
  );
};

export default TextEditor;

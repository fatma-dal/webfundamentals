import React from "react";

function BoxDisplay({ boxes, deleteBox }) {
    const boxContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    };

    const boxStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    };

    return (
        <div style={boxContainerStyle}>
        {boxes.map((box, index) => (
            <div
            key={index}
            style={{
                ...boxStyle,
                backgroundColor: box.color,
                width: box.width,
                height: box.height,
            }}
            >
            <button
                onClick={() => deleteBox(index)}
                style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                width: "20px",
                height: "20px",
                }}
            >
                ×
            </button>
            </div>
        ))}
        </div>
    );
    }

export default BoxDisplay;

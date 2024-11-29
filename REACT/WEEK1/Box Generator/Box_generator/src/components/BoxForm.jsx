import React, { useState } from "react";

function BoxForm({ addBox }) {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    const newBox = {
        color,
        width: `${width}px`,
        height: `${height}px`,
    };

    addBox(newBox);

    
    setColor("");
    setWidth("");
    setHeight("");
    };

    return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
        <label>Color: </label>
        <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter box color"
        />
        </div>
        <div>
        <label>Width (px): </label>
        <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Enter width"
        />
        </div>
        <div>
        <label>Height (px): </label>
        <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
        />
        </div>
        <button type="submit">Add Box</button>
    </form>
    );
}

export default BoxForm;

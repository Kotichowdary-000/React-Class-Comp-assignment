import React from "react";

function StatusMessage({ status }) {
    const styles = {
        success: { color: "green" },
        error: { color: "red" },
        warning: { color: "orange" },
        default: { color: "gray" }
    };

    const messages = {
        success: "Operation successful!",
        error: "There was an error!",
        warning: "This is a warning!",
        default: "Unknown status."
    };

    const styleToApply = styles[status] || styles.default;

    return (
        <h3 style={styleToApply}>
            {messages[status] || messages.default}
        </h3>
    );
}

export default StatusMessage;

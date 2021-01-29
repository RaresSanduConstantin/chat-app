import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirtMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirtMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender.avatar})` }}
        />
      )}

      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachments"
          className="message-image"
          style={{ marginLeft: isFirtMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#cabcdc",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;

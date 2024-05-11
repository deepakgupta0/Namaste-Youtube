const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-sm">
      <img
        width={36}
        height={36}
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="inline-block ml-1">{name}</div>
      <div className="inline-block ml-3">{message}</div>
    </div>
  );
};

export default ChatMessage;

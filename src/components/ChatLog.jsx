import ChatEntry from "./ChatEntry";

const ChatLog = (props) => {

    const chatEntryComponents = props.entries.map(chatEntry => {
        return (
            <ChatEntry sender={chatEntry.sender} body={chatEntry.body} timeStamp={chatEntry.timeStamp}></ChatEntry>
        );
    });

    return (
        <>
        {chatEntryComponents}
        </>
    );
};

export default ChatLog;

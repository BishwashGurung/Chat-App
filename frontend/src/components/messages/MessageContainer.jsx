import React from "react";
import { TiMessages } from "react-icons/ti";

import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
	const noChatSelected = false;

	return (
		<div className="md:min-w-[450px] flex flex-col">
			{noChatSelected ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="bg-slate-500 px-4 py-2 mb-2">
						<span className="label-text">To:</span>{" "}
						<span className="text-gray-900 font-bold">
							Spongebob
						</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg md:text-zl text-gray-200 font-semibold flex flex-col items-center gap-2">
				<p> Welcome 🖐 Spongebob ❄</p>
				<p> Select a chat to messaging </p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
			</div>
		</div>
	);
};

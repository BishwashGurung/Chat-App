import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.parms;
		const senderId = req.user._id;
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages");
		if (!conversation) {
			return res.status(200).json([]);
		}
        const messages = consversation.messages;
		res.status(200).json(messages);
	} catch (error) {
		console.log(`Error in get Messages controller: `, error.message);
		res.status(500).json({ error: "Internal server error." });
	}
};

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: receiverId } = req.parms;
		const senderId = req.user._id;
		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});
		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}
		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});
		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}
		await Promise.all([conversation.save(), newMessage.save()]);
		res.status(201).json(newMessage);
	} catch (error) {
		console.log(`Error in send Message controller: `, error.message);
		res.status(500).json({ error: "Internal server error." });
	}
};
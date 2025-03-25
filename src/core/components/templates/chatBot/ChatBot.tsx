import { useState, useEffect, useRef } from "react";
import chatBot from "../../../../assets/CHATBOTT.png";
import { motion, AnimatePresence } from "framer-motion";
import useGetChat from "./hook/useMyChat";
import useMessage from "./hook/useMessage";
import useCreateChat from "./hook/useChat";
import { MessageRes } from "./interface/bot.interface";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const { chat, isLoading, isNotFound } = useGetChat();
  const { postMessage, isLoading: isSending } = useMessage();
  const { createChat, isLoading: isCreating } = useCreateChat();

  const [localMessages, setLocalMessages] = useState<MessageRes[]>([]);
  const [isChatCreated, setIsChatCreated] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (chat?.messages) {
      setLocalMessages(chat.messages);
      setIsChatCreated(true);
    }
  }, [chat]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [localMessages, isOpen]);

  const handleCreateChat = async () => {
    try {
      await createChat(formData);
      setIsChatCreated(true);
      setShowForm(false);
    } catch (err) {
      console.error("Xatolik chatni yaratishda:", err);
    }
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    const tempId = Date.now();
    const newMessage: MessageRes = {
      id: tempId,
      question: message.trim(),
      answer: "Yuklanmoqda...",
    };

    setLocalMessages((prev) => [...prev, newMessage]);
    setMessage("");

    try {
      const response = await postMessage({
        question: message.trim(),
      });
      setLocalMessages((prev) =>
        prev.map((msg) =>
          msg.id === tempId
            ? {
                id: response.id,
                question: msg.question,
                answer: response.answer,
              }
            : msg,
        ),
      );
    } catch (err) {
      console.error("Xatolik yuborishda:", err);
      setLocalMessages((prev) =>
        prev.map((msg) =>
          msg.id === tempId ? { ...msg, answer: "Xatolik yuz berdi" } : msg,
        ),
      );
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-blue-900 p-1 shadow-lg transition"
      >
        <motion.img
          src={chatBot}
          alt="ChatBot"
          className="size-12 object-contain"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-50 flex h-[500px] w-[400px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {/* Заголовок */}
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                ChatBot
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-500 hover:text-gray-800 dark:hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Форма создания чата */}
            {isNotFound && !isChatCreated ? (
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-4 text-center">
                {!showForm ? (
                  <>
                    <p className="text-gray-600 dark:text-gray-300">
                      Siz hali chat boshlamadingiz.
                    </p>
                    <button
                      onClick={() => setShowForm(true)}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Chatni boshlash
                    </button>
                  </>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCreateChat();
                    }}
                    className="w-full space-y-3"
                  >
                    <input
                      type="text"
                      placeholder="Ism familiya"
                      value={formData.fullname}
                      onChange={(e) =>
                        setFormData({ ...formData, fullname: e.target.value })
                      }
                      required
                      className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    />
                    <input
                      type="tel"
                      placeholder="Telefon"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                      type="submit"
                      disabled={isCreating}
                      className="w-full rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                    >
                      {isCreating ? "Yaratilmoqda..." : "Chatni yaratish"}
                    </button>
                  </form>
                )}
              </div>
            ) : isLoading ? (
              <div className="flex flex-1 items-center justify-center text-gray-500 dark:text-gray-400">
                Yuklanmoqda...
              </div>
            ) : (
              <>
                {/* Сообщения */}
                <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm">
                  {localMessages.length ? (
                    localMessages.map((msg) => (
                      <div key={msg.id} className="space-y-1">
                        <div className="flex justify-end">
                          <div className="max-w-[75%] break-words rounded-xl bg-blue-500 px-4 py-2 text-white">
                            {msg.question}
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="max-w-[75%] break-words rounded-xl bg-gray-200 px-4 py-2 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                            {msg.answer}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 dark:text-gray-400">
                      Hali xabarlar yo‘q
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Ввод сообщения */}
                <div className="flex items-center space-x-2 border-t border-gray-200 p-3 dark:border-gray-700">
                  <input
                    type="text"
                    placeholder="Xabar yozing..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                    disabled={!isChatCreated}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isSending || !isChatCreated}
                    className="rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    Yuborish
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;

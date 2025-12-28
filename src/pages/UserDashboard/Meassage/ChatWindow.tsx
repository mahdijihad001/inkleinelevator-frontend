import { Send, Smile, MoreVertical } from "lucide-react"

interface Message {
  id: number
  sender: "bill" | "user"
  senderName: string
  text: string
  timestamp: Date
}

interface Conversation {
  id: number
  name: string
  avatar: string
  lastMessage: string
  unread: boolean
}

interface ChatWindowProps {
  conversation: Conversation
  messages: Message[]
  onSendMessage: () => void
  message: string
  onMessageChange: (message: string) => void
}

export default function ChatWindow({
  conversation,
  messages,
  onSendMessage,
  message,
  onMessageChange,
}: ChatWindowProps) {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="px-8 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{conversation.name}</h2>
          <p className="text-sm text-gray-500">Online for 10 mins</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "bill" && (
              <img
                src={conversation.avatar || "/placeholder.svg"}
                alt={msg.senderName}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
            )}
            <div
              className={`max-w-md ${
                msg.sender === "user" ? "bg-blue-100 text-gray-900" : "bg-gray-100 text-gray-900"
              } rounded-2xl px-4 py-2.5 text-sm leading-relaxed`}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                alt="You"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="px-8 py-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-gray-600">
            <div className="w-6 h-6 flex items-center justify-center">+</div>
          </button>
          <input
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                onSendMessage()
              }
            }}
            className="flex-1 bg-gray-100 text-gray-900 placeholder-gray-500 rounded-full px-4 py-3 outline-none text-sm"
          />
          <button className="text-gray-400 hover:text-gray-600">
            <Smile size={20} />
          </button>
          <button onClick={onSendMessage} className="text-gray-400 hover:text-gray-600">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

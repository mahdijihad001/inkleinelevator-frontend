"use client"

interface Conversation {
  id: number
  name: string
  avatar: string
  lastMessage: string
  unread: boolean
}

interface ConversationListProps {
  conversations: Conversation[]
  selectedConversation: Conversation
  onSelectConversation: (conversation: Conversation) => void
}

export default function ConversationList({
  conversations,
  selectedConversation,
  onSelectConversation,
}: ConversationListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Chat Label */}
      <div className="px-6 py-4 text-sm font-semibold text-gray-700">Chat ({conversations.length})</div>

      {/* Conversations */}
      <div className="space-y-2 px-3">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              selectedConversation.id === conversation.id ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={conversation.avatar || "/placeholder.svg"}
                alt={conversation.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 text-left min-w-0">
              <p className="text-sm font-semibold text-gray-900">{conversation.name}</p>
              <p className="text-xs text-gray-500 truncate">{conversation.lastMessage}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

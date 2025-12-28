"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import ConversationList from "./ConversationList"
import ChatWindow from "./ChatWindow"


const CONVERSATIONS = [
  {
    id: 1,
    name: "Bill Kuphal Kuphal",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bill",
    lastMessage: "When can you start?",
    unread: false,
  },
  {
    id: 2,
    name: "Courtney Henry",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=courtney",
    lastMessage: "I'll send the quote shortly.",
    unread: false,
  },
]

const MESSAGES = [
  {
    id: 1,
    sender: "bill" as const, // explicitly cast sender type to "bill" | "user" literal
    senderName: "Bill Kuphal",
    text: "Yes, I have availability starting Tuesday. Would that work for you?",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: 2,
    sender: "user" as const, // explicitly cast sender type to "bill" | "user" literal
    senderName: "You",
    text: "That sounds great. When can we discuss the final contract?",
    timestamp: new Date(Date.now() - 1800000),
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(CONVERSATIONS[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      // Handle message sending
      setMessage("")
    }
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        </div>

        {/* Search */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-100 rounded-full">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-gray-900 placeholder-gray-500 outline-none flex-1"
            />
          </div>
        </div>

        {/* Conversation List */}
        <ConversationList
          conversations={CONVERSATIONS}
          selectedConversation={selectedConversation}
          onSelectConversation={setSelectedConversation}
        />
      </div>

      {/* Chat Window */}
      <ChatWindow
        conversation={selectedConversation}
        messages={MESSAGES}
        onSendMessage={handleSend}
        message={message}
        onMessageChange={setMessage}
      />
    </div>
  )
}

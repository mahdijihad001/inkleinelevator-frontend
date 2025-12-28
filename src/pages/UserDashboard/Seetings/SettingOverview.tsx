import { useState } from "react"
import { Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

type TabType = "profile" | "security" | "general"

export default function SettingOverview() {
    const [activeTab, setActiveTab] = useState<TabType>("profile")
    const [formData, setFormData] = useState({
        name: "Prop title vendor",
        email: "vendor@gmail.com",
        phone: "+44 7700 900002",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        emailNotifications: true,
        smsNotifications: false,
    })

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const tabs: { id: TabType; label: string }[] = [
        { id: "profile", label: "Profile Settings" },
        { id: "security", label: "Security Settings" },
        { id: "general", label: "General Settings" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-1">Manage your vendor profile and preferences</p>
            </div>

            {/* Tabs */}
            <div className="px-8 py-4 border-b border-gray-200">
                <div className="flex gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 font-medium text-sm rounded-md transition-colors ${activeTab === tab.id ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="px-8 py-8 max-w-4xl">
                {activeTab === "profile" && (
                    <>
                        {/* Profile Picture Section */}
                        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Picture</h2>

                            <div className="flex flex-col items-center">
                                <div className="w-full max-w-xs h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                                    <Cloud className="w-10 h-10 text-gray-400 mb-3" />
                                    <p className="text-sm font-medium text-gray-600">Upload Profile Image</p>
                                    <p className="text-xs text-gray-500 mt-1">Image format - JPG/PNG</p>
                                    <p className="text-xs text-gray-500">Image size should be 60 x 60 pixels more...</p>
                                </div>

                                <Button className="mt-6 bg-blue-900 hover:bg-blue-800 text-white px-8 py-2">Upload Profile</Button>
                            </div>
                        </div>

                        {/* Profile Information Section */}
                        <div className="bg-white rounded-lg border border-gray-200 p-8">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h2>

                            <div className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    />
                                </div>

                                {/* Phone Number Field */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Security Settings Tab Content */}
                {activeTab === "security" && (
                    <div className="bg-white rounded-lg border border-gray-200 p-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                                <input
                                    type="password"
                                    value={formData.currentPassword}
                                    onChange={(e) => handleInputChange("currentPassword", e.target.value)}
                                    className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                <input
                                    type="password"
                                    value={formData.newPassword}
                                    onChange={(e) => handleInputChange("newPassword", e.target.value)}
                                    className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <Button className="bg-blue-900 hover:bg-blue-800 text-white">Update Password</Button>
                        </div>
                    </div>
                )}

                {/* General Settings Tab Content */}
                {activeTab === "general" && (
                    <div className="bg-white rounded-lg border border-gray-200 p-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">General Settings</h2>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-900">Email Notifications</p>
                                    <p className="text-sm text-gray-500">Receive updates via email</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={formData.emailNotifications}
                                    onChange={(e) => handleInputChange("emailNotifications", e.target.checked.toString())}
                                    className="w-5 h-5 accent-blue-600"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-900">SMS Notifications</p>
                                    <p className="text-sm text-gray-500">Receive updates via SMS</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={formData.smsNotifications}
                                    onChange={(e) => handleInputChange("smsNotifications", e.target.checked.toString())}
                                    className="w-5 h-5 accent-blue-600"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

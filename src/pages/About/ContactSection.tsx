import { Mail, Globe, Linkedin, Building2 } from "lucide-react"

export default function ContactSection() {
    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-[2rem] border border-[#EBEBFF] overflow-hidden flex flex-col md:flex-row shadow-sm">
                    {/* Left Column: Get in Touch */}
                    <div className="flex-1 p-10 md:p-12 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-[#0B163B]">Get in Touch</h2>
                            <p className="text-[#4B5563] text-sm leading-relaxed max-w-sm">
                                Have questions about In-Klein Elevators? Want to partner with us? We'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-[#0B163B]">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium">contact@inklein-elevators.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#0B163B]">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <Globe className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium">www.inklein-elevators.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#0B163B]">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <Linkedin className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium line-clamp-1">linkedin.com/company/inklein-elevators</span>
                            </div>
                        </div>

                        <button className="w-full md:w-auto px-10 py-3 bg-[#0B163B] text-white rounded-lg font-bold transition-all hover:bg-[#1a2b5a] active:scale-95">
                            Contact Us
                        </button>
                    </div>

                    {/* Right Column: Join Our Network */}
                    <div className="flex-1 p-10 md:p-12 bg-[#F9F9FF] border-l border-[#EBEBFF] flex flex-col items-center justify-center text-center space-y-6">
                        <div className="w-20 h-20 flex items-center justify-center">
                            <Building2 className="w-16 h-16 text-[#0B163B]" strokeWidth={1} />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-[#0B163B]">Join Our Network</h3>
                            <p className="text-[#4B5563] text-sm leading-relaxed max-w-[280px]">
                                Whether you need elevator services or provide them, we're here to help
                            </p>
                        </div>

                        <button className="w-full md:w-auto px-10 py-3 border-2 border-[#EBEBFF] bg-white text-[#0B163B] rounded-lg font-bold transition-all hover:bg-gray-50 active:scale-95">
                            Sign Up Free
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

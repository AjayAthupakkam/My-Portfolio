import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 terminal-card animate-fade-in mb-2">
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">chat.sh</span>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={14} />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-card">
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-mono">{'>'}</span>
                </div>
                <div className="bg-secondary rounded-lg p-3 text-sm">
                  <p className="text-muted-foreground">
                    Hey! 👋 How can I help you today?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-border">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-secondary rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="p-2 bg-primary rounded-lg text-primary-foreground hover:bg-primary/90 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform relative group"
        style={{ boxShadow: '0 0 20px hsl(142 71% 45% / 0.4)' }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default ChatButton;

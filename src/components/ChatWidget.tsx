'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // Load initial messages
    setMessages([
      {
        id: '1',
        text: 'Hi! How can I help you today?',
        sender: 'agent',
        timestamp: new Date(),
      },
    ]);
  }, []);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simulate agent response
    setTimeout(() => {
      const response: Message = {
        id: Date.now().toString(),
        text: 'Thanks for your message! Our team will respond shortly.',
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            size="lg"
            className="rounded-full h-14 w-14 shadow-lg hover:scale-105 transition-transform"
            aria-label="Open chat"
          >
            💬
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 h-[500px] p-0" align="end">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Support Chat</h3>
              <p className="text-sm text-muted-foreground">We're here to help</p>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 mb-4 ${message.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {message.sender === 'agent' && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/support-avatar.jpg" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === 'agent'
                        ? 'bg-muted'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button onClick={sendMessage} aria-label="Send message">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

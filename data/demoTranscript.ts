export interface TranscriptLine {
  time: number; // seconds from start
  speaker: 'agent' | 'prospect';
  text: string;
}

// Placeholder transcript — replace text & timestamps after listening to qna-gitavox-demo.wav
export const demoTranscript: TranscriptLine[] = [
  { time: 0,   speaker: 'agent',   text: "Hi there! I'm Aria, a GitaVox AI voice agent. I'm calling to walk you through how our agents work across different industries. Do you have a couple of minutes?" },
  { time: 10,  speaker: 'prospect', text: "Sure, go ahead — I'm curious what this is all about." },
  { time: 14,  speaker: 'agent',   text: "Perfect. GitaVox deploys AI voice and text agents that handle your inbound and outbound calls 24/7 — booking appointments, qualifying leads, and answering FAQs — without adding headcount." },
  { time: 27,  speaker: 'prospect', text: "Interesting. Can you give me an example in healthcare?" },
  { time: 31,  speaker: 'agent',   text: "Of course. For a healthcare clinic, our agent handles appointment scheduling, sends automated reminders, and follows up post-visit. One of our clients reduced no-shows by 40% in the first month." },
  { time: 45,  speaker: 'prospect', text: "What about real estate?" },
  { time: 48,  speaker: 'agent',   text: "For real estate, the agent qualifies every inbound lead instantly — asking about budget, timeline, and property preferences — then routes hot leads to your team and books viewings directly into their calendar." },
  { time: 62,  speaker: 'prospect', text: "And e-commerce? Can it handle that too?" },
  { time: 66,  speaker: 'agent',   text: "Absolutely. In e-commerce, our agents handle order status calls, returns processing, and proactive delivery updates — cutting support volume by up to 60%." },
  { time: 78,  speaker: 'prospect', text: "How long does it take to get set up?" },
  { time: 81,  speaker: 'agent',   text: "Typically 2 to 3 weeks from kickoff to go-live. We handle all the training, CRM integration, and testing. You simply approve the voice and script." },
  { time: 94,  speaker: 'prospect', text: "What does pricing look like?" },
  { time: 97,  speaker: 'agent',   text: "We have a Founder Offer running right now — $800 a month, covering full deployment and unlimited call handling. Only a few spots remain at that rate." },
  { time: 109, speaker: 'prospect', text: "That sounds reasonable. How do I get started?" },
  { time: 112, speaker: 'agent',   text: "I can book a free 30-minute demo with our team right now. They'll build a live prototype for your exact use case. Shall I check availability for you?" },
];

export const demoSummary = {
  intent: 'Product Demo & Qualification',
  outcome: 'Demo Call Booked',
  industries: ['Healthcare', 'Real Estate', 'E-Commerce'],
  sentiment: 'Positive',
} as const;

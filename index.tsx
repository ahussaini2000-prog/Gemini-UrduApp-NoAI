import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const URDU_ALPHABET = [
    { char: 'ا', name: 'Alif', phonetic: 'a', exampleWord: 'Angoor', exampleMeaning: 'Grapes', exampleUrdu: 'انگور', color: 'bg-red-500', emoji: '🍇' },
    { char: 'ب', name: 'Bey', phonetic: 'b', exampleWord: 'Billi', exampleMeaning: 'Cat', exampleUrdu: 'بِلّی', color: 'bg-emerald-500', emoji: '🐱' },
    { char: 'پ', name: 'Pey', phonetic: 'p', exampleWord: 'Pankha', exampleMeaning: 'Fan', exampleUrdu: 'پنکھا', color: 'bg-blue-500', emoji: '🪭' },
    { char: 'ت', name: 'Tey', phonetic: 't', exampleWord: 'Titli', exampleMeaning: 'Butterfly', exampleUrdu: 'تتلی', color: 'bg-pink-500', emoji: '🦋' },
    { char: 'ٹ', name: 'Tey', phonetic: 'T', exampleWord: 'Tamatar', exampleMeaning: 'Tomato', exampleUrdu: 'ٹماٹر', color: 'bg-orange-500', emoji: '🍅' },
    { char: 'ث', name: 'Seh', phonetic: 's', exampleWord: 'Samar', exampleMeaning: 'Fruit', exampleUrdu: 'ثمر', color: 'bg-purple-500', emoji: '🍓' },
    { char: 'ج', name: 'Jeem', phonetic: 'j', exampleWord: 'Jahaaz', exampleMeaning: 'Ship', exampleUrdu: 'جہاز', color: 'bg-indigo-500', emoji: '🚢' },
    { char: 'چ', name: 'Chey', phonetic: 'ch', exampleWord: 'Chabi', exampleMeaning: 'Key', exampleUrdu: 'چابی', color: 'bg-yellow-500', emoji: '🔑' },
    { char: 'ح', name: 'Hay', phonetic: 'h', exampleWord: 'Halwa', exampleMeaning: 'Sweet', exampleUrdu: 'حلوا', color: 'bg-teal-500', emoji: '🍮' },
    { char: 'خ', name: 'Khay', phonetic: 'kh', exampleWord: 'Khargosh', exampleMeaning: 'Rabbit', exampleUrdu: 'خرگوش', color: 'bg-rose-500', emoji: '🐰' },
    { char: 'د', name: 'Dal', phonetic: 'd', exampleWord: 'Darakht', exampleMeaning: 'Tree', exampleUrdu: 'درخت', color: 'bg-green-600', emoji: '🌳' },
    { char: 'ڈ', name: 'Dal', phonetic: 'D', exampleWord: 'Dabba', exampleMeaning: 'Box', exampleUrdu: 'ڈبہ', color: 'bg-amber-600', emoji: '📦' },
    { char: 'ذ', name: 'Zal', phonetic: 'z', exampleWord: 'Zahab', exampleMeaning: 'Gold', exampleUrdu: 'ذہب', color: 'bg-slate-600', emoji: '💰' },
    { char: 'ر', name: 'Rey', phonetic: 'r', exampleWord: 'Rail', exampleMeaning: 'Train', exampleUrdu: 'ریل', color: 'bg-sky-600', emoji: '🚂' },
    { char: 'ڑ', name: 'Rey', phonetic: 'R', exampleWord: 'Gari', exampleMeaning: 'Car', exampleUrdu: 'گاڑی', color: 'bg-violet-600', emoji: '🚗' },
    { char: 'ز', name: 'Zay', phonetic: 'z', exampleWord: 'Zebra', exampleMeaning: 'Zebra', exampleUrdu: 'زیبرا', color: 'bg-gray-700', emoji: '🦓' },
    { char: 'ژ', name: 'Zhay', phonetic: 'zh', exampleWord: 'Zhalabari', exampleMeaning: 'Hail', exampleUrdu: 'ژالہ باری', color: 'bg-cyan-700', emoji: '❄️' },
    { char: 'س', name: 'Seen', phonetic: 's', exampleWord: 'Saib', exampleMeaning: 'Apple', exampleUrdu: 'سیب', color: 'bg-red-600', emoji: '🍎' },
    { char: 'ش', name: 'Sheen', phonetic: 'sh', exampleWord: 'Sher', exampleMeaning: 'Lion', exampleUrdu: 'شیر', color: 'bg-yellow-600', emoji: '🦁' },
    { char: 'ص', name: 'Suad', phonetic: 's', exampleWord: 'Surahi', exampleMeaning: 'Jug', exampleUrdu: 'صراحی', color: 'bg-orange-600', emoji: '🏺' },
    { char: 'ض', name: 'Zuad', phonetic: 'z', exampleWord: 'Zaif', exampleMeaning: 'Old Man', exampleUrdu: 'ضعیف', color: 'bg-stone-700', emoji: '👴' },
    { char: 'ط', name: 'Toey', phonetic: 't', exampleWord: 'Tota', exampleMeaning: 'Parrot', exampleUrdu: 'طوطا', color: 'bg-emerald-600', emoji: '🦜' },
    { char: 'ظ', name: 'Zoey', phonetic: 'z', exampleWord: 'Zuroof', exampleMeaning: 'Vessels', exampleUrdu: 'ظروف', color: 'bg-lime-600', emoji: '🥣' },
    { char: 'ع', name: 'Ain', phonetic: 'a', exampleWord: 'Ainak', exampleMeaning: 'Glasses', exampleUrdu: 'عینک', color: 'bg-blue-700', emoji: '👓' },
    { char: 'غ', name: 'Ghain', phonetic: 'gh', exampleWord: 'Ghubara', exampleMeaning: 'Balloon', exampleUrdu: 'غبارہ', color: 'bg-pink-600', emoji: '🎈' },
    { char: 'ف', name: 'Fay', phonetic: 'f', exampleWord: 'Fawara', exampleMeaning: 'Fountain', exampleUrdu: 'فوارہ', color: 'bg-indigo-700', emoji: '⛲' },
    { char: 'ق', name: 'Qaf', phonetic: 'q', exampleWord: 'Qalam', exampleMeaning: 'Pen', exampleUrdu: 'قلم', color: 'bg-red-700', emoji: '🖋️' },
    { char: 'ک', name: 'Kaf', phonetic: 'k', exampleWord: 'Kitab', exampleMeaning: 'Book', exampleUrdu: 'کتاب', color: 'bg-blue-800', emoji: '📖' },
    { char: 'گ', name: 'Gaf', phonetic: 'g', exampleWord: 'Gajar', exampleMeaning: 'Carrot', exampleUrdu: 'گاجر', color: 'bg-orange-700', emoji: '🥕' },
    { char: 'ل', name: 'Lam', phonetic: 'l', exampleWord: 'Lattu', exampleMeaning: 'Spinning Top', exampleUrdu: 'لٹو', color: 'bg-teal-700', emoji: '🪀' },
    { char: 'م', name: 'Meem', phonetic: 'm', exampleWord: 'Machli', exampleMeaning: 'Fish', exampleUrdu: 'مچھلی', color: 'bg-cyan-600', emoji: '🐟' },
    { char: 'ن', name: 'Noon', phonetic: 'n', exampleWord: 'Nal', exampleMeaning: 'Tap', exampleUrdu: 'نل', color: 'bg-gray-600', emoji: '🚰' },
    { char: 'و', name: 'Wao', phonetic: 'v/w', exampleWord: 'Warzish', exampleMeaning: 'Exercise', exampleUrdu: 'ورزش', color: 'bg-sky-500', emoji: '🏋️' },
    { char: 'ہ', name: 'Heh', phonetic: 'h', exampleWord: 'Hathi', exampleMeaning: 'Elephant', exampleUrdu: 'ہاتھی', color: 'bg-slate-400', emoji: '🐘' },
    { char: 'ء', name: 'Hamza', phonetic: "'", exampleWord: 'Chai', exampleMeaning: 'Tea', exampleUrdu: 'چائے', color: 'bg-stone-500', emoji: '☕' },
    { char: 'ی', name: 'Ye', phonetic: 'y/i', exampleWord: 'Yakka', exampleMeaning: 'Cart', exampleUrdu: 'یکہ', color: 'bg-emerald-400', emoji: '🐎' },
    { char: 'ے', name: 'Ye', phonetic: 'ay', exampleWord: 'Ladke', exampleMeaning: 'Boys', exampleUrdu: 'لڑکے', color: 'bg-blue-400', emoji: '👦' },
];

const App = () => {
    const [selectedLetter, setSelectedLetter] = useState<any>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'card'>('grid');

    const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();
        // Try to find an Urdu voice
        const urduVoice = voices.find(v => v.lang.startsWith('ur') || v.name.toLowerCase().includes('urdu'));
        if (urduVoice) utterance.voice = urduVoice;
        utterance.rate = 0.8;
        utterance.pitch = 1.1;
        window.speechSynthesis.speak(utterance);
    };

    const handleLetterSelect = (letter: any) => {
        setSelectedLetter(letter);
        setViewMode('card');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        speak(letter.char);
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
            <header className="w-full max-w-4xl mb-8 text-center space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 flex items-center justify-center gap-4">
                    <span className="font-urdu">اردو قاعدہ</span>
                    <span className="text-2xl md:text-3xl font-light text-slate-400">Urdu Qaida</span>
                </h1>
                <p className="text-slate-500 max-w-lg mx-auto">
                    Interactive Urdu alphabet learning for children. Touch a letter to begin!
                </p>
            </header>

            <main className="w-full max-w-5xl flex-1 flex flex-col items-center">
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 animate-fadeIn w-full">
                        {URDU_ALPHABET.map((item) => (
                            <button
                                key={item.char}
                                onClick={() => handleLetterSelect(item)}
                                className={`group relative aspect-square ${item.color} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-white overflow-hidden`}
                            >
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                <div className="flex-[4] flex items-start justify-center w-full px-2 pt-4">
                                    <span className="font-urdu text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500 leading-none">
                                        {item.char}
                                    </span>
                                </div>
                                <div className="flex-1 w-full flex items-center justify-center bg-black/10 backdrop-blur-sm">
                                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-100">
                                        {item.name}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center animate-slideUp w-full max-w-2xl">
                        <button 
                            onClick={() => setViewMode('grid')}
                            className="mb-6 flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-600 border border-emerald-100 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-sm self-start group active:scale-95"
                        >
                            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            All Letters
                        </button>

                        <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] border border-slate-100">
                            <div className={`md:w-1/2 ${selectedLetter.color} flex flex-col items-center justify-center p-8 transition-colors duration-500`}>
                                <div className="text-white text-center">
                                    <h2 className="font-urdu text-9xl mb-6 drop-shadow-xl animate-pop leading-relaxed">
                                        {selectedLetter.char}
                                    </h2>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-black uppercase tracking-widest">{selectedLetter.name}</p>
                                        <p className="text-white/80 font-medium tracking-wide">Phonetic: /{selectedLetter.phonetic}/</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Example</span>
                                            <h3 className="text-3xl font-bold text-slate-800">{selectedLetter.exampleWord}</h3>
                                            <p className="text-lg text-emerald-600 font-semibold">{selectedLetter.exampleMeaning}</p>
                                        </div>
                                        <div className="text-right">
                                            <h3 className="font-urdu text-5xl text-slate-800 leading-tight">{selectedLetter.exampleUrdu}</h3>
                                        </div>
                                    </div>

                                    <div className="aspect-square w-full rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 relative shadow-inner group">
                                        <span className="text-9xl transition-transform duration-700 group-hover:scale-125 select-none cursor-default">
                                            {selectedLetter.emoji}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button 
                                        onClick={() => speak(selectedLetter.char)}
                                        className="w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all font-bold shadow-lg active:scale-95 bg-emerald-600 hover:bg-emerald-700 text-white"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                        </svg>
                                        Listen to Letter
                                    </button>
                                    <button 
                                        onClick={() => speak(selectedLetter.exampleUrdu)}
                                        className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-xl py-4 flex items-center justify-center gap-3 transition-all font-bold active:scale-95"
                                    >
                                        Hear Word
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8 flex gap-4 w-full">
                            <button 
                                onClick={() => {
                                    const idx = URDU_ALPHABET.findIndex(l => l.char === selectedLetter.char);
                                    const prevIdx = idx === 0 ? URDU_ALPHABET.length - 1 : idx - 1;
                                    setSelectedLetter(URDU_ALPHABET[prevIdx]);
                                    speak(URDU_ALPHABET[prevIdx].char);
                                }}
                                className="flex-1 bg-white px-6 py-4 rounded-2xl shadow-md text-slate-600 hover:text-emerald-600 transition-all flex items-center justify-center gap-2 border border-slate-100 font-bold active:scale-95"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Previous
                            </button>
                            <button 
                                onClick={() => {
                                    const idx = URDU_ALPHABET.findIndex(l => l.char === selectedLetter.char);
                                    const nextIdx = (idx + 1) % URDU_ALPHABET.length;
                                    setSelectedLetter(URDU_ALPHABET[nextIdx]);
                                    speak(URDU_ALPHABET[nextIdx].char);
                                }}
                                className="flex-1 bg-white px-6 py-4 rounded-2xl shadow-md text-slate-600 hover:text-emerald-600 transition-all flex items-center justify-center gap-2 border border-slate-100 font-bold active:scale-95"
                            >
                                Next
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </main>

            <footer className="mt-12 text-slate-400 text-[10px] uppercase font-bold tracking-widest text-center border-t border-slate-100 pt-8 w-full max-w-4xl mb-8">
                Urdu Learning for Kids • Standalone App
            </footer>
        </div>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}

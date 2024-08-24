import { useState } from 'react';
import '../App.css';

function MonoAlpha() {
    const [cipherText, setCipherText] = useState("");
    const [decryptedText, setDecryptedText] = useState("");

    const decryptText = () => {
        const relfreqs = ['E', 'T', 'A', 'O', 'I', 'N', 'S', 'H', 'R', 'D', 'L', 'C', 'U', 'M', 'W', 'F', 'G', 'Y', 'P', 'B', 'V', 'K', 'J', 'X', 'Q', 'Z'];
        const text = cipherText.toLowerCase();
        const map = new Map();

        for (const char of text) {
            if (/[a-z]/.test(char)) {
                map.set(char, (map.get(char) || 0) + 1);
            }
        }

        const frequencyArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

        const rel = new Map();
        const size_ = Math.min(frequencyArray.length, relfreqs.length);
        for (let i = 0; i < size_; i++) {
            rel.set(frequencyArray[i][0], relfreqs[i].toLowerCase());
        }

        // Replace characters in the text according to the mapping
        let decrypted = "";
        for (const char of text) {
            if (/[a-z]/.test(char)) {
                const replacement = rel.get(char);
                decrypted += replacement ? replacement : char;
            } else {
                decrypted += char;
            }
        }

        setDecryptedText(decrypted);
    };

    return (
        <>
            <div className='text-2xl font-bold mb-20'>MonoAlphabetic Cipher Frequency Analysis</div>
            <div className='flex gap-10'>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter cipher text" 
                        onChange={(e) => setCipherText(e.target.value)} 
                        className='p-2 rounded-lg'
                    />
                    <button onClick={decryptText} className='border-blue-500'>Decrypt</button>
                </div>
                <div>
                    <div className='m-5'>
                        Decrypted Text: <span className='bg-zinc-600 px-3 rounded-lg'>{decryptedText}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MonoAlpha;

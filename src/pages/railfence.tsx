import { useState } from 'react'
import '../App.css'

function RailFenceCipher() {
    const [plainText, setPlainText] = useState<string>("")
    const [enc, setEnc] = useState<string>("")
    const [k, setK] = useState<number>(0)
    const [decryptedText, setDecryptedText] = useState<string>("")
    const [dec, setDec] = useState<string>("")

    const encryptText = () => {
        let enStr = ""
        for (let i = 1; i < k + 1; i++) {
            if (i == 1 || i == k) {
                for (let j = i - 1; j < plainText.length;) {
                    enStr += plainText[j]
                    let ki = i === 1 ? i : 1
                    j = j + 2 * (k - ki)
                }
            }
            else {
                let count = 0;
                let depth = 0;
                for (let j = i - 1; j < plainText.length;) {
                    if (count % 2 == 0) {
                        depth = 2 * (k - i)
                    }
                    else {
                        depth = 2 * (i - 1)
                    }
                    count++
                    enStr += plainText[j]
                    j = j + depth
                }
            }
        }
        setEnc(enStr)
    }

    const decryptText = () => {
        let deStr = ""
        let rail = Array.from({ length: k }).map(() => Array.from({ length: decryptedText.length }))
        for (let r = 0, c = 0, d = 1; c < decryptedText.length; c++) {
            rail[r][c] = '*';
            r += d
            if (r == k - 1)
                d = -1;
            else if (r == 0)
                d = 1
        }
        let count = 0;
        for (let r = 0; r < k; r++) {
            for (let c = 0; c < decryptedText.length; c++) {
                if (rail[r][c] == '*') {
                    rail[r][c] = decryptedText[count++]
                }
            }
        }
        for (let r = 0, c = 0, d = 1; c < decryptedText.length; c++) {
            deStr += rail[r][c]
            r += d;
            if (r == k - 1)
                d = -1
            else if (r == 0)
                d = 1
        }
        setDec(deStr)
    }

    return (
        <>
            <div className='text-2xl font-bold mb-20'>RailFence Cipher</div>
            <div className='flex gap-10'>
                <div className='flex flex-col gap-10'>
                    <input type="number" onChange={(e) => setK(Number(e.target.value) % 26)} className='p-2 rounded-lg' />
                    <button className='border-rose-500' onClick={() => encryptText()}>Set Key</button>
                </div>
                <div className='flex-col '>
                    <input type="text" onChange={(e) => setPlainText(e.target.value)} className='p-2 rounded-lg' />
                    <div className='m-5'>Encrypted Text: <span className='bg-zinc-600 px-3 rounded-lg'>{enc}</span></div>
                    <button className='border-green-500' onClick={() => encryptText()}>Encrypt</button>
                </div>
                <div>
                    <input type="text" onChange={(e) => setDecryptedText(e.target.value)} className='p-2 rounded-lg' />
                    <div className='m-5'>Decrypted Text: <span className='bg-zinc-600 px-3 rounded-lg'>{dec}</span></div>
                    <button className='border-blue-500' onClick={() => decryptText()}>Decrypt</button>
                </div>
            </div>
        </>
    )
}

export default RailFenceCipher

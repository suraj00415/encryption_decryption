import { useState } from 'react'
import '../App.css'

function VigenerCipher() {
    const [plainText, setPlainText] = useState<string>("")
    const [enc, setEnc] = useState<string>("")
    const [k, setK] = useState<string>("")
    const [decryptedText, setDecryptedText] = useState<string>("")
    const [dec, setDec] = useState<string>("")

    const keyGen = (key: string, length: number) => {
        let j = 0;
        let len = length - key.length
        for (let i = 0; i < len; i++) {
            j = i % key.length
            key = key + key[j]
        }
        return key
    }
    const encryptText = () => {
        let enStr = ""
        let key = keyGen(k.toLowerCase(), plainText.length).toLowerCase()
        for (let i = 0; i < plainText.length; i++) {
            let indexValueEnr = (plainText.charCodeAt(i) - 97) % 26
            let indexValueKey = (key.charCodeAt(i) - 97) % 26
            let enIndex = (indexValueEnr + indexValueKey) % 26
            enStr += String.fromCharCode(enIndex + 97)
        }
        setEnc(enStr)
    }

    const decryptText = () => {
        let deStr = ""
        let key = keyGen(k.toLowerCase(), decryptedText.length).toLowerCase()
        for (let i = 0; i < decryptedText.length; i++) {
            let indexValueEnr = (decryptedText.charCodeAt(i) - 97) % 26
            let indexValueKey = (key.charCodeAt(i) - 97) % 26
            let enIndex = (indexValueEnr - indexValueKey + 26) % 26
            deStr += String.fromCharCode(enIndex + 97)
        }
        setDec(deStr)
    }

    return (
        <>
            <div className='text-2xl font-bold mb-20'>Vigenere Cipher</div>
            <div className='flex gap-10'>
                <div className='flex flex-col gap-10'>
                    <input type="text" onChange={(e) => setK(e.target.value)} className='p-2 rounded-lg' />
                    <button className='border-rose-500'  onClick={() => encryptText()}>Set Key</button>
                </div>
                <div className='flex-col '>
                    <input type="text" onChange={(e) => setPlainText(e.target.value)} className='p-2 rounded-lg' />
                    <div className='m-5'>Encrypted Text: <span className='bg-zinc-600 px-3 rounded-lg'>{enc}</span></div>
                    <button className='border-green-500'  onClick={() => encryptText()}>Encrypt</button>
                </div>
                <div>
                    <input type="text" onChange={(e) => setDecryptedText(e.target.value)} className='p-2 rounded-lg' />
                    <div className='m-5'>Decrypted Text: <span className='bg-zinc-600 px-3 rounded-lg'>{dec}</span></div>
                    <button className='border-blue-500'  onClick={() => decryptText()}>Decrypt</button>
                </div>
            </div>
        </>
    )
}

export default VigenerCipher

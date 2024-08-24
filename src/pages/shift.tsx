import { useState } from 'react'
import '../App.css'

function ShiftCipher() {
    const [plainText, setPlainText] = useState<string>("")
    const [enc, setEnc] = useState<string>("")
    const [k, setK] = useState<number>(0)
    const [decryptedText, setDecryptedText] = useState<string>("")
    const [dec, setDec] = useState<string>("")

    const encryptText = () => {
        let enStr = ""
        for (let i = 0; i < plainText.length; i++) {
            let indexValue = 0;
            let ascii = plainText.charCodeAt(i)
            if (ascii >= 65 && ascii <= 90) {
                indexValue = (plainText.charCodeAt(i) + k - 65) % 26
                console.log(plainText.charCodeAt(i))
                enStr += String.fromCharCode(indexValue + 65)
            }
            else if (ascii >= 97 && ascii <= 122) {
                indexValue = (plainText.charCodeAt(i) + k - 97) % 26
                console.log(plainText.charCodeAt(i))
                enStr += String.fromCharCode(indexValue + 97)
            }
        }
        setEnc(enStr)
    }

    const decryptText = () => {
        let deStr = ""
        for (let i = 0; i < decryptedText.length; i++) {
            let asciNumber = 0;
            let ascii = decryptedText.charCodeAt(i)
            if (ascii >= 65 && ascii <= 90) {
                asciNumber = (ascii - k - 65 + 26) % 26
                deStr += String.fromCharCode(asciNumber + 65)
            }
            else if (ascii >= 97 && ascii <= 122) {
                asciNumber = (ascii - k - 97 + 26) % 26
                deStr += String.fromCharCode(asciNumber + 97)
            }
        }
        console.log("Hello", deStr)
        setDec(deStr)
    }

    return (
        <>
            <div className='text-2xl font-bold mb-20'>Shift Cipher</div>
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

export default ShiftCipher

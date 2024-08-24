import { useState } from 'react'
import '../App.css'

function AffineCipher() {
    const [plainText, setPlainText] = useState<string>("")
    const [enc, setEnc] = useState<string>("")
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    const [decryptedText, setDecryptedText] = useState<string>("")
    const [dec, setDec] = useState<string>("")

    const encryptText = () => {
        let enStr = ""
        for (let i = 0; i < plainText.length; i++) {
            let x = plainText[i].charCodeAt(0) - 65
            let char = (a * (x) + b) % 26
            enStr += String.fromCharCode(char + 65)
        }
        setEnc(enStr)
    }
    const inverseAdditive = () => {
        let r1 = 26
        let r2 = a
        let t1 = 0
        let t2 = 1
        while (r2 > 0) {
            let q = Math.floor(r1 / r2)
            let r = r1 - (q * r2)
            r1 = r2
            r2 = r
            let t = t1 - (q * t2)
            t1 = t2
            t2 = t
        }
        if (r1 == 1) {
            console.log("t1", (t1 + 26) % 26)
            return (t1 + 26) % 26
        }
        else return 0
    }
    const decryptText = () => {
        let deStr = ""
        let ainv = inverseAdditive()
        for (let i = 0; i < decryptedText.length; i++) {
            let x = decryptedText[i].charCodeAt(0) - 65
            let char = (ainv * (x - b)) % 26
            deStr += String.fromCharCode((char + 26) % 26 + 65)
        }
        setDec(deStr)
    }

    return (
        <>
            <div className='text-2xl font-bold mb-20'>Affine Cipher</div>
            <div className='flex gap-10'>
                <div className='flex  h-10 gap-10'>
                    <div className='flex flex-col gap-2'>
                        <input type="number" onChange={(e) => setA(Number(e.target.value) % 26)} className='p-2 rounded-lg' />
                        <button className='border-rose-500' onClick={() => encryptText()}>Set A</button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <input type="number" onChange={(e) => setB(Number(e.target.value) % 26)} className='p-2 rounded-lg' />
                        <button className='border-rose-500' onClick={() => encryptText()}>Set B</button>
                    </div>
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

export default AffineCipher

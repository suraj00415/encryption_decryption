import { useState } from 'react'
import '../App.css'

function FeistelCipher() {
    const [plainText, setPlainText] = useState<string>("")
    const [enc, setEnc] = useState<string>("")
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    const [decryptedText, setDecryptedText] = useState<string>("")
    const [dec, setDec] = useState<string>("")
    let keys: string[] = []
    const rounds = (pt: string, key: string) => {
        let l0 = pt.slice(0, pt.length / 2)
        let r0 = pt.slice(pt.length / 2, pt.length)
        let r1 = ""
        let l1 = ""
        for (let i = 0; i < r0.length; i++) {
            l1 += (Number(key[i]) ^ Number(r0[i]) ^ Number(l0[i]))
        }
        r1 = l0
        setEnc(l1 + r1)
        return l1 + r1
    }
    const randomKeys = (krounds = 10, k = 4) => {
        for (let i = 0; i < krounds; i++) {
            let key = ""
            for (let j = 0; j < k; j++) {
                key += Math.floor(Math.random() * 2)
            }
            keys.push(key)
        }
        console.log(keys)
    }
    const encryptText = () => {
        let krounds = 2
        let pt = ["11010111"]
        for (let i: number = 0; i < krounds; i++) {
            pt[i + 1] = rounds(pt[i], keys[i])
        }
        setEnc(pt[pt.length - 1])
    }
    randomKeys()
    const decryptText = () => {
        let deStr = ""
        for (let i = 0; i < decryptedText.length; i++) {
            let x = decryptedText[i].charCodeAt(0) - 65
            let char = (ainv * (x - b)) % 26
            deStr += String.fromCharCode((char + 26) % 26 + 65)
        }
        setDec(deStr)
    }

    return (
        <>
            <div className='text-2xl font-bold mb-20'>Feistel Cipher</div>
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

export default FeistelCipher

import { useState } from 'react'
import '../App.css'

function PlayfairCipher() {
    const [plainText, setPlainText] = useState<string>("")
    const [enc, setEnc] = useState<string>("")
    const [k, setK] = useState<string>("")
    const [dummyLet, setDummyLet] = useState<string>("")
    const [decryptedText, setDecryptedText] = useState<string>("")
    const [dec, setDec] = useState<string>("")

    const setMatrix = (key: string) => {
        let uniqueKey = "";
        key.split("").forEach(char => {
            if (!uniqueKey.includes(char)) {
                uniqueKey += char;
            }
        });
        const table = new Array(5).fill(null).map(() => new Array(5).fill(''));
        let alphabet = "abcdefghiklmnopqrstuvwxyz";
        let index = 0;
        let uIndex = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (uIndex < uniqueKey.length) {
                    table[i][j] = uniqueKey[uIndex];
                    uIndex++
                }
                else {
                    while (uniqueKey.includes(alphabet[index])) index++;
                    table[i][j] = alphabet[index];
                    index++;
                }
            }
        }
        console.log("key:", table)
        return table;
    }
    const giveDiagram = (text: string, dummyLetter: string = 'z') => {
        let newText = ""
        for (let i = 0; i < text.length - 1; i++) {
            if (text[i] === text[i + 1] && i % 2 == 0) {
                newText += text[i] + dummyLetter
            }
            else {
                newText += text[i]
            }
        }
        newText += text[text.length - 1]
        if (newText.length % 2 !== 0) newText += dummyLetter
        let diagram = []
        for (let i = 0; i < newText.length; i += 2) {
            diagram.push(newText[i] + newText[i + 1])
        }
        console.log("diagram:", diagram)
        return diagram
    }
    const encryptText = () => {
        let enStr = ""
        let pt = plainText.split(' ').join('')
        console.log("pt", pt)
        let matrix = setMatrix(k)
        let diagram = giveDiagram(pt, dummyLet)
        diagram.forEach((a) => {
            let [char1, char2] = [a[0], a[1]]
            let [row1, col1, row2, col2] = [-1, -1, -1, -1]
            matrix.forEach((m, rowIndex) => {
                m.forEach((char, colIndex) => {
                    if (char === char1) {
                        row1 = rowIndex
                        col1 = colIndex
                    }
                    else if (char === char2) {
                        row2 = rowIndex
                        col2 = colIndex
                    }
                })
            })
            if (row1 === row2) {
                enStr += matrix[row1][(col1 + 1) % 5] + matrix[row2][(col2 + 1) % 5]
            }
            else if (col1 === col2) {
                enStr += matrix[(row1 + 1) % 5][col1] + matrix[(row2 + 1) % 5][col2]
            }
            else {
                enStr += matrix[row1][col2] + matrix[row2][col1]
            }
        })
        setEnc(enStr)
    }
    const decryptText = () => {
        let deStr = ""
        let matrix = setMatrix(k)
        let diagram = giveDiagram(decryptedText, dummyLet)
        diagram.forEach((a) => {
            let [char1, char2] = [a[0], a[1]]
            let [row1, col1, row2, col2] = [-1, -1, -1, -1]
            matrix.forEach((m, rowIndex) => {
                m.forEach((char, colIndex) => {
                    if (char === char1) {
                        row1 = rowIndex
                        col1 = colIndex
                    }
                    else if (char === char2) {
                        row2 = rowIndex
                        col2 = colIndex
                    }
                })
            })
            if (row1 === row2) {
                deStr += matrix[row1][(col1 - 1 + 5) % 5] + matrix[row2][(col2 - 1 + 5) % 5]
            }
            else if (col1 === col2) {
                deStr += matrix[(row1 - 1 + 5) % 5][col1] + matrix[(row2 - 1 + 5) % 5][col2]
            }
            else {
                deStr += matrix[row1][col2] + matrix[row2][col1]
            }
        })
        setDec(deStr)
    }

    return (
        <>
            <div className='text-2xl font-bold mb-20'>Playfair Cipher</div>
            <div className='flex gap-10'>
                <div className='flex flex-col gap-10'>
                    <div className='flex gap-5'>
                        <input type="text" onChange={(e) => setK(e.target.value)} className='p-2 rounded-lg' />
                        <button className='border-rose-500'  onClick={() => encryptText()}>Set Key</button>
                    </div>
                    <div className='flex gap-5'>
                        <input type="text" onChange={(e) => setDummyLet(e.target.value)} className='p-2 rounded-lg' />
                        <button className='border-rose-500'  onClick={() => encryptText()}>Set DummyData</button>
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

export default PlayfairCipher
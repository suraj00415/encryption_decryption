import { useState } from 'react'
import '../App.css'

function ColumnarCipher() {
    const [plainText, setPlainText] = useState<string>("")
    const [enc, setEnc] = useState<string>("")
    const [k, setK] = useState<string>("")
    const [decryptedText, setDecryptedText] = useState<string>("")
    const [dec, setDec] = useState<string>("")

    const matrixGenerator = (key: string, word: string) => {
        let matrix = []
        let rows = Math.ceil(word.length / key.length)
        let wordTraverse = 0;
        for (let i = 0; i < rows; i++) {
            let row = []
            for (let j = 0; j < key.length; j++) {
                if (word[wordTraverse]) {
                    row[j] = word[wordTraverse++]
                }
                else {
                    row[j] = "*"
                }
            }
            matrix[i] = row
        }
        console.log(matrix)
        return matrix
    }
    const matrixGeneratorDec = (key: string, word: string) => {
        let rows = Math.ceil(word.length / key.length)
        let matrix1 = Array.from({ length: rows }).map(() => Array.from({ length: key.length }).map(() => ''))
        let order = generateOrder(key)
        console.log(order)
        let traverse = 0
        let t = 0
        while (t < key.length) {
            for (let i = 0; i < key.length; i++) {
                let val = order[i]
                if (val == t) {
                    for (let k = 0; k < rows; k++) {
                        if (word[traverse] && word[traverse] !== '*') {
                            matrix1[k][i] = word[traverse++]
                        }
                        else if (word[traverse] == '*') {
                            matrix1[k][i] = ""
                        }
                        else {
                            matrix1[k][i] = " "
                        }
                    }
                    t++;
                }
            }
        }
        return matrix1
    }
    const generateOrder = (key: string) => {
        let keyMat = key.split('')
        keyMat = keyMat.map((k, i) => {
            return ([k, i])
        })
        let order = keyMat.sort((a, b) => {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        })
        let order2 = order.map((a) => a[1])
        let keyMat2 = order2.map((k, i) => {
            return ([k, i])
        })
        let orderMain = keyMat2.sort((a, b) => {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        })
        let orderMatrix = orderMain.map((a) => a[1])
        return orderMatrix
    }

    const encryptText = () => {
        let enStr = ""
        let matrix = matrixGenerator(k, plainText)
        let orderMatrix = generateOrder(k)
        let t = 0;
        let rows = Math.ceil(plainText.length / k.length)
        while (t < k.length) {
            for (let i = 0; i < k.length; i++) {
                let val = orderMatrix[i]
                if (val == t) {
                    for (let j = 0; j < rows; j++) {
                        enStr += matrix[j][i]
                    }
                    t++;
                }
            }
        }
        setEnc(enStr)
    }

    const decryptText = () => {
        let deStr = ""
        let mat = matrixGeneratorDec(k, decryptedText)
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[0].length; j++) {
                deStr += mat[i][j]
            }
        }
        setDec(deStr)
    }

    return (
        <>
            <div className='text-2xl font-bold mb-20'>Columnar Cipher</div>
            <div className='flex gap-10'>
                <div className='flex flex-col gap-10'>
                    <input type="text" onChange={(e) => setK(e.target.value)} className='p-2 rounded-lg' />
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

export default ColumnarCipher

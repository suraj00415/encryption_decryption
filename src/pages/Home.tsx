import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="flex-col gap-10">
            <div className="font-bold mb-20 text-3xl">
                Encryption and Decryption Algorithms
            </div>
            <div className="flex  gap-5">
                <div className="">
                    <button className="bg-green-500 text-black" onClick={() => navigate('/shift')}>Shift Cipher</button>
                </div>
                <div>
                    <button className="bg-green-500 text-black" onClick={() => navigate('/mono')}>MonoAlphabetic Cipher</button>
                </div>
                <div>
                    <button className="bg-green-500 text-black" onClick={() => navigate('/vigener')}>Vigenere Cipher</button>
                </div>
                <div>
                    <button className="bg-green-500 text-black" onClick={() => navigate('/play')}>Playfair Cipher</button>
                </div>
                <div>
                    <button className="bg-green-500 text-black" onClick={() => navigate('/railFence')}>RailFence Cipher</button>
                </div>
                <div>
                    <button className="bg-green-500 text-black" onClick={() => navigate('/column')}>Columnar Cipher</button>
                </div>
                <div>
                    <button className="bg-green-500 text-black" onClick={() => navigate('/affine')}>Affine Cipher</button>
                </div>
                <div>
                    <button className="bg-green-500 text-black" onClick={() => navigate('/feistel')}>Feistel Cipher</button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { MoveRight, X } from "lucide-react"

type Props = {
    oncloseadd: () => void
}

const Add: React.FC<Props> = ({ oncloseadd }) => {
    return (
        <div className='w-[100%] h-[9vh] flex  items-center justify-center lg:text-accent text-sm mb-4'>
            <div className='lg:w-[80%] w-[90%] flex justify-between bg-blue-800 p-4 rounded-xl text-white'>
                <div className='flex justify-between'>
                    Slack is Your digital HQ. Meet the new features keeping teams conntected in the work from home-anywhere world.<span className='font-bold underline flex'>
                        Let's Go
                        <MoveRight />
                    </span>
                </div>
                <div>
                    <X onClick={oncloseadd} />
                </div>
            </div>
        </div>
    )
}

export default Add
"use client"; // This is a client componen
import Image from 'next/image'
import React, {useState} from 'react'
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export default function Home() {

  const [model, setModel] = useState('')
  const [Date, setDate] = useState('')
  const [Quantity, setQuantity] = useState('')
  const [LicenseLv, setLicenseLv] = useState('')
  const [Comment, setComment] = useState('')

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    const serial = Math.floor(Math.random() * 100).toString()
    console.log({model, Date, Quantity, LicenseLv, Comment, serial})
    console.log(JSON.stringify({
      model: model,
      Date: Date , //+ "T00:00:00"
      Quantity: Quantity,
      LicenseLv: LicenseLv,
      Comment: Comment,
      serialnum: serial
    }))

    const response = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model,
        Date: Date , //+ "T00:00:00"
        Quantity: Quantity,
        LicenseLv: LicenseLv,
        Comment: Comment,
        serialnum: serial
      }),
    })

    const data = await response.json()
    console.log(data)
  }




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p> */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            {' '}
            <Image
              src="/FCL.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={48}
              priority
            />
          
        </div>
      </div>

      <div className='text-center border 2 border-othercolor rounded text-white p-10 w-1/3'>
      <h1 className='text-left mb-5 font-bold text-lg'>Batch Form</h1>
      <form className="space-y-2 p-1"  method="POST" /*</div>action="console.log()"*/ onSubmit={handleSubmit}>
        <div className='text-black'>
          <select className="w-full p-1" name="model" id="model" placeholder="Model"
          value={model} onChange={e => setModel(e.target.value)}>
            <option value="" selected disabled>
              Model
            </option>
            <option value="model1">Model 1</option>
            <option value="model2">Model 2</option>
            <option value="model3">Model 3</option>
            </select>
        </div>

        <div>
          <input className='border-slate-500 rounded text-black w-full p-1' type="date" name="Date" id="Date" placeholder="yyyy/mm/dd"
          value={Date} onChange={e => setDate(e.target.value)}/>
        </div>

        <div className='border-slate-500'>
          <input className='rounded text-black w-full p-1' type="number" name="Quantity" id="Quantity" placeholder="Quantity" min="1"
          value={Quantity} onChange={e => setQuantity(e.target.value)}/>
        </div>


        <div className='text-black'>
          <select className="w-full p-1" name="LicenseLv" id="LicenseLv" placeholder="License Level"
          value={LicenseLv} onChange={e => setLicenseLv(e.target.value)}>
            <option value="" selected disabled>
              License Level
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            </select>
        </div>

        <div className='border-slate-500'>
          <textarea className='rounded w-full p-1 text-black' name="Comment"  placeholder="Comment (Not required)" 
          value={Comment} onChange={e => setComment(e.target.value)}></textarea>
        </div>

        <button className="rounded bg-othercolor text-white mt-5 w-full p-1" type="submit">Submit</button>
      </form>
    </div>
    </main>
  )
}

import { Input } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

function Main() {
  const [search, setSearch] = useState('')
  return (
    <div className="flex flex-col items-center">
      <div className="flex py-20 justify-center max-w-7xl">
        <Image src="/logo.png" width={332} height={40} alt="" />
      </div>
      <div className="w-[800px] px-5">
        <Input
          color="success"
          placeholder="캐릭터 닉네임을 검색해보세요."
          radius="full"
          value={search}
          endContent={<BiSearch size={24} />}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default Main

'use client'
import { useRouter } from 'next/navigation'
import { useState, ChangeEvent } from 'react'



interface iDefault {
    defaultValue: string | null
}


export default function SearchInput({ defaultValue }: iDefault) {
    const router = useRouter()

    const [inputValue, setValue] = useState(defaultValue)


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value
        setValue(inputValue)
    }

    const handleSearch = () => {
        if (inputValue) return router.push(`/product?q=${inputValue}`);
        if (!inputValue) return router.push("/")
    }

    const handleKeyPress = (event: { key: any }) => {
        if (event.key === "Enter") return handleSearch()
    }

    return (
        <div className="search_input flex h-10 w-[250px] rounded-md bg-gray-200 px-3 py-2 text-sm placeholder:text-gray-600 focus-within:ring-1 focus-within:ring-black/30 focus-within:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 flex-row items-center gap-2">
        <input
            type="text"
            id="inputId"
            placeholder="search product"
            value={inputValue ?? ""}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className="bg-transparent outline-none border-none w-full placeholder:text-gray-600"
        />
    </div>
    )

}
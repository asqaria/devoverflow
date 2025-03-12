import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
  } from "@/components/ui/select"
import React from 'react'

interface Props {
    filters: {
        name: string,
        value: string
    }[],
    otherClass?: string,
    containerClass?: string
}

const Filter = ({filters, otherClass, containerClass} : Props) => {
  return (
    <div className={`relative ${containerClass}`}>
        <Select>
            <SelectTrigger className={`${otherClass} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}>
                <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                {
                    filters.map((filter, index) => (
                        <SelectItem key={index} value={filter.value}>
                            {filter.name}
                        </SelectItem>
                    ))
                }
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
  )
}

export default Filter
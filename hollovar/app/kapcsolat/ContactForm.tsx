"use client"

import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {

    return (
        <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Keresztnév" required={true} />
                <Input placeholder="Vezetéknév" required={true} />
            </div>
            <Input type="email" placeholder="E-mail" required={true} />
            <Input placeholder="Tárgy" required={true} />
            <Textarea placeholder="Az üzeneted" rows={4} required={true} />
            <Button type="submit" className="w-full">Üzenet küldése</Button>
        </form>
    )
}

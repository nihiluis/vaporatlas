import React from "react"

export default function Header() {
  return (
    <header className="container mx-auto mb-8">
      <div className="pt-4 mt-4 table mx-auto rounded-md">
        <p className="text-2xl font-title uppercase tracking-wide font-bold">Vapor Atlas</p>
      </div>
      <div className="p-2 text-sm table mx-auto rounded-md hidden">
          <p>Welcome.</p>
        </div>
    </header>
  )
}

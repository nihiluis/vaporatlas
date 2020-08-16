import React from "react"
import Header from "./Header"

export function Layout(props: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <div className="container mx-auto">{props.children}</div>
    </React.Fragment>
  )
}

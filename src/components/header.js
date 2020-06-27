import React from "react"

import LanguageSelector from "./LanguageSelector"

const Header = ({ lang, location = null }) => (
  <header style={{
      backgroundColor: `#e5f8fb`
  }}>
    <div
      style={{
        textAlign: `right`,
        maxWidth: 1500,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <LanguageSelector location={location} lang={lang} />
    </div>
  </header>
)

export default Header

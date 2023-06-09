import React, { useState } from 'react'

const  Explorer = (files) => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen);
  }

  console.log(JSON.stringify(files.data))
  if(files.data.isFolder){
    return <div>
      <p style = {{marginLeft: 20, cursor: 'pointer'}} onClick={() => handleClick()}> {isOpen ? "˅ " : "˃ "}<span>📁 {files.data.name}</span></p>
        <div style = {{display: isOpen ? "block" : "none", marginLeft: 20, borderLeft: '1px solid'}}>
        {files.data.items.map(element => {
          return <Explorer  data = {element} />
        })}
        </div>
    </div>
  }
  else {
    return <p style = {{marginLeft: 20, cursor: 'pointer'}}>📄 {files.data.name}</p>
  }
}

export default Explorer;
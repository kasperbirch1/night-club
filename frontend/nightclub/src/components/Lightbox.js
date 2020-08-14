import React, { useState } from 'react'
import Modal from 'react-modal';


const Lightbox = ({ img, open }) => {
    const [IslightboxToggle, setIslightboxToggle] = useState(open)

    return (
        <Modal
            isOpen={IslightboxToggle}
            onRequestClose={() => { setIslightboxToggle(!IslightboxToggle) }}>
            <img src={img} alt="img" />
        </Modal>
    )
}

export default Lightbox

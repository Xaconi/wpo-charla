// Core
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

// Styles
import styles from '../styles/Home.module.css'

const Product: NextPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            Dummy Product { id }
        </>
    )
}

export default Product;
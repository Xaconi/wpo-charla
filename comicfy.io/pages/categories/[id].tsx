// Core
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

// Styles
import styles from '../styles/Home.module.css'

const Category: NextPage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            Dummy Category { id }
        </>
    )
}

export default Category;
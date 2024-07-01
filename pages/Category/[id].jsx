import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Center from '@/components/Center';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/Category'; // Import Category model
import { Product } from '@/models/Product'; // Import Product model
import Link from 'next/link';
import Loading from '@/components/Loading';
import ProductsGrid from '@/components/ProductsGrid';
import BackButton from '@/components/BackButton';

export default function CategoryInner({ categories, categoryProducts }) {
    const [parentCategory, setCategoryInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    console.log(categoryProducts);
    console.log(categoryProducts.length);


    useEffect(() => {
        if (!id) {
            return;
        }

        const fetchCategory = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/category?id=' + id);
                console.log('Response data:', response.data);
                setCategoryInfo(response.data);
                console.log('Parent category after setting:');
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();

    }, [id]);

    if (loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <div className='min-h-screen w-full flex justify-center'>
                    <Center>
                        <div>Error: {error}</div>
                    </Center>
                </div>
                <Footer />
            </>
        );
    }


    return (
        <>
            <BackButton />
            <Header />
            <div className='w-full min-h-screen flex justify-center'>
                <Center>
                    <div className='pt-10 px-10'>
                        <div className=''>
                            <div className='text-lg text-main-dark flex items-center' data-aos="fade-right">
                                <Link href={'/categories'} className='text-main-dark text-2xl'>
                                    Categories
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                {parentCategory.parent?.name ? (
                                    <div className='flex items-center text-main-dark text-lg'>
                                        <Link key={parentCategory._id} href={`/Category/${parentCategory._id}`}>
                                            {parentCategory.parent.name}
                                        </Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                ) : null}
                                
                                {parentCategory && parentCategory.name}
                            </div>
                        </div>
                        <div className='mt-10 w-full flex flex-wrap gap-16 category-list-container'>
                            {categories?.length > 0 && categories.map(category => (
                                category?.parent?.name ? (
                                    category.parent._id === parentCategory._id ? (
                                        <Link key={category._id} href={`/Category/${category._id}`}>
                                            <div className='min-w-64 px-5 py-3 text-center rounded shadow-md category-container tracking-wider'>
                                                {category.name}
                                            </div>
                                        </Link>
                                    ) : (
                                        null
                                    )
                                ) : null
                            ))}
                        </div>

                        <div className='w-full mt-10'>
                            {
                                categoryProducts?.length ? (
                                    <div className='mb-10 text-lg text-main-dark w-full justify-center flex'>Available products from this category</div>
                                ) : null
                                
                            }
                            <ProductsGrid products={categoryProducts} />
                        </div>
                    </div>
                </Center>
            </div>
            <Footer />
        </>
    );
}


export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;

    await mongooseConnect();
    const categories = await Category.find().populate('parent');
    const categoryProducts = await Product.find({ category: id });
    return {
        props: {
            categories: JSON.parse(JSON.stringify(categories)),
            categoryProducts: JSON.parse(JSON.stringify(categoryProducts)),
        }
    };

}


/*categoryProducts?.length > 0 && categoryProducts.map(categoryProduct => (
                                            <div key={categoryProduct._id}>{categoryProduct.name}</div>
                                        ))*/
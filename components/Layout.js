import Head from 'next/head';

import Header from './Header';
import MovieProvider from './MovieProvider';
import AddMovie from './AddMovie';
import Movies from './Movies';


const Layout = props => (
    <div>
        <Head>
            <title>Movie List</title>
        </Head>
        <MovieProvider>
            <Header />
            <AddMovie />
            <Movies />
        </MovieProvider>
    </div>
);

export default Layout;
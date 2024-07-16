///////////////////////
// Main Page Component
///////////////////////

// extra components
import Form from '../components/Form';

// assets
import HomeBG from '../assets/promocreditoBack.webp';

const Home = () => {
    return ( 
        <div className='min-h-screen flex items-center justify-center pt-3 bg-slate-100' style={{ backgroundImage: `url(${HomeBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Form />
        </div>
    );
}

export default Home;

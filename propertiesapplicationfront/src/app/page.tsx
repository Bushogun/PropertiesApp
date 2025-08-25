import RegisterProperty from '@/components/registerproperty/registerProperty';
import './page.css';

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Welcome to the Property Management App!</h1>
        <br />
        <p>Here you can easily register your properties.</p>
        <RegisterProperty />
      </div>
    </>
  );
}

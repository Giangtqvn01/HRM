import 'login.css'
import imageLogin  from 'assets/images/imageLogin.png';
const LoginUI = () => {
    return (
        <div className='auth-wrapper  auth-v3'>
            <div className='auth-content'>
                <div className='card'>
                    <div className='row align-items-streych text-center'>
                        <div className='col-md-6 img-card-side'>
                            <img src={imageLogin} alt="" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LoginUI;
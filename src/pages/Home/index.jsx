import './index.scss'

import {Link} from 'react-router-dom'

export default function Site() {
    return (

        <div className='container-site'>

            <div className="topoPage">

                <div className="logofrei">
                    <img src="/assets/images/logofrei.jpeg"  />

                    <h1>Instituto Nossa Senhora De Fátima</h1>
                </div>


                <div className="tituloPrincipal">
                </div>

                <div className="areaRegis">
                   <Link>Login</Link>
                    <Link>Admin</Link>
                    
                </div>

            </div>

        </div>
    )
}
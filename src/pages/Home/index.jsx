import './index.scss'

import { Link } from 'react-router-dom'

export default function Site() {
    return (

        <div className='container-site'>

            <div className="topoPage">

                <div className="logofrei">
                    <img src="/assets/images/logofrei.jpeg"  />
                </div>


                <div className="tituloPrincipal">
                </div>

                <div className="areaRegis">
                    <Link></Link>
                    <button>Login</button>
                    <button>Admin</button>
                    
                </div>

            </div>

        </div>
    )
}
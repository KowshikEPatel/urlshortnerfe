import './Footer.css'

export default function Footer(){
    return <div className='d-flex justify-content-between mt-2' id='footer' >
            <div style={{color:'#bcf8ec',margin:'4px'}}>
                 microURL
            </div>
            <div style={{color:'#bcf8ec',margin:'4px'}}>
                copyright &#169; Kowshik Patel
            </div>
            <div >
            <small><a href="https://www.vecteezy.com/free-vector/website" style={{color:'#bcf8ec',margin:'4px'}}>Website Vectors by Vecteezy</a></small>
            </div>
    </div>
}
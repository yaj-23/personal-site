import React from 'react'
import './Certifications.css'

function Certifications() {
  return (
    <>
        <div className='cert-container' id='certifications'>
            <h1 className='header_line'>Certifications.</h1>
            
            <div className='certs'>
                <div className='cert-card'>
                    <div>
                        <h2 className='certificate-title'>Docker Essentials: A Developer Introduction</h2>
                        <h5 className='certificate-issuer'>Issuer: IBM</h5>
                        <a href='https://www.credly.com/badges/3bb9d441-717a-455c-b2a5-da8f7e87d884/public_url' target='_blank' rel="noreferrer">
                            <h4 className='cred-link'>View On Credly</h4>
                        </a>
                    </div>
                </div>
                <div className='cert-card'>
                    <div>
                        <h2 className='certificate-title'>Containers & Kubernetes Essentials</h2>
                        <h5 className='certificate-issuer'>Issuer: IBM</h5>
                        <a href='https://www.credly.com/badges/d5ad375c-f591-4092-b2a1-09b0cec16fae/public_url' target='_blank' rel="noreferrer">
                            <h4 className='cred-link'>View On Credly</h4>
                        </a>
                    </div>
                </div>
                <div className='cert-card'>
                    <div>
                        <h2 className='certificate-title'>Trustworthy AI and AI Ethics</h2>
                        <h5 className='certificate-issuer'>Issuer: IBM</h5>
                        <a href='https://www.credly.com/badges/ce9f7dfa-6c13-41b6-a309-dcfd22ba9a14/public_url' target='_blank' rel="noreferrer">
                            <h4 className='cred-link'>View On Credly</h4>
                        </a>
                    </div>
                </div>
                <div className='cert-card'>
                    <div>
                        <h2 className='certificate-title'>IBM AI Associate for All IBMers</h2>
                        <h5 className='certificate-issuer'>Issuer: IBM</h5>
                        <a href='https://www.credly.com/badges/8f822c41-91c0-4c7b-a68c-ae414ffc4c21/public_url' target='_blank' rel="noreferrer">
                            <h4 className='cred-link'>View On Credly</h4>
                        </a>
                    </div>
                </div>
            </div>
            

        </div>
    </>
  )
}

export default Certifications
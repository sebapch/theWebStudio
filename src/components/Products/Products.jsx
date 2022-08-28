import React, {useContext} from 'react'
import { Container, Col, Row, Button, } from 'react-bootstrap'
import MinterFactory from '../../assets/minterFactory.png';
import DappsFactory  from '../../assets/dappsfactory.png';
import './Products.css'
import {LangContext} from '../../context/langContext'

const Products = () => {

    const { language } = useContext(LangContext);

  return (
    <div style={{marginTop: '4rem', marginBottom:'6rem'}}>
    <Container>
        <Row>
            <Col>
                <h1 className='title-products'>{language === 'es' ? <>Nuestros Productos</>: <>Our Products</>}</h1>
            </Col>
        </Row>
        <Row >
            <Col xs={12} md={6}>
                <img src={MinterFactory} alt='' width="100%"/>
            
                <h1 className='dev-title'>{language === 'es' ? <>DESARROLLO WEB</>: <>WEB DEVELOPMENT</>}</h1>
                <p className='dev-text'>{language === 'es' ? <>Desarrollamos sitios web2 y web3, con interacción con la blockchain.
                En este caso en particular nos conectamos con nuestra billetera Metamask y nos permite crear nuestro propio token y poder comenzar a distribuirlo o venderlo.
                Tambien trabajamos con NFTs, pagos y recibos de dinero.
                </>: <>We develop web2 and web3 sites, with interaction with the blockchain.
                In this particular case we connect with our Metamask wallet and it allows us to create our own token and be able to start distributing or selling it.
                We also work with NFTs, payments and money receipts.</>}
                </p>
                <label className='dev-link'>www.minterfactory.io</label>
            </Col>
            <Col xs={12} md={6}>
                <img src={DappsFactory} alt='' width="100%"/>
                <h1 className='dev-title'>{language === 'es' ? <>BLOCKCHAIN</>: <>BLOCKCHAIN</>}</h1>
                <p className='dev-text'>{language === 'es' ? <>Sistema completo para la creación de NFTS para empresas, con panel de administración completo para crear colecciones, whitelists, lazy minting, minteo masivo
                con incluso más características que marketplaces conocidos como OpenSea
                </>: <>Complete system for the creation of NFTS for companies, with a complete administration panel to create collections, whitelists, lazy minting, mass mining
                with even more features than well-known marketplaces like OpenSea</>}
                </p>
                <label className='dev-link'>www.perceptionface.com</label>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Products
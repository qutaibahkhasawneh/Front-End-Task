import React from 'react';


function Index() {
  return (
    <>
     {/* <!-- about section starts --> */}
    <section id="about" className="about section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-12">
                    <div className="about-img">
                        
                        <ul className="list-group">
                            <li className="list-group-item discover">Discover</li>
                            <li className="list-group-item">Featured Auckland deals</li>
                            <li className="list-group-item">Collection</li>
                            <li className="list-group-item">Escapes</li>
                            <li className="list-group-item">Activities, Events & Outdoors</li>
                            <li className="list-group-item">Store</li>
                            <li className="list-group-item">Restaurants, Bars, Cafes </li>
                            <li className="list-group-item">Beauty, Massage & Spa</li>
                            <li className="list-group-item">House & Garden</li>
                            <li className="list-group-item">Fitness & Sports</li>
                            <li className="list-group-item">Automotive</li>
                        </ul>
                    </div>
                </div>
             
                <div className="col-lg-4 col-md-12 col-12">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/495x343/72261801c65153cebc45e2933358bbe8564d8be7.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,color: '#92a2ad'}}>Manuka</span><br/> 
                            </p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                    <div className="card"  style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/495x343/6c2e0edaf4f47434bf3392d5cc343e12891801c1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span  style={{fontweight: '300' ,color: '#92a2ad'}}>Manuka</span><br/>
                            </p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
    {/* <!-- about section Ends --> */}

    <div className="container">
        <section id="contact" className="mt-1 mb-3">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-12">
                    <div className="card custom-card">
                        <div className="text-left">
                            
                            <div className="m-4">
                                <div className="input-group mt-4 mb-3">

                                    <label className="text-center"></label><input type="text"
                                        placeholder="enter email address" className="form-control"/><button className="btn btn-info border-rad custom-btn" type="button" id="button-addon2">Subscribe</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>


    {/* First section */}

    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">Featured Auckland deals</span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/03271b22cb2560bde21866096247b76a0be8d7c4.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/019850b24ec3f7ca6124af2b61222914c2725571.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/60b19db3cecf3a2527815ea329a61d628ce0f027.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/73d91e41f241c00a6b5f3370351d23b0148e0696.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/8200f7f4afa3dff83eb20e4745d77a5f6af1ce45.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/db47efc113728b3eebf669248c7b850a3eff9b10.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/059d85fc7ef479b39b5bb1640f1854d92bfd6814.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/1fd23968e0719579f69a59c0838d99ab34001a61.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

            </div>
        </div>
    </div>

    {/* second section */}
    
    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">Collection</span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://mediacdn.grabone.co.nz/asset/DKqrqrT4pw" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-center" id="vivo">Vivo Hair & Beauty</h5>
                        <p className="card-text text-center"><span style={{color: '#01b2ee'}}>Multiple deals</span></p> 
                            <a className="rounded" href="#">View Collection</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://mediacdn.grabone.co.nz/asset/Hgg52yclDT" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-center" id="vivo">Vivo Hair & Beauty</h5>
                        <p className="card-text text-center"><span style={{color: '#01b2ee'}}>Multiple deals</span></p> 
                            <a className="rounded" href="#">View Collection</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://mediacdn.grabone.co.nz/asset/pMxEmxXJla" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-center" id="vivo">Vivo Hair & Beauty</h5>
                        <p className="card-text text-center"><span style={{color: '#01b2ee'}}>Multiple deals</span></p> 
                            <a className="rounded" href="#">View Collection</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://mediacdn.grabone.co.nz/asset/frwZQucLnS" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-center" id="vivo">Vivo Hair & Beauty</h5>
                        <p className="card-text text-center"><span style={{color: '#01b2ee'}}>Multiple deals</span></p> 
                            <a className="rounded" href="#">View Collection</a>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    </div>
    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">Escapes</span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/f29e545b1c33cf955ff2866455745f1a454b07b8.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/7c9bce5858cda3b49856d1c1c27f27886dcdc7a3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/d78d4bff7e79786fea3f2f75727cabe38051ffda.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/192468911cd958ee75d1c6dcf1aa24d28b43ebe4.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">Activities, Events & Outdoors</span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/192468911cd958ee75d1c6dcf1aa24d28b43ebe4.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/0d3b88b71374327a14f9643f068c9159528dfc84.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/e503b1d46fe26302f2482daeb3a8e7fd44ecfa5e.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/7efaaaf5ae8522aee76950508d945c9648cf85ce.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">Store</span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/d8f54dbc45b78053fcc1704de9dea00ab8002e9c.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/026976cbe486b72aa8aae0762c5a5bcc64dfda00.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/f80d1f7e8f3dfa32abe6e8af40e2dc0afd3543c2.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/89373853fb78c818504d3c4037ebb9b0d10a24e5.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">Restaurants, Bars, Cafes</span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/bf53bd66a5175a7ea0ed20fc110411e6491da906.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/eb2b185d1b80d38f61fa8629676c3584310da395.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/6c864b16526887b82d11b716a28b5b079630ff44.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/29c8af9c3871a3f81f29ca9f39c77a1c4eeba72c.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">Beauty, Massage & Spa</span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/e14d51d850c28fe0d6a2c2e96a4b7c5197940b8e.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/059d85fc7ef479b39b5bb1640f1854d92bfd6814.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/95bb5a9638d469582477860580e2d6f2d711e4c8.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/78dbc9dbbff71800864987aecbe3a9cf48a65cc2.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">House & Garden </span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/be260690a1b41f989a6615eb6505cb8a248b225a.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/1d0f37bc0b1fc8de2e0db34394c2126ad205be00.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/95722f4a7680db0660a3e609b9e5a9268c165954.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/6eb42ebe72679aae38ebf46fac6502cd2b68e49a.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">Fitness & Sports</span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/5e6d38cf939bc091aa0d4286a8e49cf464453cc5.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/2e4c59ef17c65ceb21fabc5fcd25a6125ebe9848.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/017b78945ba89d85b5cceff67e61374a3dbc9193.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/a8cbbfbc091b9361ae56056553b8960471513fca.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="services section-padding-top" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-left pb-3">
                        <a id="anc" href=""><span className="our services">Automotive</span></a>
                        <a  className="btn btn-info anc" href="">View More </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/db47efc113728b3eebf669248c7b850a3eff9b10.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' ,
                                color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/036005ce6acf4917d824a62dbef9bd8461347abb.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/9d588b0363182589d9cc711be593fcbe132853f4.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="https://main-cdn.grabone.co.nz/goimage/325x225/5dd246e9dcf8a5645991ab3be6d3802a2bf82241.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h3 className="card-title" id="title">Unlimited Entry Superpass to Rainbo</h3>
                            <p className="card-text Rainbow" >Rainbow End<br/><span style={{fontweight: '300' , color: '#92a2ad'}}>Manuka</span><br/>
                            <span></span></p>
                            <div className="count">2142 bought</div>
                            <div className="price">
                                <span className="from">from</span>
                                <div className="current">
                                    <span className="value">$64</span>$49
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    
  )
}

export default Index
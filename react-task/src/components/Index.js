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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-center" id="vivo">Vivo Hair & Beauty</h5>
                        <p className="card-text text-center"><span style={{color: '#01b2ee'}}>Multiple deals</span></p> 
                            <a className="rounded" href="#">View Collection</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-center" id="vivo">Vivo Hair & Beauty</h5>
                        <p className="card-text text-center"><span style={{color: '#01b2ee'}}>Multiple deals</span></p> 
                            <a className="rounded" href="#">View Collection</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-center" id="vivo">Vivo Hair & Beauty</h5>
                        <p className="card-text text-center"><span style={{color: '#01b2ee'}}>Multiple deals</span></p> 
                            <a className="rounded" href="#">View Collection</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-3">
                    <div className="card" style={{width: '100%'}}>
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-2.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-1.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt="..."/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt=""/>
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
                        <img src="assets/img/home-3.jpg" className="card-img-top" alt=""/>
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
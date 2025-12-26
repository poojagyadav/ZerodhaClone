import React from "react";
function Footer() {
  return (
   <footer style={{backgroundColor:"rgb(240,240,240)"}}>
    <div className="container border-top mt-5" >
      <div className="row mt-5">
        <div className="col">
          <img src="images/logo.svg" style={{ width: "50%" }} />
          <p>&copy;2010-2024,Not Zerodha Broking Ltd.All rights reserved.</p>
        </div>
        <div className="col">
          <p>About</p>
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Products</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Pricing</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Referral programme</a>
          <br />
          <a href=""  className="mb-3 text-muted"style={{textDecoration: "none",display: "inline-block"}}>Careers</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Zerodha.tech</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Press & media</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Zerodha cares(CSR)</a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Contact</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Support portal</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Z-Connect blog</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>List of charges</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Downloads & resources</a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Open an account</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>Fund transfer</a>
          <br />
          <a href="" className="mb-3 text-muted" style={{textDecoration: "none",display: "inline-block"}}>60 day challenge</a>
          <br />
        </div>
      </div>
      <div className="mt-5 text-muted" style={{fontSize:"14px"}}>
      <p>
        Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
        INZ000031633. CDSL: Depository services through Zerodha Broking Ltd. –
        SEBI Registration no.: IN-DP-431-2019. Commodity Trading through Zerodha
        Commodities Pvt. Ltd., MCX: 46025 – SEBI Registration no.: INZ000038238.
        Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
        Colony, Opp. Clarence Public School, J.P. Nagar 4th Phase, Bengaluru –
        560078, Karnataka, India. For any complaints pertaining to securities
        broking please write to complaints@zerodha.com , for DP related issues
        write to dp@zerodha.com . Please ensure you carefully read the Risk
        Disclosure Document as prescribed by SEBI | ICF.
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID.Benefits: Effective communication, Speedy
        redressal of grievances.
      </p>

      <p>
        Investments in securities market are subject to market risks; read all
        related documents carefully before investing.
      </p>

      <p>
        “Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one-time exercise
        while dealing in securities markets – once KYC is done through a SEBI
        registered intermediary, you need not undergo the same process again
        when you approach another intermediary.”
      </p>
    </div>
   
 <div
  style={{
    display: "flex",justifyContent: "center", gap: "16px",flexWrap: "wrap", fontSize: "16px",
  }}
>
  <a href="" className=" mb-3 text-muted" style={{ textDecoration: "none", display: "inline-block" }}>NSE</a>
  <a href="" className="text-muted" style={{ textDecoration: "none", display: "inline-block" }}>BSE</a>
  <a href="" className="text-muted" style={{ textDecoration: "none", display: "inline-block" }}>MCX</a>
  <a href="" className="text-muted" style={{ textDecoration: "none", display: "inline-block" }}>Terms&conditions</a>
  <a href="" className="text-muted" style={{ textDecoration: "none", display: "inline-block" }}>Policies&procedures</a>
  <a href="" className="text-muted" style={{ textDecoration: "none", display: "inline-block" }}>Privacy policy</a>
  <a href="" className="text-muted" style={{ textDecoration: "none", display: "inline-block" }}>Disclosure</a>
</div>

    </div>
    </footer>
  );
}

export default Footer;
